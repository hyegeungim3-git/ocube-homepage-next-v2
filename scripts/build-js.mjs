// src/scripts/*.js 모듈을 order.json 순서대로 이어붙여 public/assets/site2.js 를 만든다.
//
// build-css.mjs 와 같은 방식 — 소스는 기능별로 나눠 두되 브라우저에는 지금까지와
// 똑같이 파일 하나로 내려간다(요청 수·실행 순서 유지). 이어붙이기만 하므로
// 모듈을 순서대로 합치면 분리 전 파일과 바이트 동일하다.
//
// 주의: public/assets/site2.js 는 생성물이다. 직접 고치면 다음 빌드에서 사라진다.
// 수정은 src/scripts/ 쪽에. (site2.css 와 같은 함정)
//
// 구조 메모: 00-head 가 외곽 IIFE 를 열고 17-iife-close 가 닫는다.
// 01~16 은 그 안(2칸 들여쓰기), 18 이후는 최상위 모듈이다.
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dir = path.join(root, "src", "scripts");
const out = path.join(root, "public", "assets", "site2.js");

const order = JSON.parse(fs.readFileSync(path.join(dir, "order.json"), "utf8"));
const merged = order.map((f) => fs.readFileSync(path.join(dir, f), "utf8")).join("");

const before = fs.existsSync(out) ? fs.readFileSync(out, "utf8") : null;
fs.writeFileSync(out, merged, "utf8");

const changed = before !== merged;
console.log(
  `site2.js 생성: ${order.length}개 모듈 → ${merged.length.toLocaleString()}자` +
    (before === null ? " (신규)" : changed ? " (내용 변경됨)" : " (기존과 동일)"),
);
