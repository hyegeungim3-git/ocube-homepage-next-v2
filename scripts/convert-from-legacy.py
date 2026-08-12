# -*- coding: utf-8 -*-
"""현재 사이트의 정적 HTML 23페이지를 Next.js App Router 구조로 기계 변환한다.

원칙: 마크업을 사람이 다시 쓰지 않는다. DOM 이 1:1로 보존되도록 변환만 한다.
- 공통 셸(skip/header/m-panel/site2.js)은 src/app/layout.tsx 로 1회만
- 페이지 고유 <head> 태그와 <main>, <footer> 는 각 page.tsx 로
"""
import os, re, sys, json
from bs4 import BeautifulSoup, NavigableString, Comment, Doctype

SRC = r"C:\오큐브\오큐브 홈페이지\홈페이지_시안\codex\public"
DST = r"C:\오큐브\ocube-next\src"
PUB = r"C:\오큐브\ocube-next\public"

# 원본에 하드코딩된 절대 주소. canonical·og:url·og:image·JSON-LD·sitemap 에 흩어져 있다.
# 전부 src/config/site.ts 한 곳으로 모아 배포 주소를 한 줄로 바꿀 수 있게 한다.
OLD_BASE = "https://hyegeungim3-git.github.io/ocube-homepage-final/"
NEW_BASE = "https://hyegeungim3-git.github.io/ocube-homepage-next/"
BASE_TOKEN = "@@BASE@@"

CARDS_HEADER = '''// 제목 + 설명만 있는 카드 그리드의 문구.
// 키는 "페이지:섹션id" 다. 예) "solution-cubeon:fit" → Cubeon 페이지의 "적합한 곳".
// 아이콘·이미지·링크가 붙은 카드는 형태가 달라 페이지에 그대로 두었다.
import type { RichToken } from "@/components/rich-text";

export interface DepCardItem {
  title: readonly RichToken[];
  body: readonly RichToken[];
}

export const depCards: Record<string, readonly DepCardItem[]> = '''

FEATS_HEADER = '''// 라벨 + 설명으로 된 항목 목록(.feat-list)의 문구.
// 키는 "페이지:섹션id" 다. 예) "solution-cubeon:overview".
// 제목이 h3 인 목록과 번호가 붙은 목록은 형태가 달라 페이지에 그대로 두었다.
import type { RichToken } from "@/components/rich-text";

export interface FeatItem {
  label: readonly RichToken[];
  body: readonly RichToken[];
}

export const featLists: Record<string, readonly FeatItem[]> = '''

STEPS_HEADER = '''// What We Do 단계 카드(.pin-item)의 문구와 일러스트.
// 키는 "페이지:섹션id" 다. 예) "business-ax:whatwedo".
// 형태가 섞인 목록(solution-cubeon #arch)은 페이지에 그대로 두었다.
import type { RichToken } from "@/components/rich-text";

export interface PinStep {
  no: string;
  slot: string;
  image: { src: string; alt: string; width: string; height: string };
  title: string;
  body: readonly RichToken[];
  bullets: readonly (readonly RichToken[])[];
}

export const pinSteps: Record<string, readonly PinStep[]> = '''

CASES_HEADER = '''// 구축 사례 카드(.bcase-card)의 문구와 이미지.
// projectCards 키는 "페이지:섹션id" (예: "business-ax:projects").
// homeCases 는 홈 마퀴용 4건 — 원본은 무한 스크롤을 위해 같은 행을 두 번 쓰지만
// 여기서는 한 번만 적고 컴포넌트가 복제한다.
import type { RichToken } from "@/components/rich-text";

export interface BcaseItem {
  image: { src: string; alt: string; width: string; height: string };
  cat: string;
  title: readonly RichToken[];
  sum: readonly RichToken[];
  bullets: readonly (readonly RichToken[])[];
}

export interface HomeCase extends BcaseItem {
  href: string;
  ariaLabel: string;
}

export const projectCards: Record<string, readonly BcaseItem[]> = '''

HOME_CASES_HEADER = "\n\nexport const homeCases: readonly HomeCase[] = "

# 라우트 매핑: 파일명 -> app 디렉터리 (index 는 루트)
def route_dir(fname):
    stem = fname[:-5]
    return "" if stem == "index" else stem

VOID = {"area","base","br","col","embed","hr","img","input","link","meta",
        "param","source","track","wbr"}

ATTR = {
    "class":"className","for":"htmlFor","tabindex":"tabIndex","readonly":"readOnly",
    "maxlength":"maxLength","minlength":"minLength","colspan":"colSpan","rowspan":"rowSpan",
    "cellpadding":"cellPadding","cellspacing":"cellSpacing","usemap":"useMap",
    "frameborder":"frameBorder","allowfullscreen":"allowFullScreen","autoplay":"autoPlay",
    "playsinline":"playsInline","srcset":"srcSet","crossorigin":"crossOrigin",
    "novalidate":"noValidate","autocomplete":"autoComplete","autofocus":"autoFocus",
    "enctype":"encType","formaction":"formAction","http-equiv":"httpEquiv",
    "accept-charset":"acceptCharset","contenteditable":"contentEditable",
    "spellcheck":"spellCheck","datetime":"dateTime","referrerpolicy":"referrerPolicy",
    "inputmode":"inputMode","charset":"charSet","srclang":"srcLang","hreflang":"hrefLang",
    # SVG (html.parser 가 속성명을 소문자로 낮추므로 되돌린다)
    "viewbox":"viewBox","preserveaspectratio":"preserveAspectRatio",
    "gradientunits":"gradientUnits","gradienttransform":"gradientTransform",
    "patternunits":"patternUnits","patterntransform":"patternTransform",
    "spreadmethod":"spreadMethod","markerwidth":"markerWidth","markerheight":"markerHeight",
    "markerunits":"markerUnits","refx":"refX","refy":"refY","clippathunits":"clipPathUnits",
    "maskunits":"maskUnits","maskcontentunits":"maskContentUnits","filterunits":"filterUnits",
    "stddeviation":"stdDeviation","floodcolor":"floodColor","floodopacity":"floodOpacity",
    "startoffset":"startOffset","textlength":"textLength","lengthadjust":"lengthAdjust",
    "pathlength":"pathLength","attributename":"attributeName","repeatcount":"repeatCount",
    "stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin",
    "stroke-dasharray":"strokeDasharray","stroke-dashoffset":"strokeDashoffset",
    "stroke-opacity":"strokeOpacity","stroke-miterlimit":"strokeMiterlimit",
    "fill-rule":"fillRule","fill-opacity":"fillOpacity","clip-rule":"clipRule","clip-path":"clipPath",
    "stop-color":"stopColor","stop-opacity":"stopOpacity","text-anchor":"textAnchor",
    "dominant-baseline":"dominantBaseline","alignment-baseline":"alignmentBaseline",
    "font-size":"fontSize","font-family":"fontFamily","font-weight":"fontWeight",
    "font-style":"fontStyle","letter-spacing":"letterSpacing","word-spacing":"wordSpacing",
    "text-decoration":"textDecoration","vector-effect":"vectorEffect","paint-order":"paintOrder",
    "shape-rendering":"shapeRendering","mix-blend-mode":"mixBlendMode","color-interpolation":"colorInterpolation",
    "marker-end":"markerEnd","marker-start":"markerStart","marker-mid":"markerMid",
    "xlink:href":"xlinkHref","xmlns:xlink":"xmlnsXlink","xml:space":"xmlSpace",
}
# html.parser 가 소문자로 낮춘 SVG 태그명 복원
TAG = {"textpath":"textPath","lineargradient":"linearGradient","radialgradient":"radialGradient",
       "clippath":"clipPath","foreignobject":"foreignObject","fegaussianblur":"feGaussianBlur",
       "fecolormatrix":"feColorMatrix","femerge":"feMerge","femergenode":"feMergeNode",
       "feoffset":"feOffset","feblend":"feBlend","feflood":"feFlood","fecomposite":"feComposite",
       "animatetransform":"animateTransform","animatemotion":"animateMotion"}
