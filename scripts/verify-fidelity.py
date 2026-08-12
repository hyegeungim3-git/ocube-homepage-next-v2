# -*- coding: utf-8 -*-
"""회귀 게이트: 직전에 승인한 기준선(baseline/)과 이번 빌드(out/)의 DOM 이 같은지 검사.

이 저장소가 정본이므로 기준선도 저장소 안에 둔다. 의도한 변경이라면 `npm run baseline` 으로
기준선을 갱신하고, 그 변경 내용을 커밋 메시지에 남긴다.

비교 대상은 '화면에 나오는 것' 전부 — skip/header/m-panel/main/footer + head 메타.
런타임 스크립트는 비교 대상이 아니다(빌드마다 달라지는 부분이라 별도 보고).
"""
import os, re, sys, json, time, difflib
from bs4 import BeautifulSoup, NavigableString, Comment

# 한국어 Windows 콘솔은 기본 코드페이지가 cp949 라 결과표의 ✔/✘ 에서 죽는다.
# 비교 로직이 아니라 출력 인코딩만 고정한다 (PYTHONIOENCODING 없이도 npm run verify 가 돌게).
for _s in (sys.stdout, sys.stderr):
    try:
        _s.reconfigure(encoding="utf-8")
    except AttributeError:  # 파이프로 감싼 환경
        pass

_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OLD = os.path.join(_ROOT, "baseline")   # 직전 승인본
NEW = os.path.join(_ROOT, "out")        # 이번 빌드

SKIP_ATTRS = set()  # 필요 시 무시할 속성

# 배포 주소는 빌드 환경(로컬·Pages)에 따라 달라진다 → 같은 자리표시자로 정규화해 비교한다.
BASES = [
    "https://hyegeungim3-git.github.io/ocube-homepage-final/",
    "https://hyegeungim3-git.github.io/ocube-homepage-next/",
]


def unbase(s):
    for b in BASES:
        s = s.replace(b, "@@BASE@@")
    return s


def canon(node, out):
    """요소 트리를 정규화된 문자열 리스트로 평탄화."""
    if isinstance(node, Comment):
        return
    if isinstance(node, NavigableString):
        t = re.sub(r"\s+", " ", str(node)).strip()
        if t:
            out.append("#" + t)
        return
    if node.name in ("script", "style") and node.get("src") is None:
        body = re.sub(r"\s+", " ", node.decode_contents()).strip()
        out.append(f"<{node.name} inline={body}>")
        return
    at = []
    for k, v in sorted(node.attrs.items()):
        if k in SKIP_ATTRS:
            continue
        if isinstance(v, list):
            v = " ".join(v)
        v = re.sub(r"\s+", " ", str(v)).strip()
        at.append(f"{k.lower()}={v}")
    out.append(f"<{node.name.lower()} {' '.join(at)}>")
    for c in node.children:
        canon(c, out)
    out.append(f"</{node.name.lower()}>")


def flat(el):
    o = []
    if el is not None:
        canon(el, o)
    return o


BLOCK = {"html","body","head","div","section","article","aside","nav","header","footer","main",
         "p","h1","h2","h3","h4","h5","h6","ul","ol","li","dl","dt","dd","table","thead","tbody",
         "tfoot","tr","td","th","form","fieldset","figure","figcaption","blockquote","hr",
         "script","style","video","source","iframe","canvas","picture","noscript","legend"}


def _skip_comments(node, attr):
    """React 가 텍스트 경계에 넣는 <!-- --> 구분자를 건너뛰고 실제 형제를 찾는다."""
    sib = getattr(node, attr)
    while isinstance(sib, Comment):
        sib = getattr(sib, attr)
    return sib


def _inline_neighbor(node):
    for attr in ("previous_sibling", "next_sibling"):
        sib = _skip_comments(node, attr)
        if sib is None:
            continue
        if isinstance(sib, NavigableString):
            if str(sib).strip():
                return True
        elif getattr(sib, "name", None) not in BLOCK:
            return True
    return False


