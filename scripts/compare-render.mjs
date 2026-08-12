// 라이브 사이트와 새 빌드의 실제 렌더를 전 페이지 × 데스크톱/모바일로 대조한다.
import puppeteer from "puppeteer-core";
import fs from "node:fs";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const NEW_BASE = process.argv[2] || "http://localhost:8901/";
const LIVE_BASE = "https://hyegeungim3-git.github.io/ocube-homepage-final/";
const OUT = "shots";

const PAGES = [
  "index.html", "about.html", "business-ax.html", "business-embedded.html", "business-si.html",
  "company.html", "contact.html", "license-protopie.html", "license-qt.html", "license-telit.html",
  "license-toradex.html", "license-tuxera.html", "license-visualon.html", "location.html",
  "privacy.html", "references.html", "solution-agentq.html", "solution-cubeon.html",
  "solution-dataq.html", "solution-evcp.html", "solution-factoryq.html", "solution-qdrive.html",
  "solution-traffic.html",
];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900, deviceScaleFactor: 1, isMobile: false, hasTouch: false },
  { name: "mobile", width: 375, height: 812, deviceScaleFactor: 1, isMobile: true, hasTouch: true },
];

const MEASURE = () => {
  const sel = "main, header, footer, section, h1, h2, h3, figure, table, ul, .hero, .duo, .pin-item, .dep-card, .case-card, .bcase-card, .kt-card, .feat, .mod, .stat";
  const els = [...document.querySelectorAll(sel)];
  const rects = els.map((e, i) => {
    const r = e.getBoundingClientRect();
    const cls = (typeof e.className === "string" ? e.className : "").split(/\s+/)[0] || "";
    return `${i}|${e.tagName}.${cls}|${Math.round(r.x)},${Math.round(r.y + window.scrollY)},${Math.round(r.width)},${Math.round(r.height)}`;
  });
  const cs = (s, p) => {
    const e = document.querySelector(s);
    return e ? p.map((k) => getComputedStyle(e)[k]).join("|") : null;
  };
  return {
    title: document.title,
    docH: document.documentElement.scrollHeight,
    docW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
    overflowX: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    counts: [
      document.querySelectorAll("section").length,
      document.images.length,
      document.querySelectorAll("a").length,
      document.querySelectorAll("h1").length,
    ].join("/"),
    broken: [...document.images].filter((i) => i.complete && i.naturalWidth === 0).length,
    htmlClass: document.documentElement.className,
    bodyClass: document.body.className,
    styleBody: cs("body", ["backgroundColor", "color", "fontFamily"]),
    styleH1: cs("h1", ["fontSize", "fontWeight", "color", "lineHeight"]),
    styleGnb: cs(".gnb", ["position", "height", "backgroundColor"]),
    rects,
  };
};

// 페이지 객체를 재사용하면 직전 페이지의 애니메이션·타이머 잔상이 좌표에 섞인다.
// 매 측정마다 새 페이지를 연다.
async function snap(browser, url, vp) {
  const page = await browser.newPage();
  const errs = [];
  page.on("console", (m) => m.type() === "error" && errs.push(m.text().slice(0, 120)));
  page.on("pageerror", (e) => errs.push("pageerror: " + String(e).slice(0, 120)));
  await page.setViewport(vp);
  await page.goto(url, { waitUntil: "networkidle2", timeout: 45000 });
  // site2.js(afterInteractive) 가 붙을 시간
  await new Promise((r) => setTimeout(r, 1200));
  // 리빌 애니메이션(translateY 30px)이 진행 중이면 측정 시점에 따라 좌표가 달라진다.
  // 양쪽 모두 '애니메이션 끝난 상태'로 고정한 뒤 잰다.
  await page.evaluate(() => {
    const s = document.createElement("style");
    s.textContent = "*,*::before,*::after{transition:none!important;animation:none!important}";
    document.head.appendChild(s);
    document.querySelectorAll(".rv,.reveal").forEach((e) => e.classList.add("in"));
    document.querySelectorAll("img[loading=lazy]").forEach((i) => (i.loading = "eager"));
  });
  // 이미지가 아직 안 붙으면 그 자리가 접혀서(높이 2px) 아래 전체가 밀린다.
  // 원격(LIVE)이 로컬보다 느려 이 차이가 회귀처럼 보인다 → 양쪽 모두 로드를 기다린다.
  await page.evaluate(
    () =>
      new Promise((done) => {
        const pending = [...document.images].filter((i) => !i.complete);
        if (!pending.length) return done(true);
        let left = pending.length;
        const tick = () => --left <= 0 && done(true);
        pending.forEach((i) => {
          i.addEventListener("load", tick, { once: true });
          i.addEventListener("error", tick, { once: true });
        });
        setTimeout(() => done(false), 8000);
      }),
  );
  // 웹폰트가 아직 안 붙었으면 폴백 글꼴로 계측돼 줄 수·너비가 달라진다.
  await page.evaluate(() => document.fonts.ready.then(() => true));
  await new Promise((r) => setTimeout(r, 700));
  const m = await page.evaluate(MEASURE);
  m.fontLoaded = await page.evaluate(() =>
    document.fonts.check('16px "Pretendard Variable"') + "/" + document.fonts.status);
  m.consoleErrors = errs;
  await page.close();
  return m;
}

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--autoplay-policy=no-user-gesture-required", "--hide-scrollbars", "--force-device-scale-factor=1"],
});
fs.mkdirSync(OUT, { recursive: true });