# React 타입이 number 를 요구하는 속성
NUM = {"rows","cols","size","span","start","colSpan","rowSpan","maxLength","minLength","tabIndex",
       "aria-level","aria-posinset","aria-setsize","aria-colcount","aria-colindex","aria-colspan",
       "aria-rowcount","aria-rowindex","aria-rowspan","aria-valuemax","aria-valuemin","aria-valuenow"}
BOOL = {"hidden","disabled","checked","selected","readonly","required","multiple","muted",
        "loop","controls","autoplay","playsinline","async","defer","novalidate","autofocus",
        "open","reversed","itemscope","default","inert","allowfullscreen","formnovalidate",
        "ismap","nomodule","seamless","typemustmatch","allowtransparency"}


def camel(prop):
    if prop.startswith("--"):
        return f"'{prop}'"
    return re.sub(r"-([a-z])", lambda m: m.group(1).upper(), prop)


def style_obj(v):
    parts = []
    for decl in v.split(";"):
        decl = decl.strip()
        if not decl or ":" not in decl:
            continue
        k, val = decl.split(":", 1)
        parts.append(f"{camel(k.strip())}: {json.dumps(val.strip())}")
    return "{{" + ", ".join(parts) + "}}"


def esc_text(t):
    return t.replace("\\", "\\\\").replace("{", "{'{'}").replace("}", "{'}'}") \
            .replace("<", "&lt;").replace(">", "&gt;")


# 블록 레벨 태그 사이의 공백만 있는 텍스트 노드는 렌더에 영향이 없어 버린다.
# 반대로 인라인 요소(b/em/a/span/wbr…) 곁의 공백은 반드시 살려야 한다.
BLOCK = {"html","body","head","div","section","article","aside","nav","header","footer","main",
         "p","h1","h2","h3","h4","h5","h6","ul","ol","li","dl","dt","dd","table","thead","tbody",
         "tfoot","tr","td","th","form","fieldset","figure","figcaption","blockquote","hr",
         "script","style","video","source","iframe","canvas","picture","noscript","legend"}


def _is_inline_sibling(sib):
    if sib is None:
        return False
    if isinstance(sib, Comment):
        return False
    if isinstance(sib, NavigableString):
        return bool(str(sib).strip())
    return getattr(sib, "name", None) not in BLOCK


def keep_space(node):
    return _is_inline_sibling(node.previous_sibling) or _is_inline_sibling(node.next_sibling)


def attrs_of(tag):
    out = []
    for k, v in tag.attrs.items():
        if isinstance(v, list):
            v = " ".join(v)
        if k == "style":
            out.append(f"style={style_obj(v)}")
            continue
        name = ATTR.get(k, k)
        if k.startswith(("data-", "aria-")):
            name = k
        elif name == k and re.search(r"[-:]", k) and not k.startswith(("data-", "aria-")):
            name = k  # 알 수 없는 하이픈 속성은 그대로 (React 가 통과시킴)
        if k in BOOL and (v == "" or v == k or v is True):
            out.append(f"{name}")
            continue
        if name in NUM and isinstance(v, str) and re.fullmatch(r"-?\d+", v.strip()):
            out.append(f"{name}={{{int(v)}}}")
            continue
        v = v if v is not None else ""
        # JSX 속성 문자열은 백슬래시 이스케이프를 해석하지 않는다.
        # 한글은 ensure_ascii=False 로 그대로 두고, 따옴표·백슬래시가 섞인 값만
        # 표현식 컨테이너({"..."})로 감싸 JS 문자열로 처리한다.
        lit = json.dumps(v, ensure_ascii=False)
        if '"' in v or "\\" in v or "\n" in v:
            out.append(f"{name}={{{lit}}}")
        else:
            out.append(f"{name}={lit}")
    return (" " + " ".join(out)) if out else ""


def to_jsx(node, indent=0, skip_comments=False):
    pad = "  " * indent
    if isinstance(node, Doctype):
        return ""
    if isinstance(node, Comment):
        if skip_comments:
            return ""
        c = str(node).strip().replace("*/", "*\u200b/")
        return f"{pad}{{/* {c} */}}\n"
    if isinstance(node, NavigableString):
        t = str(node)
        # 공백만 있는 노드: 인라인 이웃이 있을 때만 공백 1칸으로 살린다.
        if not t.strip():
            return f'{pad}{{" "}}\n' if keep_space(node) else ""
        # JSX 는 줄바꿈에 붙은 공백을 지워버리므로, 앞뒤 공백은 {" "} 로 명시한다.
        lead = '{" "}' if t[:1].isspace() else ""
        trail = '{" "}' if t[-1:].isspace() else ""
        return f"{pad}{lead}{esc_text(re.sub(r'\\s+', ' ', t.strip()))}{trail}\n"
    name = TAG.get(node.name, node.name)
    a = attrs_of(node)
    if name == "script" and not node.get("src"):
        body = node.decode_contents()
        if BASE_TOKEN in body:
            lit = json.dumps(body, ensure_ascii=False)
            return f'{pad}<script{a} dangerouslySetInnerHTML={{{{ __html: applyBase({lit}) }}}} />\n'
        return f'{pad}<script{a} dangerouslySetInnerHTML={{{{ __html: {json.dumps(body)} }}}} />\n'
    if name in VOID:
        return f"{pad}<{name}{a} />\n"
    inner = "".join(to_jsx(c, indent + 1, skip_comments) for c in node.children)
    if not inner.strip():
        return f"{pad}<{name}{a}></{name}>\n"
    if "\n" not in inner:
        return f"{pad}<{name}{a}>{inner}</{name}>\n"
    return f"{pad}<{name}{a}>\n{inner}{pad}</{name}>\n"


def gen_site_config():
    """배포 주소를 한 곳에서 관리한다. 실도메인이 정해지면 여기(또는 환경변수)만 바꾼다."""
    os.makedirs(os.path.join(DST, "config"), exist_ok=True)
    open(os.path.join(DST, "config", "site.ts"), "w", encoding="utf-8").write(
        "// 사이트의 정식 주소. canonical·og:url·og:image·JSON-LD·sitemap 이 모두 이 값을 쓴다.\n"
        "// 실도메인이 정해지면 NEXT_PUBLIC_SITE_URL 로 덮거나 이 기본값을 바꾸면 된다.\n"
        "export const siteBaseUrl =\n"
        f"  process.env.NEXT_PUBLIC_SITE_URL ?? {json.dumps(NEW_BASE)};\n\n"
        "/** 사이트 루트 기준 경로를 절대 URL 로 만든다. */\n"
        "export function withBase(path: string): string {\n"
        '  return siteBaseUrl + path.replace(/^\\//, "");\n'
        "}\n\n"
        "/** 문자열 안의 주소 자리표시자를 실제 주소로 바꾼다 (JSON-LD 용). */\n"
        "export function applyBase(text: string): string {\n"
        f"  return text.split({json.dumps(BASE_TOKEN)}).join(siteBaseUrl);\n"
        "}\n"
    )


def rewrite_public_base():
    """public/ 의 sitemap.xml·robots.txt 도 같은 주소를 쓰게 맞춘다."""
    for name in ("sitemap.xml", "robots.txt"):
        p = os.path.join(PUB, name)
        if not os.path.exists(p):
            continue
        src = os.path.join(SRC, name)
        text = open(src, encoding="utf-8").read()
        open(p, "w", encoding="utf-8", newline="").write(text.replace(OLD_BASE, NEW_BASE))