def text_sig(el):
    """브라우저가 실제로 렌더하는 텍스트(공백 규칙 적용).

    canon() 은 텍스트 노드마다 strip 하므로 인라인 요소 경계의 띄어쓰기 유실을 못 잡는다.
    (`<b>설립</b> (2007)` → `<b>설립</b>(2007)` 같은 결함)
    여기서는 하위 트리 전체를 이어붙인 뒤 공백만 접어 비교한다.
    """
    if el is None:
        return []
    parts = []
    for n in el.descendants:
        if isinstance(n, Comment):
            continue
        if isinstance(n, NavigableString):
            if n.parent.name in ("script", "style"):
                continue
            # 블록 요소 사이의 공백뿐인 노드는 브라우저가 렌더하지 않는다 → 양쪽 모두 제외
            if not str(n).strip() and not _inline_neighbor(n):
                continue
            parts.append(str(n))
    return [re.sub(r"\s+", " ", "".join(parts)).strip()]


def inline_script_sig(soup):
    """문서 전체의 인라인 스크립트(프레임워크 런타임 제외). 중복 삽입을 잡는다."""
    out = []
    for t in soup.find_all("script"):
        if t.get("src") or t.get("type") == "application/ld+json":
            continue
        body = re.sub(r"\s+", " ", t.get_text()).strip()
        if not body or "__next_f" in body or "self.__next" in body:
            continue
        out.append(body)
    return sorted(out)


def ld_sig(soup):
    """구조화 데이터는 위치(head/body)와 무관하게 내용만 비교."""
    out = []
    for t in soup.find_all("script", attrs={"type": "application/ld+json"}):
        try:
            out.append(unbase(json.dumps(json.loads(t.get_text()), sort_keys=True, ensure_ascii=False)))
        except Exception:
            out.append("<parse-error>")
    return sorted(out)


ASSET_VER = re.compile(r"assets/[A-Za-z0-9_-]+\.(?:js|css)\?v=[A-Za-z0-9.-]+")


def script_sig(raw):
    """우리가 관리하는 자산(site2.js·site2.css 등)의 판번호 서명.

    afterInteractive 스크립트는 정적 HTML 에 <script src> 태그로 남지 않고
    preload 링크와 프레임워크 페이로드에만 주소가 실린다(head 검사는 preload 를
    의도적으로 제외한다). 그래서 태그가 아니라 **원문 전체에서 판번호 패턴을 추출**해
    비교한다 — 판번호를 올리고 기준선을 안 올리면 여기서 걸린다."""
    return sorted({"asset:" + unbase(m) for m in ASSET_VER.findall(raw)})


def head_sig(soup):
    """head 의 title/meta/link 를 순서 무관 집합으로. ld+json 은 별도 검사."""
    sig = []
    for t in soup.head.find_all(["title", "meta", "link", "script"]):
        if t.name == "title":
            sig.append("title=" + re.sub(r"\s+", " ", t.get_text()).strip())
        elif t.name == "meta":
            k = t.get("name") or t.get("property") or ("charset" if t.get("charset") else "?")
            v = t.get("content") or t.get("charset") or ""
            sig.append(f"meta:{k}={re.sub(r'\s+', ' ', v).strip()}")
        elif t.name == "link":
            rel = " ".join(t.get("rel") or [])
            if rel == "preload":
                continue  # Next/React 가 성능 목적으로 덧붙이는 preload 는 비교 대상 아님
            sig.append(f"link:{rel}={t.get('href')}")
    # 프레임워크가 정규화하는 값(대소문자·1.0→1)은 동일 취급
    sig = [s.replace("meta:charset=UTF-8", "meta:charset=utf-8")
            .replace("initial-scale=1.0", "initial-scale=1") for s in sig]
    return sorted(unbase(x) for x in sig)


def diff(a, b, label, limit=6):
    if a == b:
        return None
    d = [l for l in difflib.unified_diff(a, b, "OLD", "NEW", lineterm="", n=0)
         if l.startswith(("+", "-")) and not l.startswith(("+++", "---"))]
    return (label, len(d), d[:limit])


def newest(root, exts):
    t = 0.0
    for dirpath, _dirs, files in os.walk(root):
        for f in files:
            if exts and not f.endswith(exts):
                continue
            t = max(t, os.path.getmtime(os.path.join(dirpath, f)))
    return t


