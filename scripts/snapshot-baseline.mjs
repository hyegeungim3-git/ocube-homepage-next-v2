// 기준선 갱신 — 이번 빌드 결과를 '직전 승인본' 으로 삼는다.
// 의도한 변경을 반영한 뒤에만 실행하고, 무엇을 바꿨는지 커밋 메시지에 남긴다.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "out");
const base = path.join(root, "baseline");

if (!fs.existsSync(out)) {
  console.error("out/ 이 없다. npm run build 를 먼저 실행할 것.");
  process.exit(1);
}
fs.mkdirSync(base, { recursive: true });
fs.mkdirSync(path.join(base, "en"), { recursive: true });
for (const d of ["", "en"]) {
  const dir = path.join(base, d);
  if (!fs.existsSync(dir)) continue;
  for (const f of fs.readdirSync(dir)) if (f.endsWith(".html")) fs.unlinkSync(path.join(dir, f));
}

let n = 0;
for (const d of ["", "en"]) {                       // 한국어 + 영어(en/) 둘 다 기준선에 포함
  const src = path.join(out, d);
  if (!fs.existsSync(src)) continue;
  for (const f of fs.readdirSync(src)) {
    if (!f.endsWith(".html")) continue;
    fs.copyFileSync(path.join(src, f), path.join(base, d, f));
    n += 1;
  }
}
console.log(`기준선 갱신 ${n}페이지 → baseline/ (en/ 포함)`);