def head_tags(soup):
    """페이지 고유 head 태그(React 19 가 head 로 hoist). charset/viewport 는 Next 기본에 위임."""
    keep = []
    for t in soup.head.find_all(["title", "meta", "link", "script"], recursive=False):
        if t.name == "meta":
            if t.get("charset") is not None:
                continue
            if t.get("name") == "viewport":
                continue
        # 인라인 부트 스크립트(js 클래스 부여)는 레이아웃이 담당한다.
        # 여기서도 렌더하면 문서에 두 번 들어간다.
        if t.name == "script" and not t.get("src") and t.get("type") != "application/ld+json":
            continue
        # 스타일시트·preconnect 는 레이아웃의 <head> 로 옮긴다.
        # (React 19 는 이들을 head 로 hoist 하지 않아 body 에 남고 FOUC 가 생긴다)
        if t.name == "link" and set(t.get("rel") or []) & {"stylesheet", "preconnect"}:
            continue
        # 하드코딩된 절대 주소를 자리표시자로 바꿔 둔다 (아래에서 withBase/applyBase 로 치환)
        for attr in ("href", "content"):
            if t.has_attr(attr) and isinstance(t[attr], str) and t[attr].startswith(OLD_BASE):
                t[attr] = BASE_TOKEN + t[attr][len(OLD_BASE):]
        if t.name == "script" and t.get("type") == "application/ld+json":
            inner = t.decode_contents()
            if OLD_BASE in inner:
                t.string = inner.replace(OLD_BASE, BASE_TOKEN)
        keep.append(t)
    return keep


def use_base(jsx):
    """속성값의 자리표시자를 withBase() 호출로 바꾼다."""
    return re.sub(r'=\"' + re.escape(BASE_TOKEN) + r'([^\"]*)\"',
                  lambda m: '={withBase("%s")}' % m.group(1), jsx)


def head_links(fname):
    """레이아웃 <head> 에 넣을 preconnect·stylesheet 링크를 원본 순서 그대로 뽑는다."""
    soup = BeautifulSoup(open(os.path.join(SRC, fname), encoding="utf-8").read(), "html.parser")
    return [t for t in soup.head.find_all("link", recursive=False)
            if set(t.get("rel") or []) & {"stylesheet", "preconnect"}]


SHELL_DIR = os.path.join(DST, "components", "layout")


def gen_shell():
    """공통 셸을 컴포넌트로 추출. index.html 만 다른 3개 문자열은 prop 으로 뺀다."""
    soup = BeautifulSoup(open(os.path.join(SRC, "about.html"), encoding="utf-8").read(), "html.parser")
    skip = soup.body.find("a", class_="skip")
    header = soup.body.find("header")
    panel = soup.body.find("nav", class_="m-panel")
    os.makedirs(SHELL_DIR, exist_ok=True)

    # 문자열 치환은 포맷이 바뀌면 조용히 실패한다 → 파싱 트리에 토큰을 심고 바꾼다.
    nav_el = header.find("nav", class_="nav-menu")
    nav_el["aria-label"] = "@@NAVLABEL@@"

    # GNB 메뉴를 데이터로 뽑는다 (참고 저장소의 src/config/navigation.ts 와 같은 역할)
    items = []
    for it in nav_el.find_all("div", class_="nav-item"):
        top = it.find("a")
        links = [{"label": a.contents[0].strip() if a.contents else a.get_text(strip=True),
                  "href": a["href"],
                  "description": a.find("small").get_text(strip=True)}
                 for a in it.select(".dd-group a")]
        items.append({"label": str(top.contents[0]).strip(), "links": links})
    os.makedirs(os.path.join(DST, "config"), exist_ok=True)
    open(os.path.join(DST, "config", "navigation.ts"), "w", encoding="utf-8").write(
        "// GNB 메뉴 구성. 메뉴 이름·순서·설명을 바꾸려면 여기만 고친다.\n"
        "export interface NavLink {\n  label: string;\n  href: string;\n  description: string;\n}\n\n"
        "export interface NavItem {\n  label: string;\n  links: readonly NavLink[];\n}\n\n"
        f"export const headerNavigation: readonly NavItem[] = {json.dumps(items, ensure_ascii=False, indent=2)};\n"
    )

    # 반복되는 .nav-item 블록을 토큰으로 치환한 뒤 map 렌더로 바꾼다.
    nav_el.clear()
    nav_el.string = "@@NAVITEMS@@"
    hjsx = to_jsx(skip, 2) + to_jsx(header, 2)
    assert "@@NAVLABEL@@" in hjsx and "@@NAVITEMS@@" in hjsx, "헤더 토큰을 찾지 못했다"
    hjsx = hjsx.replace('"@@NAVLABEL@@"', "{navLabel}")
    # 원본 공백을 그대로 재현한다:
    #   상단 링크 = "Business " + <span caret>,  <a> 와 .dropdown 사이 공백 1칸,
    #   드롭다운 링크마다 뒤에 공백 1칸
    nav_items_jsx = (
        "        {headerNavigation.map((item) => (\n"
        '          <div className="nav-item" key={item.label}>\n'
        '            <a aria-haspopup="true" role="button" tabIndex={0}>\n'
        "              {item.label}\n"
        '              {" "}\n'
        '              <span aria-hidden="true" className="badge-caret">▾</span>\n'
        "            </a>\n"
        '            {" "}\n'
        '            <div className="dropdown">\n'
        '              <div className="dd-group">\n'
        "                {item.links.map((l) => (\n"
        "                  <Fragment key={l.href}>\n"
        "                    <a href={l.href}>\n"
        "                      {l.label}\n"
        "                      <small>{l.description}</small>\n"
        "                    </a>\n"
        '                    {" "}\n'
        "                  </Fragment>\n"
        "                ))}\n"
        "              </div>\n"
        "            </div>\n"
        "          </div>\n"
        "        ))}\n"
    )
    hjsx = re.sub(r"^\s*@@NAVITEMS@@\s*$", nav_items_jsx.rstrip("\n"), hjsx, flags=re.M)
    open(os.path.join(SHELL_DIR, "site-header.tsx"), "w", encoding="utf-8").write(
        'import { Fragment } from "react";\n'
        'import { headerNavigation } from "@/config/navigation";\n\n'
        "// 현재 사이트의 공통 헤더. 메뉴 항목은 src/config/navigation.ts 에서 온다.\n"
        "// index.html 만 aria-label 이 영문이라 prop 으로 분리했다(기존 사이트의 표기 불일치 보존).\n"
        "export function SiteHeader({ navLabel = \"주 메뉴\" }: { navLabel?: string }) {\n"
        "  return (\n    <>\n" + hjsx + "    </>\n  );\n}\n"
    )

    panel["aria-label"] = "@@NAVLABEL@@"
    cta = panel.find("a", href="contact.html")
    cta.string = "@@CTA@@"
    pjsx = to_jsx(panel, 2)
    assert "@@NAVLABEL@@" in pjsx and "@@CTA@@" in pjsx, "모바일 메뉴 토큰을 찾지 못했다"
    pjsx = pjsx.replace('"@@NAVLABEL@@"', "{navLabel}").replace("@@CTA@@", "{ctaLabel}")
    open(os.path.join(SHELL_DIR, "mobile-panel.tsx"), "w", encoding="utf-8").write(
        "// 무JS 폴백용 모바일 메뉴. site2.js 가 데스크톱 메뉴를 읽어 실제 패널을 재구성한다.\n"
        "export function MobilePanel({\n"
        "  navLabel = \"모바일 메뉴\",\n  ctaLabel = \"문의하기\",\n"
        "}: {\n  navLabel?: string;\n  ctaLabel?: string;\n}) {\n"
        "  return (\n" + pjsx + "  );\n}\n"
    )
    return True


def rich_tokens(el):
    """인라인 마크업이 섞인 텍스트를 토큰 배열로. (문자열 | "br" | "wbr")"""
    out = []
    for c in el.children:
        if isinstance(c, NavigableString):
            if str(c):
                out.append(str(c))
        elif c.name == "br":
            out.append("br")
        elif c.name == "wbr":
            out.append("wbr")
        else:
            return None  # 예상 못한 인라인 요소 → 추출 포기
    return out


def rich2(el):
    """h3·p 안의 인라인 마크업을 토큰으로. (문자열 | "br" | "wbr" | {b: 문자열})"""
    out = []
    for c in el.children:
        if isinstance(c, NavigableString):
            if str(c):
                out.append(str(c))
        elif c.name == "br":
            out.append("br")
        elif c.name == "wbr":
            out.append("wbr")
        elif c.name == "b":
            # 굵은 라벨 안에도 <wbr> 이 들어 있다 → 토큰을 재귀로 담는다
            inner = rich2(c)
            if inner is None:
                return None
            out.append({"b": inner})
        else:
            return None
    return out


