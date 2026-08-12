// 영어 화면 생성 — 한국어 화면을 뼈대로 삼아 /en/ 아래에 같은 구조로 만든다.
//
// 지금 단계에서는 껍데기(메뉴·푸터·버튼)만 영어이고 본문은 한국어다.
// 본문 번역은 i18n/<slug>.json 에 채워 넣는 대로 이 스크립트가 반영한다.
import fs from "node:fs";
import path from "node:path";
import * as prettier from "prettier";

const root = path.resolve(import.meta.dirname, "..");
const SITE = path.join(root, "src/app/(site)");
const HOME = path.join(root, "src/app/(home)/page.tsx");
const OUT = path.join(root, "src/app/(en)/en");
const DICT = path.join(root, "i18n");

// 생성물도 저장소 포맷 규칙을 지켜야 한다. 안 그러면 이 스크립트를 돌릴 때마다
// npm run format:check 가 빨간불이 되고, 다음 사람이 "내가 뭘 깨뜨렸나" 를 먼저 의심하게 된다.
const prettierConfig = await prettier.resolveConfig(path.join(root, "package.json"));
const writeFormatted = async (file, code) => {
  const out = await prettier.format(code, { ...prettierConfig, filepath: file });
  fs.writeFileSync(file, out, "utf8");
};

const slugs = fs.readdirSync(SITE).filter((d) => fs.statSync(path.join(SITE, d)).isDirectory());

const load = (slug) => {
  const f = path.join(DICT, `${slug}.json`);
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf-8")) : {};
};

// 여러 화면이 함께 쓰는 데이터(히어로·카드·단계)는 사전을 모두 합쳐 한 번에 옮긴다
const allDict = () => {
  const merged = {};
  for (const f of fs.readdirSync(DICT)) {
    if (!f.endsWith(".json") || f.startsWith("_")) continue;
    Object.assign(merged, JSON.parse(fs.readFileSync(path.join(DICT, f), "utf-8")));
  }
  return merged;
};

