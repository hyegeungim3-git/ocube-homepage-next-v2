# -*- coding: utf-8 -*-
"""site2.css 를 화면별 모듈로 쪼갠다.

핵심 제약: 쪼갠 조각을 원래 순서로 이어붙이면 원본과 **바이트 단위로 같아야 한다.**
CSS 는 뒤에 오는 규칙이 이기므로 순서가 틀어지면 화면이 조용히 깨진다.
"""
import os, re, sys

SRC = r"C:\오큐브\ocube-next\public\assets\site2.css"
DST = r"C:\오큐브\ocube-next\src\styles"

# 섹션 헤더 주석 → 파일명. 여기에 없는 헤더는 직전 파일에 이어 붙는다.
SECTIONS = [
    ("base", None),  # 첫 조각
    ("gnb", r"GNB\s*:"),
    ("hero", r"----\s*hero\s"),
    ("home", r"----\s*CI \(big typo\)"),
    ("footer", r"----\s*footer\s*----"),
    ("references", r"REFERENCES"),
    ("history", r"HISTORY"),
    ("certificates", r"인증 · 특허 · 저작권"),
    ("about", r"ABOUT — 인사말"),
    ("location", r"LOCATION"),
    ("contact-footer", r"Contact \+ Footer 통합"),
    ("keytech", r"Key Technologies"),
    ("responsive", r"----\s*responsive\s*----"),
    ("fab", r"FAB 스택"),
    ("build-cases", r"BUILD CASES"),
    ("partners", r"PARTNERS & CLIENTS"),
    ("projects", r"대표 프로젝트 — BUILD CASES"),
    ("solution-stage", r"솔루션 시연 스테이지"),
    ("features", r"기능 교차 행 확장"),
    ("scroll-progress", r"스크롤 프로그레스 바"),
    ("motion", r"스크롤·모션 인터랙션 보강"),
    ("home-ci", r"HOME CI —"),
    ("mega-menu", r"GNB 메가 메뉴"),
    ("logo-grid", r"파트너 & 고객사 2단 로고 그리드"),
    ("grid-orphans", r"그리드 고아 행 제거 — 항목 수 균등"),
    ("qdata-arch", r"QData Architecture"),
    ("about-hero", r"ABOUT — reference-inspired"),
    ("qvision-tms", r"QVision TMS"),
]


def main():
    css = open(SRC, encoding="utf-8", newline="").read()
    lines = css.splitlines(keepends=True)

    # 각 섹션의 시작 줄을 찾는다
    marks = [(0, "base")]
    for name, pat in SECTIONS[1:]:
        rx = re.compile(pat)
        for i, ln in enumerate(lines):
            if ln.lstrip().startswith("/*") and rx.search(ln):
                marks.append((i, name))
                break
        else:
            print(f"  ! 섹션 미발견: {name} ({pat})")
    marks.sort()

    os.makedirs(DST, exist_ok=True)
    parts, total = [], ""
    for idx, (start, name) in enumerate(marks):
        end = marks[idx + 1][0] if idx + 1 < len(marks) else len(lines)
        chunk = "".join(lines[start:end])
        path = os.path.join(DST, f"{name}.css")
        open(path, "w", encoding="utf-8", newline="").write(chunk)
        parts.append(f"{name}.css")
        total += chunk
        print(f"  {name+'.css':22} {len(chunk):>7,} bytes  ({end-start} lines)")

    # 안전장치: 이어붙인 결과가 원본과 다르면 즉시 실패
    assert total == css, f"재조립 불일치! {len(total)} vs {len(css)}"
    print(f"\n재조립 검증 통과 — {len(parts)}개 파일, {len(css):,} bytes 원본과 바이트 일치")

    # 합치는 순서를 명시한 매니페스트. scripts/build-css.mjs 가 이 순서로 이어붙인다.
    import json as _json
    manifest = os.path.join(DST, "order.json")
    open(manifest, "w", encoding="utf-8").write(_json.dumps(parts, indent=2) + "\n")
    print("순서 매니페스트:", manifest)


if __name__ == "__main__":
    main()