def extract_dep_grid(grid):
    """모든 카드가 h3+p 로만 이뤄진 그리드일 때만 카드 목록을 뽑는다.
    아이콘·이미지·링크가 붙은 변형은 형태가 달라 그대로 둔다 (과도한 일반화 방지)."""
    cards = grid.find_all(class_="dep-card", recursive=False)
    # 카드 태그가 div/article 로 섞여 있다. 한 그리드 안에서 섞이면 손대지 않는다.
    if not cards or len({c.name for c in cards}) != 1:
        return None
    tag = cards[0].name
    items = []
    for c in cards:
        kids = [k for k in c.children if k.name]
        if [k.name for k in kids] != ["h3", "p"]:
            return None
        if [x for x in (c.get("class") or []) if x != "dep-card"]:
            return None
        title, body = rich2(kids[0]), rich2(kids[1])
        if title is None or body is None:
            return None
        items.append({"title": title, "body": body})
    return {"tag": tag, "items": items}


def extract_feat_list(fl):
    """모든 항목이 b+span 으로만 이뤄진 목록일 때만 뽑는다.
    제목이 h3 인 목록(라이선스 페이지)과 번호가 붙은 목록은 형태가 달라 손대지 않는다."""
    items = fl.find_all(class_="feat", recursive=False)
    if not items:
        return None
    out = []
    for c in items:
        kids = [k for k in c.children if k.name]
        if [k.name for k in kids] != ["b", "span"] or c.name != "div":
            return None
        if [x for x in (c.get("class") or []) if x != "feat"]:
            return None
        label, body = rich2(kids[0]), rich2(kids[1])
        if label is None or body is None:
            return None
        out.append({"label": label, "body": body})
    return out


def gen_feat_list():
    d = os.path.join(DST, "components", "section")
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "feat-list.tsx"), "w", encoding="utf-8").write(
        'import { RichText } from "@/components/rich-text";\n'
        'import type { FeatItem } from "@/data/features";\n\n'
        "// 라벨 + 설명 한 줄짜리 항목. 목록 컨테이너(feat-list / reveal)는\n"
        "// 배치 의도가 담긴 부분이라 페이지에 그대로 둔다.\n"
        "export function FeatItems({ items }: { items: readonly FeatItem[] }) {\n"
        "  return (\n"
        "    <>\n"
        "      {items.map((it, i) => (\n"
        '        <div className="feat" key={i}>\n'
        "          <b>\n"
        "            <RichText value={it.label} />\n"
        "          </b>\n"
        "          <span>\n"
        "            <RichText value={it.body} />\n"
        "          </span>\n"
        "        </div>\n"
        "      ))}\n"
        "    </>\n"
        "  );\n"
        "}\n"
    )


def extract_pin_list(pr):
    """일러스트 + 번호 + 제목 + 설명 + 불릿 형태로 통일된 단계 목록만 뽑는다."""
    items = pr.find_all(class_="pin-item", recursive=False)
    if not items:
        return None
    out = []
    for i, c in enumerate(items):
        if c.name != "article" or (c.get("class") or []) != ["pin-item", "reveal"]:
            return None
        if c.get("data-i") != str(i):
            return None
        kids = [k for k in c.children if k.name]
        shape = [k.name + "." + " ".join(k.get("class") or []) for k in kids]
        if shape != ["div.pin-illust pin-illust--art", "div.pi-no", "h3.", "p.", "ul.pi-bul"]:
            return None
        img = kids[0].find("img")
        if img is None or kids[0].find_all(True) != [img]:
            return None
        if img.get("loading") != "lazy" or img.get("decoding") != "async":
            return None
        body = rich2(kids[3])
        if body is None or kids[1].find(True) or kids[2].find(True):
            return None
        bullets = []
        for li in kids[4].find_all("li", recursive=False):
            tk = rich2(li)
            if tk is None:
                return None
            bullets.append(tk)
        out.append({
            "no": kids[1].get_text(),
            "slot": kids[0].get("data-slot") or "",
            "image": {"src": img.get("src"), "alt": img.get("alt", ""),
                      "width": img.get("width"), "height": img.get("height")},
            "title": kids[2].get_text(),
            "body": body,
            "bullets": bullets,
        })
    return out


def gen_pin_steps():
    d = os.path.join(DST, "components", "section")
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "pin-steps.tsx"), "w", encoding="utf-8").write(
        'import { RichText } from "@/components/rich-text";\n'
        'import type { PinStep } from "@/data/steps";\n\n'
        "// What We Do 단계 카드. 좌측 고정 영역과 진행 도트는 site2.js 가\n"
        "// data-i 순서를 읽어 동기화하므로 인덱스를 그대로 부여한다.\n"
        "export function PinSteps({ items }: { items: readonly PinStep[] }) {\n"
        "  return (\n"
        "    <>\n"
        "      {items.map((s, i) => (\n"
        '        <article className="pin-item reveal" data-i={String(i)} key={s.no}>\n'
        '          <div className="pin-illust pin-illust--art" data-slot={s.slot}>\n'
        "            {/* img 는 인라인이라 원본의 앞뒤 공백이 렌더에 반영된다 */}\n"
        '            {" "}\n'
        "            <img\n"
        "              alt={s.image.alt}\n"
        '              decoding="async"\n'
        "              height={s.image.height}\n"
        '              loading="lazy"\n'
        "              src={s.image.src}\n"
        "              width={s.image.width}\n"
        "            />\n"
        '            {" "}\n'
        "          </div>\n"
        '          <div className="pi-no">{s.no}</div>\n'
        "          <h3>{s.title}</h3>\n"
        "          <p>\n"
        "            <RichText value={s.body} />\n"
        "          </p>\n"
        '          <ul className="pi-bul">\n'
        "            {s.bullets.map((b, j) => (\n"
        "              <li key={j}>\n"
        "                <RichText value={b} />\n"
        "              </li>\n"
        "            ))}\n"
        "          </ul>\n"
        "        </article>\n"
        "      ))}\n"
        "    </>\n"
        "  );\n"
        "}\n"
    )


def bcase_body(card):
    """구축 사례 카드 한 장의 내용을 뽑는다. 형태가 다르면 None."""
    kids = [k for k in card.children if k.name]
    shape = [k.name + "." + " ".join(k.get("class") or []) for k in kids]
    if shape != ["div.bcase-visual", "span.cat", "h3.", "span.sum", "ul."]:
        return None
    img = kids[0].find("img")
    if img is None or kids[0].find_all(True) != [img] or img.get("loading") != "lazy":
        return None
    if kids[1].find(True):
        return None
    title, summary = rich2(kids[2]), rich2(kids[3])
    if title is None or summary is None:
        return None
    bullets = []
    for li in kids[4].find_all("li", recursive=False):
        marks = [k for k in li.children if k.name]
        if [k.name for k in marks] != ["i"]:
            return None
        i = marks[0]
        if i.get("aria-hidden") != "true" or i.get_text() != "✓" or i.find(True):
            return None
        i.extract()
        tk = rich2(li)
        if tk is None:
            return None
        while tk and not tk[0].strip() if tk and isinstance(tk[0], str) else False:
            tk.pop(0)
        bullets.append(tk)
    return {
        "image": {"src": img.get("src"), "alt": img.get("alt", ""),
                  "width": img.get("width"), "height": img.get("height")},
        "cat": kids[1].get_text(),
        "title": title,
        "sum": summary,
        "bullets": bullets,
    }