def check_fresh():
    """out/ 이 지금 소스보다 낡았으면 멈춘다.

    빌드가 실패해도 out/ 에는 지난번 결과가 그대로 남는다. 그걸 모르고 verify 를 돌리면
    '528/528 통과' 라는 거짓 초록불이 뜬다(실제로 한 번 속았다). 그래서 먼저 물어본다.
    """
    if not os.path.isdir(NEW):
        print("out/ 이 없다. npm run build 를 먼저 실행할 것.")
        sys.exit(2)
    src = max(newest(os.path.join(_ROOT, "src"), (".ts", ".tsx", ".css", ".js", ".json")),
              newest(os.path.join(_ROOT, "public", "assets"), (".css", ".js")))
    out = newest(NEW, (".html",))
    if src > out + 1:
        print("out/ 이 소스보다 낡았다 — npm run build 를 먼저 실행할 것.")
        print(f"  최신 소스 {time.strftime('%H:%M:%S', time.localtime(src))} > "
              f"out/ {time.strftime('%H:%M:%S', time.localtime(out))}")
        sys.exit(2)


def main():
    check_fresh()
    # 한국어 25쪽 + 영어 23쪽(en/) — 영어 화면도 기준선 대조에 포함한다
    pages = sorted(f for f in os.listdir(OLD) if f.endswith(".html"))
    en_dir = os.path.join(OLD, "en")
    if os.path.isdir(en_dir):
        pages += sorted("en/" + f for f in os.listdir(en_dir) if f.endswith(".html"))
    total_ok = 0
    problems = []
    print(f"{'page':30} skip hdr mpnl main ftr text head  ld  js attr scr")
    for f in pages:
        o_raw = open(os.path.join(OLD, f), encoding="utf-8").read()
        o = BeautifulSoup(o_raw, "html.parser")
        np = os.path.join(NEW, f)
        if not os.path.exists(np):
            problems.append((f, "MISSING", 0, [f"빌드 산출물 없음: {np}"]))
            print(f"{f:30} 산출물 없음")
            continue
        n_raw = open(np, encoding="utf-8").read()
        n = BeautifulSoup(n_raw, "html.parser")

        checks = [
            ("skip", flat(o.body.find("a", class_="skip")), flat(n.body.find("a", class_="skip"))),
            ("header", flat(o.body.find("header")), flat(n.body.find("header"))),
            ("m-panel", flat(o.body.find("nav", class_="m-panel")), flat(n.body.find("nav", class_="m-panel"))),
            ("main", flat(o.body.find("main")), flat(n.body.find("main"))),
            ("footer", flat(o.body.find("footer")), flat(n.body.find("footer"))),
            ("text", text_sig(o.body.find("main")) + text_sig(o.body.find("footer")) + text_sig(o.body.find("header")),
                     text_sig(n.body.find("main")) + text_sig(n.body.find("footer")) + text_sig(n.body.find("header"))),
            ("head", head_sig(o), head_sig(n)),
            ("ld+json", ld_sig(o), ld_sig(n)),
            ("inline-js", inline_script_sig(o), inline_script_sig(n)),
            # <html>·<body> 자체 속성도 화면에 영향을 준다 (index 의 body.home-page 를 놓쳤던 자리)
            ("root-attr",
             [f"html:{sorted(o.html.attrs.items())}", f"body:{sorted(o.body.attrs.items())}"],
             [f"html:{sorted((k, v) for k, v in n.html.attrs.items() if k != 'suppresshydrationwarning')}",
              f"body:{sorted(n.body.attrs.items())}"]),
            # 우리가 관리하는 외부 스크립트의 주소·판번호 (head 검사가 못 보던 사각지대)
            ("scripts", script_sig(o_raw), script_sig(n_raw)),
        ]
        marks = []
        for label, a, b in checks:
            r = diff(a, b, label)
            if r is None:
                marks.append("  ✔ ")
                total_ok += 1
            else:
                marks.append(f"{r[1]:3}✘")
                problems.append((f, label, r[1], r[2]))
        print(f"{f:30} " + " ".join(m.rjust(4) for m in marks))

    print(f"\n검사 {len(pages)*11}건 중 통과 {total_ok}건 / 불일치 {len(problems)}건")
    for p in problems[:25]:
        print(f"\n--- {p[0]} :: {p[1]} (차이 {p[2]}줄) ---")
        for l in p[3]:
            print("   ", l[:220])
    return 0 if not problems else 1


if __name__ == "__main__":
    sys.exit(main())