// 사전은 "화면에 그대로 보이는 한 덩어리"에만 적용한다.
// 문장 중간을 부분적으로 바꾸면 다른 문장을 갉아먹는다
// (예: '오큐브는' 이 '오큐브는 임베디드 …' 문장 앞부분까지 바꿔 버린다).
// 그래서 태그 사이(>…<)나 따옴표 안(\"…\") 전체가 사전의 문장과 같을 때만 바꾼다.
const applyDict = (text, dict) => {
  // 문자열 안의 \n 은 화면에서 줄바꿈이라 사전에서는 공백 한 칸으로 본다
  // (예: data-typewriter 값). 영어는 줄바꿈 없이 한 문장으로 넣는다.
  const norm = (s) => s.replace(/\\n/g, " ").replace(/\s+/g, " ").trim();
  const map = new Map();
  for (const ko of Object.keys(dict)) {
    // 빈 값도 뜻이 있다 — 한국어에서 조사로 이어지던 조각을 영어에서는 지워야 문장이 산다.
    // 영어의 곧은 아포스트로피(company's)는 JSX 에서 그대로 쓰면 린트가 막으므로 활자용으로 바꾼다.
    if (typeof dict[ko] === "string") map.set(norm(ko), dict[ko].replace(/(\w)'(\w)/g, "$1’$2"));
  }
  // 경계는 태그(< >)·따옴표뿐 아니라 JSX 의 {" "} 같은 중괄호도 포함한다
  return text.replace(/([>"`}])([^<>"`{}]+)(?=[<"`{])/g, (m, open, body) => {
    const hit = map.get(norm(body));
    if (hit === undefined) return m; // 빈 문자열도 뜻이 있으니 존재 여부로 판단한다
    // 앞뒤 여백(줄바꿈·들여쓰기)은 그대로 두고 알맹이만 바꾼다
    return open + body.match(/^\s*/)[0] + hit + body.match(/\s*$/)[0];
  });
};

// 데이터 파일의 문장은 "…", "wbr", "…" 로 갈라져 있다. 영어에는 줄바꿈 힌트가 필요 없으니
// 먼저 이어 붙여 한 문장으로 만든 뒤 사전과 맞춘다.
const joinWbr = (text) => {
  let out = text, before;
  do {
    before = out;
    out = out.replace(/"([^"\r\n]*)",\s*"wbr",\s*"([^"\r\n]*)"/g, (m, a, b) => JSON.stringify(a + b));
  } while (out !== before);
  return out;
};

function toEnglish(src, slug) {
  let s = src;
  // 껍데기에 언어를 알린다
  s = s.replace(/<SiteHeader\s+slug="([^"]+)"\s*/, '<SiteHeader slug="$1" lang="en" ');
  s = s.replace(/<MobilePanel\s*\/>/, '<MobilePanel lang="en" />');
  s = s.replace(/<SiteFooter\b/, '<SiteFooter lang="en"');
  // 셸·메타와, 데이터에서 이미지 경로를 받는 조각들에 언어를 알린다
  // (PageShell 하나가 헤더·모바일 메뉴·푸터의 언어를 함께 넘긴다)
  s = s.replace(
    /<(PageMeta|PageShell|PageHero|PinSteps|ProjectCards|HomeCaseLinks|AppCards|PlogoItems|HomeSlides)\b/g,
    '<$1 lang="en"',
  );
  // 자산은 한 단계 위에 있다
  s = s.replace(/(["'(])assets\//g, "$1../assets/");
  // 주소는 /en/ 아래를 가리킨다
  s = s.replace(/withBase\("([^"]*)"\)/g, (m, p1) => `withBase("${p1 === "" ? "en/" : p1.startsWith("og-") ? p1 : "en/" + p1}")`);
  // 구조화 데이터 안의 주소도 영어 화면 기준으로. 예전에는 (?!") 로 막아 두어
  // 빵부스러기의 홈 링크("@@BASE@@")만 한국어 홈을 가리키고 있었다 — 그 예외를 없앤다.
  s = s.replace(/@@BASE@@/g, "@@BASE@@en/");
  s = s.replace(/content="ko_KR"/g, 'content="en_US"');
  // 언어 연결(hreflang)은 위의 주소 규칙에 함께 휩쓸리므로 되돌린다.
  // ko 는 한국어 화면을, en 은 영어 화면을 가리켜야 한다 — 양쪽 화면에서 같은 값이다.
  s = s.replace(/(hrefLang="(?:ko|x-default)" href=\{withBase\(")en\//g, "$1");
  s = s.replace(/(hrefLang="en" href=\{withBase\(")en\/en\//g, "$1en/");
  // <wbr /> 는 한국어 줄바꿈 힌트라 영어에는 필요 없다.
  // 먼저 걷어내야 그 때문에 갈라져 있던 문장이 하나로 이어져 사전과 맞는다.
  // 줄바꿈이 CRLF 라 \n 을 못으로 박으면 빗나간다 → 앞뒤 공백 전체를 지운다
  // (JSX 는 줄바꿈에 붙은 공백을 렌더에서 버리므로 그냥 이어 붙이는 것이 맞다)
  s = s.replace(/\s*<wbr \/>\s*/g, "");
  // 여러 화면이 함께 쓰는 데이터도 영어판을 참조한다
  s = s.replace(/from "@\/data\/([a-z-]+)"/g, 'from "@/data/$1.en"');
  // 공용 사전 위에 그 화면 사전을 얹는다 — 같은 문장이면 화면 쪽 번역이 이긴다.
  // 긴 문장부터 바꾼다 — 짧은 문구가 긴 문장 안을 먼저 갉아먹지 않도록
  return applyDict(s, { ...allDict(), ...load(slug) });
}

// 기존 파일은 그대로 덮어쓴다 (폴더 통째 삭제는 하지 않는다)
fs.mkdirSync(OUT, { recursive: true });

let n = 0;
for (const slug of slugs) {
  const src = fs.readFileSync(path.join(SITE, slug, "page.tsx"), "utf-8");
  fs.mkdirSync(path.join(OUT, slug), { recursive: true });
  await writeFormatted(path.join(OUT, slug, "page.tsx"), toEnglish(src, slug));
  n += 1;
}
// 홈은 /en/index.html 로 (상대 링크가 /en/ 안에서 그대로 이어지도록).
// 한국어 홈은 다른 화면과 껍데기가 다르다(홈에만 실리는 스타일시트가 있다).
// 그래서 영어 홈도 껍데기를 따로 두어야 한다 — 안 그러면 홈만 여백·정렬이 어긋난다.
// (중첩 레이아웃에 <link> 를 넣는 방법은 <head> 로 올라가지 않아 소용없다.)
const HOME_OUT = path.join(root, "src/app/(en-home)/en/index");
const home = fs.readFileSync(HOME, "utf-8");
fs.mkdirSync(HOME_OUT, { recursive: true });
await writeFormatted(path.join(HOME_OUT, "page.tsx"), toEnglish(home, "index"));
n += 1;
// 예전 구조에서 (en) 아래에 만들던 홈이 남아 있으면 같은 주소가 둘이 되어 빌드가 막힌다.
// 지우지 못하는 환경도 있으니 실패해도 진행하고, 대신 알려 준다.
if (fs.existsSync(path.join(OUT, "index"))) {
  try {
    for (const f of fs.readdirSync(path.join(OUT, "index"))) fs.rmSync(path.join(OUT, "index", f));
    fs.rmdirSync(path.join(OUT, "index"));
  } catch {
    console.warn("! src/app/(en)/en/index 를 지우지 못했습니다 — 직접 지워야 빌드가 됩니다");
  }
}

// 여러 화면이 함께 쓰는 데이터도 영어판을 만든다 (영어 화면은 이쪽을 참조한다)
const DATA = path.join(root, "src/data");
const dict = allDict();
const dataFiles = fs.readdirSync(DATA).filter((f) => f.endsWith(".ts") && !f.endsWith(".en.ts"));
for (const f of dataFiles) {
  const src = fs.readFileSync(path.join(DATA, f), "utf-8");
  const en = applyDict(joinWbr(src), dict);
  await writeFormatted(path.join(DATA, f.replace(/\.ts$/, ".en.ts")), en);
}
console.log(`데이터 ${dataFiles.length}개 영어판 생성 → src/data/*.en.ts`);

// 영어 화면용 최상위 레이아웃 (<html lang="en">).
// 한국어 쪽 껍데기를 그대로 옮겨 <head> 링크 순서(캐스케이드)를 지킨다.
const toEnLayout = (src, note) =>
  src
    .replace('<html lang="ko"', '<html lang="en"')
    .replace(/(["'])assets\//g, "$1../assets/")
    .replace(/^\/\/[^\n]*/, `// ${note} — 자동 생성(scripts/make-en.mjs), 고치지 말 것`);

for (const [koGroup, enGroup, note] of [
  ["(site)", "(en)", "영어 일반 화면(/en/*)의 최상위 레이아웃"],
  ["(home)", "(en-home)", "영어 홈(/en/index.html)의 최상위 레이아웃"],
]) {
  const src = fs.readFileSync(path.join(root, `src/app/${koGroup}/layout.tsx`), "utf-8");
  fs.mkdirSync(path.join(root, `src/app/${enGroup}`), { recursive: true });
  await writeFormatted(path.join(root, `src/app/${enGroup}/layout.tsx`), toEnLayout(src, note));
}

console.log(`영어 화면 ${n}개 생성 → src/app/(en)/en/`);