def extract_project_cards(grid):
    """business 페이지의 대표 프로젝트 3장. 리빌 지연 클래스는 순서에서 나온다."""
    cards = grid.find_all("article", class_="bcase-card", recursive=False)
    if not cards or len(cards) != len(grid.find_all(class_="bcase-card", recursive=False)):
        return None
    out = []
    for i, c in enumerate(cards):
        want = ["bcase-card", "rv"] + ([f"d{i}"] if i else [])
        if (c.get("class") or []) != want:
            return None
        body = bcase_body(c)
        if body is None:
            return None
        out.append(body)
    return out


def extract_home_cases(row):
    """홈 마퀴 한 행. 링크로 감싼 카드 4장."""
    links = row.find_all("a", class_="home-case-link", recursive=False)
    if not links:
        return None
    out = []
    for a in links:
        card = a.find("article", class_="bcase-card")
        if card is None or (card.get("class") or []) != ["bcase-card"]:
            return None
        if a.find_all("article") != [card]:
            return None
        body = bcase_body(card)
        if body is None:
            return None
        body["href"] = a.get("href")
        body["ariaLabel"] = a.get("aria-label") or ""
        out.append(body)
    return out


def gen_bcase():
    d = os.path.join(DST, "components", "section")
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "bcase-cards.tsx"), "w", encoding="utf-8").write(
        'import { RichText } from "@/components/rich-text";\n'
        'import type { BcaseItem, HomeCase } from "@/data/cases";\n\n'
        "// 구축 사례 카드 본문. 그리드용과 홈 마퀴용이 이 마크업을 공유한다.\n"
        "function CardBody({ item }: { item: BcaseItem }) {\n"
        "  return (\n"
        "    <>\n"
        '      <div className="bcase-visual">\n'
        "        <img\n"
        "          alt={item.image.alt}\n"
        "          height={item.image.height}\n"
        '          loading="lazy"\n'
        "          src={item.image.src}\n"
        "          width={item.image.width}\n"
        "        />\n"
        "      </div>\n"
        "      {/* cat·sum 은 인라인 span 이라 원본의 줄바꿈 공백이 렌더에 반영된다 */}\n"
        '      {" "}\n'
        '      <span className="cat">{item.cat}</span>\n'
        '      {" "}\n'
        "      <h3>\n"
        "        <RichText value={item.title} />\n"
        "      </h3>\n"
        '      {" "}\n'
        '      <span className="sum">\n'
        "        <RichText value={item.sum} />\n"
        "      </span>\n"
        '      {" "}\n'
        "      <ul>\n"
        "        {item.bullets.map((b, i) => (\n"
        "          <li key={i}>\n"
        '            <i aria-hidden="true">✓</i>\n'
        "            <RichText value={b} />\n"
        "          </li>\n"
        "        ))}\n"
        "      </ul>\n"
        "    </>\n"
        "  );\n"
        "}\n\n"
        "/** 비즈니스 페이지의 대표 프로젝트 그리드 */\n"
        "export function ProjectCards({ items }: { items: readonly BcaseItem[] }) {\n"
        "  return (\n"
        "    <>\n"
        "      {items.map((item, i) => (\n"
        '        <article className={i ? `bcase-card rv d${i}` : "bcase-card rv"} key={i}>\n'
        "          <CardBody item={item} />\n"
        "        </article>\n"
        "      ))}\n"
        "    </>\n"
        "  );\n"
        "}\n\n"
        "/** 홈 마퀴 한 행. 복제 행은 읽어주지 않고 탭 순서에서도 뺀다. */\n"
        "export function HomeCaseLinks({\n"
        "  items,\n"
        "  duplicate = false,\n"
        "}: {\n"
        "  items: readonly HomeCase[];\n"
        "  duplicate?: boolean;\n"
        "}) {\n"
        "  return (\n"
        "    <>\n"
        "      {items.map((item, i) => (\n"
        "        <a\n"
        "          aria-label={duplicate ? undefined : item.ariaLabel}\n"
        '          className="home-case-link"\n'
        "          href={item.href}\n"
        "          key={i}\n"
        "          tabIndex={duplicate ? -1 : undefined}\n"
        "        >\n"
        '          <article className="bcase-card">\n'
        "            <CardBody item={item} />\n"
        "          </article>\n"
        "        </a>\n"
        "      ))}\n"
        "    </>\n"
        "  );\n"
        "}\n"
    )


def gen_rich_text():
    d = os.path.join(DST, "components")
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "rich-text.tsx"), "w", encoding="utf-8").write(
        'import { Fragment } from "react";\n\n'
        "// 문구 안에 섞인 인라인 마크업을 토큰으로 다룬다.\n"
        '// 문자열은 그대로, "br" 은 문장 구분 줄바꿈, "wbr" 은 줄바꿈 기회, { b } 는 굵은 라벨.\n'
        "export type RichToken = string | { b: readonly RichToken[] };\n\n"
        "export function RichText({ value }: { value: readonly RichToken[] }) {\n"
        "  return (\n"
        "    <>\n"
        "      {value.map((t, i) =>\n"
        '        t === "br" ? (\n'
        '          <br className="sb" key={i} />\n'
        '        ) : t === "wbr" ? (\n'
        "          <wbr key={i} />\n"
        '        ) : typeof t === "string" ? (\n'
        "          <Fragment key={i}>{t}</Fragment>\n"
        "        ) : (\n"
        "          <b key={i}>\n"
        "            <RichText value={t.b} />\n"
        "          </b>\n"
        "        ),\n"
        "      )}\n"
        "    </>\n"
        "  );\n"
        "}\n"
    )


def gen_dep_cards():
    d = os.path.join(DST, "components", "section")
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "dep-cards.tsx"), "w", encoding="utf-8").write(
        'import { RichText } from "@/components/rich-text";\n'
        'import type { DepCardItem } from "@/data/cards";\n\n'
        "// 제목 + 설명만 있는 카드. 그리드 컨테이너(dep-grid / g2 / reveal)는\n"
        "// 배치 의도가 담긴 부분이라 페이지에 그대로 둔다.\n"
        "// 원본이 카드 태그를 div/article 로 섞어 써서 as 로 받는다.\n"
        "export function DepCards({\n"
        "  items,\n"
        '  as: Tag = "div",\n'
        "}: {\n"
        "  items: readonly DepCardItem[];\n"
        '  as?: "div" | "article";\n'
        "}) {\n"
        "  return (\n"
        "    <>\n"
        "      {items.map((c, i) => (\n"
        '        <Tag className="dep-card" key={i}>\n'
        "          <h3>\n"
        "            <RichText value={c.title} />\n"
        "          </h3>\n"
        "          <p>\n"
        "            <RichText value={c.body} />\n"
        "          </p>\n"
        "        </Tag>\n"
        "      ))}\n"
        "    </>\n"
        "  );\n"
        "}\n"
    )


def extract_hero(hero):
    """9개 페이지가 공유하는 표준 히어로에서 콘텐츠를 뽑는다. 형태가 다르면 None."""
    wrap = hero.find("div", class_="wrap", recursive=False)
    if wrap is None:
        return None
    kids = [c for c in wrap.children if c.name]
    shape = [c.name + "." + " ".join(c.get("class") or []) for c in kids]
    if shape != ["span.hero-badge", "h1.", "p.", "ul.hero-keys"]:
        return None

    decor = []
    for c in hero.children:
        if not c.name or c is wrap:
            continue
        cls = c.get("class") or []
        if "hero-bg" in cls:
            m = re.search(r"url\('([^']+)'\)", c.get("style") or "")
            decor.append({"kind": "bg", "image": m.group(1) if m else ""})
        elif "hero-veil" in cls:
            decor.append({"kind": "veil"})
        elif "cube-a" in cls:
            decor.append({"kind": "cube", "hidden": c.get("aria-hidden") == "true"})
        elif "hero-scroll" in cls:
            pass  # 항상 같은 모양이라 컴포넌트가 고정으로 그린다
        else:
            return None

    lead = rich_tokens(kids[2])
    if lead is None:
        return None
    keys = []
    for li in kids[3].find_all("li", recursive=False):
        k = li.find("span", class_="k")
        v = li.find("span", class_="v")
        if k is None or v is None or k.find(True) or v.find(True):
            return None
        keys.append({"k": k.get_text(), "v": v.get_text()})
    ws = None
    if wrap.get("style"):
        ws = {}
        for decl in wrap["style"].split(";"):
            if ":" in decl:
                k, v = decl.split(":", 1)
                ws[camel(k.strip())] = v.strip()
    data = {
        "id": hero.get("id"),
        "decor": decor,
        "badge": kids[0].get_text(),
        "title": kids[1].get_text(),
        "lead": lead,
        "keys": keys,
    }
    if ws:
        data["wrapStyle"] = ws
    if data["id"] is None:
        del data["id"]
    return data


