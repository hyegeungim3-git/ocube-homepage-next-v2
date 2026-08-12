// src/styles/*.css 모듈을 order.json 순서대로 이어붙여 public/assets/site2.css 를 만든다.
//
// CSS 는 뒤 규칙이 이기므로 순서가 곧 화면이다. 소스는 화면별로 나눠 두되
// 브라우저에는 지금까지와 똑같이 파일 하나로 내려간다(요청 수·캐스케이드 유지).
// CSS 안의 url(...) 이 assets/ 기준 상대경로라, 번들러를 태우지 않고 그대로 잇는다.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const stylesDir = path.join(root, "src", "styles");
const out = path.join(root, "public", "assets", "site2.css");

const order = JSON.parse(fs.readFileSync(path.join(stylesDir, "order.json"), "utf8"));
const merged = order.map((f) => fs.readFileSync(path.join(stylesDir, f), "utf8")).join("");

const before = fs.existsSync(out) ? fs.readFileSync(out, "utf8") : null;
fs.writeFileSync(out, merged, "utf8");

const changed = before !== merged;
console.log(
  `site2.css 생성: ${order.length}개 모듈 → ${merged.length.toLocaleString()}자` +
    (before === null ? " (신규)" : changed ? " (내용 변경됨)" : " (기존과 동일)"),
);
