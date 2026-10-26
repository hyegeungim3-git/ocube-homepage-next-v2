# 다른 PC·다른 계정에서 이어받기

이 문서는 **컴퓨터나 Claude 계정이 바뀌어도 작업이 끊기지 않게** 하는 순서표다.
코드 작업 규칙은 `AGENTS.md`, 구조는 `docs/architecture.md`, 먼저 밟은 지뢰는 `docs/pitfalls.md` 에 있다.
여기에는 그 문서들이 다루지 않는 것 — **새 PC 준비, git 밖에 있는 것, 계정에 묶인 것, 열려 있는 일** — 만 적는다.

## 0. 넘겨줄 때의 상태 (2026-10-26)

| 항목        | 값                                                                                  |
| ----------- | ----------------------------------------------------------------------------------- |
| 정본        | 이 저장소 `hyegeungim3-git/ocube-homepage-next-v2`, `main`                          |
| 공개 주소   | https://hyegeungim3-git.github.io/ocube-homepage-next-v2/ (`main` push → 자동 배포) |
| GitHub 계정 | `hyegeungim3-git` — **새 PC 에서도 같은 계정으로 로그인해 이어간다**                |
| 검사        | verify 576/576 · unit 91 · e2e 203 · visual 34 전부 통과                            |
| 미커밋 작업 | 없음 (8/28 에 남아 있던 구축 사례 2건 추가분은 2026-10-26 커밋·배포했다)            |

## 1. 새 PC 준비

설치할 것

| 도구                    | 용도                               | 비고                                     |
| ----------------------- | ---------------------------------- | ---------------------------------------- |
| Git                     | 저장소                             |                                          |
| Node 22 LTS             | 빌드·테스트                        | CI 와 같은 판. 24 에서도 동작 확인       |
| Python 3.12 이상        | `npm run verify` (파이썬 스크립트) | `beautifulsoup4` 필요                    |
| GitHub CLI (`gh`)       | 로그인·push·Actions 확인           |                                          |
| Google Chrome           | 화면설계서 캡처(`puppeteer-core`)  | 기본 설치 경로를 가정한다                |
| Claude 데스크톱 앱      | 이어서 작업                        | 3절 참조                                 |
| (선택) PowerPoint       | 화면설계서 PPTX 실렌더 확인        |                                          |
| (선택) ffmpeg · PyMuPDF | 영상 인코딩 · PDF/AI 로고 이미지화 | `pip install pymupdf pillow python-pptx` |

순서

```bash
gh auth login                 # hyegeungim3-git 로 로그인
gh auth setup-git             # git push 가 위 로그인을 쓰게 한다

git clone https://github.com/hyegeungim3-git/ocube-homepage-next-v2.git C:/오큐브/ocube-next-v2
cd C:/오큐브/ocube-next-v2
git config user.name  "이름"   # 이 저장소에만 (--global 쓰지 않는다)
git config user.email "메일"

npm ci                        # install 이 아니라 ci
pip install -r scripts/requirements.txt
npx playwright install chromium

npm run build && npm run verify      # → 576/576
npm run test:unit && npm run test:e2e
npm run test:visual
```

**왜 `C:/오큐브` 아래에 두나** — 프로젝트 전체 기록 `C:/오큐브/CLAUDE.md` 는 git 밖에 있고(2절),
Claude 는 작업 폴더의 **위쪽** 폴더에 있는 `CLAUDE.md` 만 읽는다. 다른 곳에 clone 하면 그 기록이
안 보인다. 저장소 안의 `CLAUDE.md` 는 이 문서와 `AGENTS.md` 만 가리킨다.

### 처음 돌렸을 때 막히는 곳

- **`test:visual` 이 실패한다** — 스크린샷 기준선은 이전 PC(Windows)에서 만들었다. 글꼴 설치·화면 배율이
  다르면 화면이 그대로여도 실패할 수 있다. `test-results/` 의 `-diff.png` 를 열어 **글자 가장자리 차이뿐인지**
  먼저 본다. 그렇다면 `npm run test:visual:approve` 후 "새 PC 기준선 재생성" 으로 커밋한다.
  배치·문구가 달라 보이면 approve 하지 말고 원인부터 찾는다.