def gen_page_hero():
    """표준 히어로 렌더 컴포넌트. 데이터는 src/data/heroes.ts 에서 온다."""
    os.makedirs(SHELL_DIR, exist_ok=True)
    open(os.path.join(SHELL_DIR, "page-hero.tsx"), "w", encoding="utf-8").write(
        'import { Fragment } from "react";\n'
        'import type { HeroData } from "@/data/heroes";\n\n'
        "// 9개 페이지가 공유하는 서브페이지 히어로.\n"
        "// 배경 장식(bg/veil/cube)은 페이지마다 구성이 달라 데이터로 받는다.\n"
        "export function PageHero({ data }: { data: HeroData }) {\n"
        "  return (\n"
        '    <section className="hero page-hero dark" id={data.id}>\n'
        "      {data.decor.map((d, i) =>\n"
        '        d.kind === "bg" ? (\n'
        "          <div\n"
        '            aria-hidden="true"\n'
        '            className="hero-bg"\n'
        "            key={i}\n"
        "            style={{ backgroundImage: `url('${d.image}')` }}\n"
        "          ></div>\n"
        '        ) : d.kind === "veil" ? (\n'
        '          <div aria-hidden="true" className="hero-veil" key={i}></div>\n'
        "        ) : (\n"
        '          <div aria-hidden={d.hidden ? "true" : undefined} className="cube-a" key={i}></div>\n'
        "        ),\n"
        "      )}\n"
        '      <div className="wrap" style={data.wrapStyle}>\n'
        '        {" "}\n'
        '        <span className="hero-badge">{data.badge}</span>\n'
        '        {" "}\n'
        "        <h1>{data.title}</h1>\n"
        "        <p>\n"
        "          {data.lead.map((t, i) =>\n"
        '            t === "br" ? (\n'
        '              <br className="sb" key={i} />\n'
        '            ) : t === "wbr" ? (\n'
        "              <wbr key={i} />\n"
        "            ) : (\n"
        "              <Fragment key={i}>{t}</Fragment>\n"
        "            ),\n"
        "          )}\n"
        "        </p>\n"
        '        <ul className="hero-keys">\n'
        "          {data.keys.map((k) => (\n"
        "            <li key={k.k}>\n"
        '              <span className="k">{k.k}</span>\n'
        '              <span className="v">{k.v}</span>\n'
        "            </li>\n"
        "          ))}\n"
        "        </ul>\n"
        "      </div>\n"
        '      <div aria-hidden="true" className="hero-scroll">\n'
        '        <div className="wrap">\n'
        "          <i></i>\n"
        "          <span>SCROLL</span>\n"
        "        </div>\n"
        "      </div>\n"
        "    </section>\n"
        "  );\n"
        "}\n"
    )


def gen_footer():
    """22개 페이지가 똑같이 복제하고 있던 푸터를 데이터 + 컴포넌트로 뽑는다.

    (index.html 은 홈 전용 푸터라 별도 유지)
    페이지마다 다른 것은 CTA 문구뿐이므로 prop 으로 받는다.
    """
    soup = BeautifulSoup(open(os.path.join(SRC, "business-ax.html"), encoding="utf-8").read(), "html.parser")
    ftr = soup.body.find("footer")
    top = ftr.find(class_="fcta-top")
    bot = ftr.find(class_="fcta-bot")

    # ── 데이터 추출 ────────────────────────────────────────────────
    logo = bot.find("img", class_="fb-logo")
    offices = [{"code": r.find("dt").get_text(strip=True), "address": r.find("dd").get_text(strip=True)}
               for r in bot.find(class_="fb-loc").find_all("div", class_="row")]
    columns = []
    for col in bot.find(class_="fb-links").find_all("div", class_="fb-col"):
        columns.append({
            "title": col.find(class_="f-h").get_text(strip=True),
            "links": [{"label": a.get_text(strip=True), "href": a["href"]} for a in col.find_all("a")],
        })
    legal = ftr.find(class_="fb-legal")
    legal_text = legal.find("span").get_text(strip=True)
    legal_links = [{"label": a.get_text(strip=True), "href": a["href"]} for a in legal.find_all("a")]

    os.makedirs(os.path.join(DST, "data"), exist_ok=True)
    open(os.path.join(DST, "data", "site.ts"), "w", encoding="utf-8").write(
        "// 전 페이지 푸터가 공유하는 회사 정보. 화면 문구를 바꾸려면 여기만 고친다.\n"
        f"export const footerLogo = {json.dumps({'src': logo['src'], 'alt': logo['alt'], 'width': int(logo['width']), 'height': int(logo['height'])}, ensure_ascii=False)} as const;\n\n"
        f"export const offices = {json.dumps(offices, ensure_ascii=False, indent=2)} as const;\n\n"
        f"export const footerColumns = {json.dumps(columns, ensure_ascii=False, indent=2)} as const;\n\n"
        f"export const legal = {json.dumps({'copyright': legal_text, 'links': legal_links}, ensure_ascii=False, indent=2)} as const;\n"
    )

    os.makedirs(SHELL_DIR, exist_ok=True)
    open(os.path.join(SHELL_DIR, "site-footer.tsx"), "w", encoding="utf-8").write(
        'import type { ReactNode } from "react";\n'
        'import { Fragment } from "react";\n'
        'import { footerColumns, footerLogo, legal, offices } from "@/data/site";\n\n'
        "// 푸터 하단(로고·거점·링크·법적 표기)은 22개 페이지가 완전히 동일하다.\n"
        "// 페이지마다 다른 CTA 블록은 원본 마크업 그대로 children 으로 받는다.\n"
        "// (CTA 문구에는 <wbr> 같은 인라인 요소가 섞여 있어 문자열로 뽑으면 손상된다)\n"
        "// CTA 가 없는 5개 페이지는 원본 푸터에 id 가 없다 → 그대로 재현한다.\n"
        "export function SiteFooter({\n"
        "  children,\n"
        "  id,\n"
        "}: {\n"
        "  children?: ReactNode;\n"
        "  id?: string;\n"
        "}) {\n"
        "  return (\n"
        '    <footer className="fcta" id={id}>\n'
        '      <div className="fcta-box">\n'
        '        <div className="wrap">\n'
        "          {children}\n"
        '          <div className="fcta-bot">\n'
        "            <div>\n"
        "              <img\n"
        "                alt={footerLogo.alt}\n"
        '                className="fb-logo"\n'
        "                height={footerLogo.height}\n"
        "                src={footerLogo.src}\n"
        "                width={footerLogo.width}\n"
        "              />\n"
        '              <dl className="fb-loc">\n'
        "                {offices.map((o) => (\n"
        '                  <div className="row" key={o.code}>\n'
        "                    <dt>{o.code}</dt>\n"
        "                    <dd>{o.address}</dd>\n"
        "                  </div>\n"
        "                ))}\n"
        "              </dl>\n"
        "            </div>\n"
        '            <div className="fb-links">\n'
        "              {footerColumns.map((c) => (\n"
        '                <div className="fb-col" key={c.title}>\n'
        '                  <p className="f-h">{c.title}</p>\n'
        '                  {/* 원본은 제목 뒤에만 줄바꿈이 있고 링크 사이에는 공백이 없다 */}\n'
        '                  {" "}\n'
        "                  {c.links.map((l) => (\n"
        "                    <a href={l.href} key={l.href}>\n"
        "                      {l.label}\n"
        "                    </a>\n"
        "                  ))}\n"
        "                </div>\n"
        "              ))}\n"
        "            </div>\n"
        "          </div>\n"
        '          <div className="fb-legal">\n'
        '            {" "}\n'
        "            <span>{legal.copyright}</span>\n"
        "            {legal.links.map((l) => (\n"
        "              <Fragment key={l.href}>\n"
        '                {" "}\n'
        "                <a href={l.href}>{l.label}</a>\n"
        "              </Fragment>\n"
        "            ))}\n"
        "          </div>\n"
        "        </div>\n"
        "      </div>\n"
        "    </footer>\n"
        "  );\n"
        "}\n"
    )


