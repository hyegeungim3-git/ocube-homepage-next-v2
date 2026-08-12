// out/ 을 그대로 내려주는 최소 정적 서버.
//
// 이 사이트는 output:"export" 라 `next start` 를 쓸 수 없다. 그렇다고 serve·http-server 같은
// 라이브러리를 새로 넣지는 않는다(플레이북 1절: 승인된 도구는 sass·Playwright·Vitest 뿐).
// node:http 만으로 충분하다 — 주소가 /about.html 처럼 실제 파일명이라 라우팅이 필요 없다.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "out");
const PORT = Number(process.env.PORT || 4321);

if (!fs.existsSync(ROOT)) {
  console.error(`out/ 이 없다. 먼저 npm run build 를 실행할 것. (찾은 경로: ${ROOT})`);
  process.exit(1);
}

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

http
  .createServer((req, res) => {
    const url = decodeURIComponent((req.url || "/").split("?")[0]);
    const rel = url.endsWith("/") ? `${url}index.html` : url;
    let file = path.join(ROOT, path.normalize(rel).replace(/^([/\\])+/, ""));

    // 디렉터리 경로로 들어오면 index.html 로 (구 슬러그 리다이렉트 스텁이 이 형태다)
    if (fs.existsSync(file) && fs.statSync(file).isDirectory())
      file = path.join(file, "index.html");

    if (!file.startsWith(ROOT) || !fs.existsSync(file)) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end(`404 ${url}`);
      return;
    }
    res.writeHead(200, {
      "content-type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream",
      "cache-control": "no-store",
    });
    fs.createReadStream(file).pipe(res);
  })
  .listen(PORT, "127.0.0.1", () => console.log(`static: http://127.0.0.1:${PORT} → ${ROOT}`));