- **`verify` 가 바로 멈춘다** — `out/` 이 소스보다 낡았다는 뜻이다. `npm run build` 를 먼저.
- **`npm run build` 가 `EBUSY: rmdir out`** — `out/` 을 내려주는 확인 서버가 떠 있다. 끄고 다시.
- **PowerShell 에서 한글 파일을 치환하지 않는다** — `Get-Content | -replace | Set-Content` 는 UTF-8 한글을
  깨뜨린다. 편집기나 Claude 의 Edit 도구를 쓴다. 커밋 메시지에 쌍따옴표(") 도 넣지 않는다.

## 2. git 에 없는 것 — Google Drive 로 옮긴 폴더

다음은 이 저장소에 없다. 이전 PC 의 `C:/오큐브` 를 (다시 만들 수 있는 폴더만 빼고) Google Drive 에
폴더째 올려 옮긴다. 새 PC 에서 `C:/오큐브` 로 받은 뒤 `C:/오큐브/_인수인계/00_먼저읽기.md` 를 따른다
(받은 파일이 온전한지 해시로 확인하는 스크립트와 Claude 설정 설치 스크립트가 거기 있다).

| 무엇                                      | 이전 PC 위치                                | 왜 필요한가                                                    |
| ----------------------------------------- | ------------------------------------------- | -------------------------------------------------------------- |
| 프로젝트 전체 기록 `CLAUDE.md` (약 440KB) | `C:/오큐브/CLAUDE.md`                       | 7월부터의 결정·확정 수치·검수 금지선·작업 이력. **가장 중요**  |
| 원본 자료                                 | `C:/오큐브/` 루트                           | 회사소개서·확인서·특허증·로고·전사 수정 문서·회의 반영 문서 등 |
| 화면설계서 도구와 산출물                  | `C:/오큐브/화면설계서/`                     | 화면설계서 2종(PPTX) 재생성 파이프라인 — 아래 참조             |
| Claude 개인 설정                          | `~/.claude/` (CLAUDE.md·guides·skills)      | 전역 작업 원칙, `/quality-gate`·`/screen-spec` 등 스킬 9종     |
| 옛 판 저장소 사본                         | `C:/오큐브/ocube-next`, `홈페이지_시안/` 등 | 참고용. 전부 GitHub 에도 있다                                  |

화면설계서 다시 만들기 (사이트를 바꾼 뒤 문서도 맞출 때)

```bash
cd C:/오큐브/ocube-next-v2 && npm run build
python -m http.server 8901 --directory C:/오큐브/ocube-next-v2/out   # 별도 창에서 띄워 둔다
cd C:/오큐브/화면설계서 && npm i
node capture-wireframe.mjs && node capture-sections.mjs && node capture-mobile.mjs
node capture-meta.mjs && node capture-tokens.mjs && node capture-edge.mjs
python gen_wireframe_pptx.py && python gen_pptx.py
```

판을 올릴 때는 `gen_pptx.py` 의 `REVISIONS` 목록에 한 줄을 더한다(표지·화면별 메타가 따라간다).

## 3. Claude 계정이 바뀌면 따라오지 않는 것

- **개인 설정** — `~/.claude/CLAUDE.md`(전역 작업 원칙), `guides/`(품질기준-마스터 등 5종),
  `skills/`(quality-gate · screen-spec · proto-demo · ui-design · ux-audit · multi-platform ·
  ship-github · source-analysis · ppt-design). `_인수인계/설정설치.ps1` 이 새 계정의 `~/.claude/` 에 넣는다.
- **플러그인** — harness · humanize-korean · pm-skills 등은 새 계정에서 다시 켠다.
  pm-skills 는 로컬 마켓플레이스(`C:/pm-skills-main`)라 그 폴더도 `_인수인계/Claude개인설정/` 에 들어 있다.
- **커넥터·아티팩트** — Notion·Figma·Google Drive 같은 커넥터 연결과 claude.ai 에 발행한 페이지는
  계정에 묶여 있어 옮겨지지 않는다. 필요하면 새 계정에서 다시 연결한다.
- **대화 기록·메모리** — 옮기지 않는다. 이어받을 내용은 전부 `C:/오큐브/CLAUDE.md`·이 문서·`AGENTS.md` 에 있다.
- **로그인 정보** — `gh`, Cloudflare `wrangler`, Claude 로그인은 새 PC 에서 각자 다시 한다.
  토큰·자격 증명 파일은 옮기는 폴더에 넣지 않았다.

## 4. 열려 있는 일

1. **사이트 기준 주소는 실도메인이 정해지면 바꾼다 — 그때까지 그대로 둔다 (2026-10-26 사용자 결정).**
   `src/config/site.ts` 의 기본값이 `…/ocube-homepage-next/` 라, 그 저장소가 2026-08-26 비공개로
   바뀐 뒤로 48쪽의 canonical · hreflang · og:url · sitemap · 구조화 데이터가 404 주소를 가리킨다.
   알고 둔 상태이니 **임의로 고치지 않는다.** 도메인이 정해지면 `NEXT_PUBLIC_SITE_URL`(또는 기본값)을
   바꾸고, `verify` 불일치가 head · ld 뿐인지 읽은 뒤 기준선을 갱신한다.
2. **구축 사례 배지** — '대구 어르신 통합무임 교통카드'(발주처 대구광역시)가 `B2B` 다.
   다른 지자체 사례는 `B2G` 라 확인이 필요하다 (`src/data/refs.ts`).
3. **결정 대기 3건** — 문의 폼 실제 전송 방식(지금은 메일 앱 열기) · 404 전용 화면 · 대표이사 영문 표기.
4. **확인 대기** — 연혁 1기의 "국내 최초 Qt Certified Partner" 를 시점 한정형으로 둘지,
   8/26 회의에서 보류한 2건(페이지별 히어로 배경 12장 추가, '핵심가치' 화면 위치 확인).
5. **남은 정리** — `home-refresh.js` React 이전, 인라인 style 86건 (`AGENTS.md` 11절).

## 5. 저장소·주소 지도

| 저장소 / 주소                           | 상태 (2026-10-26)         | 무엇                                                  |
| --------------------------------------- | ------------------------- | ----------------------------------------------------- |
| `ocube-homepage-next-v2` · Pages        | 공개 · 200                | **정본**                                              |
| `ocube-homepage-next`                   | 비공개 · 보관 · Pages 404 | 먼저 만든 판                                          |
| `ocube-homepage-final`                  | 비공개 · Pages 404        | 정적 HTML 판(`홈페이지_시안/codex`)                   |
| `ocube-homepage`                        | 비공개                    | 7월 첫 시안(`홈페이지_시안/a`)                        |
| `ocube-homepage.pages.dev` (Cloudflare) | 공개 · 200                | 7월 시안이 아직 떠 있다 — 내릴지 결정 필요            |
| `ocube-daegu/ocube-daegu.github.io`     | 다른 계정 저장소          | 로컬에 clone 만 돼 있다. 이 기록과의 관계는 확인 필요 |