def footer_cta(soup):
    """페이지 푸터에서 CTA 문구만 뽑는다. 없으면 None."""
    ftr = soup.body.find("footer")
    top = ftr.find(class_="fcta-top") if ftr else None
    if not top:
        return None
    return {
        "kicker": top.find(class_="kicker").get_text(strip=True),
        "heading": top.find(class_="fcta-h").get_text(" ", strip=True),
        "lead": top.find(class_="fcta-p").get_text(" ", strip=True),
        "button": top.find(class_="fcta-btn").get_text(strip=True),
    }


def gen_layout(group, sample):
    """라우트 그룹별 루트 레이아웃. index 만 스타일시트가 하나 더 붙어 그룹을 나눈다."""
    soup = BeautifulSoup(open(os.path.join(SRC, sample), encoding="utf-8").read(), "html.parser")
    inline = [s for s in soup.head.find_all("script") if not s.get("src") and not s.get("type")]
    js_boot = inline[0].decode_contents() if inline else "document.documentElement.classList.add('js')"
    # 원본 body 하단 스크립트 전부를 원래 순서대로 (index 는 site2.js + home-refresh.js)
    body_js = [s.get("src") for s in soup.body.find_all("script", src=True)]
    scripts = "".join(
        f'        <Script src={json.dumps(s)} strategy="afterInteractive" />\n' for s in body_js
    )
    # precedence 를 주면 하이드레이션 때 React 가 href 기준으로 중복 삽입을 막는다.
    _links = head_links(sample)
    for t in _links:
        if (t.get("rel") or []) == ["stylesheet"]:
            t["precedence"] = "site"
    links = "".join(to_jsx(t, 4) for t in _links)
    # <body>·<html> 자체 속성도 페이지의 일부다 (index 는 class="home-page")
    body_attr = attrs_of(soup.body)
    html_attr = attrs_of(soup.html)
    d = os.path.join(DST, "app", group)
    os.makedirs(d, exist_ok=True)
    open(os.path.join(d, "layout.tsx"), "w", encoding="utf-8").write(
        'import type { Viewport } from "next";\n'
        'import Script from "next/script";\n\n'
        'export const viewport: Viewport = { width: "device-width", initialScale: 1 };\n\n'
        f'// {sample} 의 <head> 링크 순서를 그대로 유지한다(캐스케이드 순서 보존).\n'
        '// site2.js 는 DOM 을 직접 조작하므로 하이드레이션이 끝난 뒤 실행해야 한다.\n'
        '// (인라인 <script> 로 두면 React 가 재삽입해 두 번 실행된다)\n'
        'export default function RootLayout({ children }: { children: React.ReactNode }) {\n'
        '  return (\n'
        f'    <html{html_attr} suppressHydrationWarning>\n'
        '      <head>\n'
        f'{links}'
        f'        <script dangerouslySetInnerHTML={{{{ __html: {json.dumps(js_boot)} }}}} />\n'
        '      </head>\n'
        f'      <body{body_attr}>\n'
        '        {children}\n'
        f'{scripts}'
        '      </body>\n'
        '    </html>\n'
        '  );\n'
        '}\n'
    )