const report = [];
for (const vp of VIEWPORTS) {
  for (const f of PAGES) {
    const a = await snap(browser, NEW_BASE + f, vp);
    const b = await snap(browser, LIVE_BASE + f, vp);
    const diffs = [];
    const keys = ["title", "docH", "overflowX", "counts", "broken", "htmlClass", "bodyClass",
                  "styleBody", "styleH1", "styleGnb", "clientW", "fontLoaded"];
    for (const k of keys) if (String(a[k]) !== String(b[k])) diffs.push(`${k}: NEW=${a[k]} LIVE=${b[k]}`);
    let rectMiss = 0;
    const rectSample = [];
    if (a.rects.length !== b.rects.length) {
      diffs.push(`요소 수: NEW=${a.rects.length} LIVE=${b.rects.length}`);
    } else {
      for (let i = 0; i < a.rects.length; i++) {
        if (a.rects[i] !== b.rects[i]) {
          rectMiss++;
          if (rectSample.length < 4) rectSample.push(`  NEW ${a.rects[i]}\n  LIV ${b.rects[i]}`);
        }
      }
    }
    report.push({ vp: vp.name, page: f, diffs, rectMiss, rectTotal: a.rects.length, rectSample,
                  newErrs: a.consoleErrors, liveErrs: b.consoleErrors, docH: a.docH, ovf: a.overflowX });
    const flag = diffs.length || rectMiss ? "✘" : "✔";
    console.log(`${flag} ${vp.name.padEnd(7)} ${f.padEnd(26)} 요소 ${a.rects.length} · 좌표불일치 ${rectMiss} · 높이 ${a.docH} · ovf ${a.overflowX} · 콘솔 ${a.consoleErrors.length}`);
  }
}

fs.writeFileSync("render-report.json", JSON.stringify(report, null, 1));
const bad = report.filter((r) => r.diffs.length || r.rectMiss);
console.log(`\n===== 요약: ${report.length}셀 중 완전일치 ${report.length - bad.length} / 차이 ${bad.length} =====`);
for (const r of bad.slice(0, 12)) {
  console.log(`\n--- ${r.vp} ${r.page} (좌표 ${r.rectMiss}/${r.rectTotal}) ---`);
  r.diffs.forEach((d) => console.log("   " + d));
  r.rectSample.forEach((s) => console.log(s));
}
const errCells = report.filter((r) => r.newErrs.length);
console.log(`\n콘솔 오류가 있는 셀: ${errCells.length}`);
errCells.slice(0, 5).forEach((r) => console.log(`  ${r.vp} ${r.page}: ${r.newErrs.join(" | ")}`));

// 시각 증거: 대표 페이지 풀페이지 캡처
for (const vp of VIEWPORTS) {
  for (const f of ["index.html", "solution-cubeon.html", "business-embedded.html"]) {
    const sp = await browser.newPage();
    await sp.setViewport(vp);
    await sp.goto(NEW_BASE + f, { waitUntil: "networkidle2" });
    await new Promise((r) => setTimeout(r, 1800));
    await sp.screenshot({ path: `${OUT}/${vp.name}-${f.replace(".html", "")}.png`, fullPage: true });
    await sp.close();
  }
}
console.log("\n스크린샷 저장:", fs.readdirSync(OUT).join(", "));
await browser.close();