def main():
    os.makedirs(os.path.join(DST, "app"), exist_ok=True)
    gen_site_config()
    rewrite_public_base()
    gen_shell()
    gen_page_hero()
    gen_rich_text()
    gen_dep_cards()
    gen_feat_list()
    gen_pin_steps()
    gen_bcase()
    gen_footer()
    gen_layout("(site)", "about.html")
    gen_layout("(home)", "index.html")
    pages = sorted(f for f in os.listdir(SRC) if f.endswith(".html"))
    report = []
    heroes = {}
    cards = {}
    feats = {}
    steps = {}
    projects = {}
    home_cases = []
    for f in pages:
        soup = BeautifulSoup(open(os.path.join(SRC, f), encoding="utf-8").read(), "html.parser")
        main_el = soup.body.find("main")
        footer_el = soup.body.find("footer")
        heads = head_tags(soup)
        extra_scripts = []  # body 스크립트는 전부 레이아웃에서 next/script 로 로드

        jsx_head = use_base("".join(to_jsx(t, 3) for t in heads))
        # 표준 히어로는 데이터로 뽑고 컴포넌트 호출로 대체한다
        key = route_dir(f) or "home"
        hero_el = main_el.find(class_="hero") if main_el else None
        hero = extract_hero(hero_el) if hero_el is not None else None
        if hero:
            heroes[key] = hero
            hero_el.replace_with(NavigableString("@@HERO@@"))
        # 제목+설명만 있는 카드 그리드를 데이터로 (섹션 id 로 키를 잡아 찾기 쉽게)
        if main_el:
            for grid in main_el.find_all(class_="dep-grid"):
                got = extract_dep_grid(grid)
                sec = grid.find_parent("section")
                sid = sec.get("id") if sec else None
                if not got or not sid:
                    continue
                ck = f"{key}:{sid}"
                cards[ck] = got["items"]
                for c in grid.find_all(class_="dep-card", recursive=False):
                    c.decompose()
                grid.append(NavigableString(f"@@CARDS:{ck}|{got['tag']}@@"))
            for fl in main_el.find_all(class_="feat-list"):
                got = extract_feat_list(fl)
                sec = fl.find_parent("section")
                sid = sec.get("id") if sec else None
                if not got or not sid:
                    continue
                fk = f"{key}:{sid}"
                if fk in feats:  # 한 섹션에 목록이 여러 개면 번호를 붙여 구분
                    n = 2
                    while f"{fk}#{n}" in feats:
                        n += 1
                    fk = f"{fk}#{n}"
                feats[fk] = got
                for c in fl.find_all(class_="feat", recursive=False):
                    c.decompose()
                fl.append(NavigableString(f"@@FEATS:{fk}@@"))
            for pr in main_el.find_all(class_="pin-right"):
                got = extract_pin_list(pr)
                sec = pr.find_parent("section")
                sid = sec.get("id") if sec else None
                if not got or not sid:
                    continue
                pk = f"{key}:{sid}"
                steps[pk] = got
                for c in pr.find_all(class_="pin-item", recursive=False):
                    c.decompose()
                pr.append(NavigableString(f"@@STEPS:{pk}@@"))
            for grid in main_el.find_all(class_="bcase-grid"):
                got = extract_project_cards(grid)
                sec = grid.find_parent("section")
                sid = sec.get("id") if sec else None
                if not got or not sid:
                    continue
                bk = f"{key}:{sid}"
                projects[bk] = got
                for c in grid.find_all(class_="bcase-card", recursive=False):
                    c.decompose()
                grid.append(NavigableString(f"@@PROJECTS:{bk}@@"))
            for row in main_el.find_all(class_="bcase-row"):
                got = extract_home_cases(row)
                if not got:
                    continue
                dup = row.get("aria-hidden") == "true"
                if not dup:
                    home_cases.extend(got)
                for a in row.find_all("a", class_="home-case-link", recursive=False):
                    a.decompose()
                row.append(NavigableString(f"@@HOMECASE:{'dup' if dup else 'main'}@@"))
        jsx_main = to_jsx(main_el, 3)
        jsx_main = re.sub(
            r"^(\s*)@@CARDS:([^|@]+)\|([a-z]+)@@\s*$",
            lambda m: '%s<DepCards items={depCards[%s]}%s />' % (
                m.group(1), json.dumps(m.group(2)),
                "" if m.group(3) == "div" else ' as="%s"' % m.group(3)),
            jsx_main, flags=re.M)
        jsx_main = re.sub(r"^(\s*)@@FEATS:([^@]+)@@\s*$",
                          lambda m: '%s<FeatItems items={featLists[%s]} />' % (m.group(1), json.dumps(m.group(2))),
                          jsx_main, flags=re.M)
        jsx_main = re.sub(r"^(\s*)@@STEPS:([^@]+)@@\s*$",
                          lambda m: '%s<PinSteps items={pinSteps[%s]} />' % (m.group(1), json.dumps(m.group(2))),
                          jsx_main, flags=re.M)
        jsx_main = re.sub(r"^(\s*)@@PROJECTS:([^@]+)@@\s*$",
                          lambda m: '%s<ProjectCards items={projectCards[%s]} />' % (m.group(1), json.dumps(m.group(2))),
                          jsx_main, flags=re.M)
        jsx_main = re.sub(r"^(\s*)@@HOMECASE:(main|dup)@@\s*$",
                          lambda m: '%s<HomeCaseLinks items={homeCases}%s />' % (
                              m.group(1), " duplicate" if m.group(2) == "dup" else ""),
                          jsx_main, flags=re.M)
        if hero:
            jsx_main = re.sub(r"^\s*@@HERO@@\s*$",
                              "        <PageHero data={heroes[%s]} />" % json.dumps(key),
                              jsx_main, flags=re.M)
        # 공용 푸터(.fcta)는 컴포넌트로, 홈 전용 푸터는 마크업 그대로.
        if footer_el is None:
            jsx_footer = ""
        elif "fcta" in (footer_el.get("class") or []):
            top_el = footer_el.find(class_="fcta-top")
            fid = footer_el.get("id")
            idattr = f' id="{fid}"' if fid else ""
            if top_el:
                jsx_footer = f"      <SiteFooter{idattr}>\n" + to_jsx(top_el, 4) + "      </SiteFooter>\n"
            else:
                jsx_footer = f"      <SiteFooter{idattr} />\n"
        else:
            jsx_footer = to_jsx(footer_el, 3)
        jsx_extra = "".join(to_jsx(s, 3) for s in extra_scripts)

        d = route_dir(f)
        group = "(home)" if f == "index.html" else "(site)"
        outdir = os.path.join(DST, "app", group, d) if d else os.path.join(DST, "app", group)
        os.makedirs(outdir, exist_ok=True)
        comp = "".join(w.capitalize() for w in re.split(r"[-_]", d or "home"))
        # index.html 만 셸의 aria-label·모바일 CTA 문구가 영문 (기존 사이트 그대로 보존)
        if f == "index.html":
            shell = ('      <SiteHeader navLabel="Main navigation" />\n'
                     '      <MobilePanel navLabel="Mobile navigation" ctaLabel="Contact" />\n')
        else:
            shell = "      <SiteHeader />\n      <MobilePanel />\n"
        up = "../" * (1 if d else 0)
        base_fns = [fn for fn in ("applyBase", "withBase") if fn + "(" in jsx_head]
        imports = ""
        if base_fns:
            imports += 'import { %s } from "@/config/site";\n' % ", ".join(base_fns)
        imports += ('import { SiteHeader } from "@/components/layout/site-header";\n'
                    'import { MobilePanel } from "@/components/layout/mobile-panel";\n')
        if "SiteFooter" in jsx_footer:
            imports += 'import { SiteFooter } from "@/components/layout/site-footer";\n'
        if "DepCards" in jsx_main:
            imports += ('import { DepCards } from "@/components/section/dep-cards";\n'
                        'import { depCards } from "@/data/cards";\n')
        bcase = [n for n in ("ProjectCards", "HomeCaseLinks") if n in jsx_main]
        if bcase:
            imports += 'import { %s } from "@/components/section/bcase-cards";\n' % ", ".join(bcase)
            data = [n for n in ("projectCards", "homeCases") if n in jsx_main]
            imports += 'import { %s } from "@/data/cases";\n' % ", ".join(data)
        if "PinSteps" in jsx_main:
            imports += ('import { PinSteps } from "@/components/section/pin-steps";\n'
                        'import { pinSteps } from "@/data/steps";\n')
        if "FeatItems" in jsx_main:
            imports += ('import { FeatItems } from "@/components/section/feat-list";\n'
                        'import { featLists } from "@/data/features";\n')
        if "PageHero" in jsx_main:
            imports += ('import { PageHero } from "@/components/layout/page-hero";\n'
                        'import { heroes } from "@/data/heroes";\n')
        body = (
            f"{imports}\n"
            f"export default function {comp}Page() {{\n"
            f"  return (\n"
            f"    <>\n"
            f"{jsx_head}"
            f"{shell}"
            f"{jsx_main}"
            f"{jsx_footer}"
            f"{jsx_extra}"
            f"    </>\n"
            f"  );\n"
            f"}}\n"
        )
        open(os.path.join(outdir, "page.tsx"), "w", encoding="utf-8").write(body)
        report.append((f, d or "(root)", len(heads), len(jsx_main), bool(footer_el), len(extra_scripts)))

    open(os.path.join(DST, "data", "heroes.ts"), "w", encoding="utf-8").write(
        "// 서브페이지 히어로 문구. 배지·제목·리드·핵심 포인트를 여기서 고친다.\n"
        '// lead 는 토큰 배열이다: 문자열은 그대로, "br" 은 문장 구분 줄바꿈, "wbr" 은 줄바꿈 기회.\n'
        "export interface HeroData {\n"
        "  decor: readonly (\n"
        '    | { kind: "bg"; image: string }\n'
        '    | { kind: "veil" }\n'
        '    | { kind: "cube"; hidden: boolean }\n'
        "  )[];\n"
        "  id?: string;\n"
        "  wrapStyle?: React.CSSProperties;\n"
        "  badge: string;\n"
        "  title: string;\n"
        "  lead: readonly string[];\n"
        "  keys: readonly { k: string; v: string }[];\n"
        "}\n\n"
        f"export const heroes: Record<string, HeroData> = {json.dumps(heroes, ensure_ascii=False, indent=2)};\n"
    )
    open(os.path.join(DST, "data", "cards.ts"), "w", encoding="utf-8").write(
        CARDS_HEADER + json.dumps(cards, ensure_ascii=False, indent=2) + ";\n"
    )
    open(os.path.join(DST, "data", "features.ts"), "w", encoding="utf-8").write(
        FEATS_HEADER + json.dumps(feats, ensure_ascii=False, indent=2) + ";\n"
    )
    open(os.path.join(DST, "data", "steps.ts"), "w", encoding="utf-8").write(
        STEPS_HEADER + json.dumps(steps, ensure_ascii=False, indent=2) + ";\n"
    )
    open(os.path.join(DST, "data", "cases.ts"), "w", encoding="utf-8").write(
        CASES_HEADER + json.dumps(projects, ensure_ascii=False, indent=2) + ";"
        + HOME_CASES_HEADER + json.dumps(home_cases, ensure_ascii=False, indent=2) + ";" + chr(10)
    )
    print(f"사례 카드 추출: 프로젝트 {sum(len(v) for v in projects.values())}장 / 홈 {len(home_cases)}장")
    print(f"단계 데이터 추출: {len(steps)}개 목록 / {sum(len(v) for v in steps.values())}단계")
    print(f"항목 목록 데이터 추출: {len(feats)}개 목록 / {sum(len(v) for v in feats.values())}항목")
    print(f"히어로 데이터 추출: {len(heroes)}페이지")
    print(f"카드 데이터 추출: {len(cards)}개 섹션 / {sum(len(v) for v in cards.values())}장")
    print(f"{'source':26} {'route':24} head main자 footer extra")
    for r in report:
        print(f"{r[0]:26} {r[1]:24} {r[2]:4} {r[3]:7} {str(r[4]):6} {r[5]}")
    print(f"\n총 {len(report)} 페이지 변환")


if __name__ == "__main__":
    main()
