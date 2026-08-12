// 라이브와 새 빌드에서 같은 조작을 하고 결과가 같은지 비교한다.
import puppeteer from "puppeteer-core";
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const NEW = process.argv[2] || "http://localhost:8901/";
const LIVE = "https://hyegeungim3-git.github.io/ocube-homepage-final/";
const DESK = { width: 1440, height: 900, deviceScaleFactor: 1, isMobile: false, hasTouch: false };
const MOB = { width: 375, height: 812, deviceScaleFactor: 1, isMobile: true, hasTouch: true };

const SCENARIOS = [
  {
    name: "홈 히어로 슬라이더(다음/이전/일시정지)",
    page: "index.html",
    vp: DESK,
    run: async (p) => {
      const st = () => p.evaluate(() => {
        const s = [...document.querySelectorAll(".hslide")];
        return {
          n: s.length,
          active: s.findIndex((e) => /is-active|active|on\b/.test(e.className)),
          paused: document.querySelector(".hero")?.classList.contains("paused") ?? null,
          pressed: document.querySelector(".hnav-toggle,[aria-pressed]")?.getAttribute("aria-pressed") ?? null,
        };
      });
      const a0 = await st();
      await p.click(".hnav-next, .hctrl .hnav:last-child").catch(() => {});
      await new Promise((r) => setTimeout(r, 600));
      const a1 = await st();
      await p.click(".hnav-prev, .hctrl .hnav:first-child").catch(() => {});
      await new Promise((r) => setTimeout(r, 600));
      const a2 = await st();
      await p.click('[aria-pressed]').catch(() => {});
      await new Promise((r) => setTimeout(r, 400));
      const a3 = await st();
      return { 슬라이드수: a0.n, 시작: a0.active, 다음: a1.active, 이전: a2.active, 일시정지: a3.paused, aria: a3.pressed };
    },
  },
  {
    name: "GNB 드롭다운 열기",
    page: "index.html",
    vp: DESK,
    run: async (p) => {
      await p.hover(".nav-menu .nav-item");
      await new Promise((r) => setTimeout(r, 500));
      return p.evaluate(() => {
        const dd = document.querySelector(".nav-item .dropdown");
        const r = dd?.getBoundingClientRect();
        return {
          메가상태: document.querySelector(".gnb")?.className.includes("gnb-mega"),
          드롭다운높이: r ? Math.round(r.height) : 0,
          보이는링크: [...document.querySelectorAll(".nav-item .dropdown a")].filter(
            (a) => a.getBoundingClientRect().height > 0).length,
        };
      });
    },
  },
  {
    name: "레퍼런스 도메인 필터",
    page: "references.html",
    vp: DESK,
    run: async (p) => {
      const vis = () => p.evaluate(() =>
        [...document.querySelectorAll(".ref-card")].filter((c) => c.getBoundingClientRect().height > 0).length);
      const all = await vis();
      const tabs = await p.evaluate(() => [...document.querySelectorAll(".case-tab")].map((t) => t.textContent.trim()));
      await p.evaluate(() => {
        const t = [...document.querySelectorAll(".case-tab")].find((x) => x.textContent.includes("제조"));
        t && t.click();
      });
      await new Promise((r) => setTimeout(r, 500));
      const mfg = await vis();
      const counter = await p.evaluate(() => document.querySelector(".case-count, [class*=count]")?.textContent.trim() ?? null);
      await p.evaluate(() => document.querySelector(".case-tab")?.click());
      await new Promise((r) => setTimeout(r, 500));
      return { 탭: tabs.join("/"), 전체: all, 제조필터: mfg, 카운터: counter, 복귀: await vis() };
    },
  },
  {
    name: "문의 연락처 복사 + 토스트",
    page: "contact.html",
    vp: DESK,
    run: async (p) => {
      await p.evaluate(() => document.querySelector("[data-copy]")?.click());
      await new Promise((r) => setTimeout(r, 500));
      return p.evaluate(() => ({
        복사버튼: document.querySelectorAll("[data-copy]").length,
        토스트: document.querySelector(".toast, [class*=toast]")?.textContent.trim() ?? "없음",
      }));
    },
  },
  {
    name: "솔루션 이동 문구(스크롤 연동)",
    page: "solution-cubeon.html",
    vp: DESK,
    run: async (p) => {
      const at = async (y) => {
        await p.evaluate((yy) => {
          document.documentElement.style.scrollBehavior = "auto";
          window.scrollTo(0, yy);
        }, y);
        await new Promise((r) => setTimeout(r, 350));
        return p.evaluate(() => {
          const c = document.querySelector(".sol-copy");
          const h1 = document.querySelector(".sol-copy h1");
          return {
            y: Math.round(window.scrollY),
            p: getComputedStyle(c).getPropertyValue("--p").trim().slice(0, 5),
            light: c.classList.contains("on-light"),
            h1: Math.round(parseFloat(getComputedStyle(h1).fontSize)),
          };
        });
      };
      return { "y0": await at(0), "y300": await at(300), "y700": await at(700) };
    },
  },
  {
    name: "FAB 맨 위로",
    page: "solution-cubeon.html",
    vp: DESK,
    run: async (p) => {
      await p.evaluate(() => window.scrollTo(0, 1500));
      await new Promise((r) => setTimeout(r, 600));
      const shown = await p.evaluate(() => {
        const b = document.querySelector(".fab-top, .to-top, .fab-stack a, .fab-stack button");
        return b ? getComputedStyle(b).display !== "none" && getComputedStyle(b).opacity !== "0" : null;
      });
      await p.evaluate(() => document.querySelector(".fab-top, .to-top, .fab-stack button")?.click());
      await new Promise((r) => setTimeout(r, 900));
      const y = await p.evaluate(() => Math.round(window.scrollY));
      return { 스크롤후노출: shown, 클릭후위치: y < 50 ? "최상단" : y };
    },
  },
  {
    name: "모바일 메뉴 개폐",
    page: "index.html",
    vp: MOB,
    run: async (p) => {
      const st = () => p.evaluate(() => ({
        panel: (() => { const e = document.querySelector(".m-panel"); const s = getComputedStyle(e); return s.display + "/" + s.visibility; })(),
        lock: document.body.className,
        expanded: document.querySelector(".m-toggle")?.getAttribute("aria-expanded"),
      }));
      const before = await st();
      await p.click(".m-toggle");
      await new Promise((r) => setTimeout(r, 600));
      const open = await st();
      await p.click(".m-toggle");
      await new Promise((r) => setTimeout(r, 600));
      return { 닫힘: before, 열림: open, 재닫힘: await st() };
    },
  },
];

const b = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--autoplay-policy=no-user-gesture-required", "--hide-scrollbars", "--force-device-scale-factor=1"],
});

async function run(base, sc) {
  const p = await b.newPage();
  await p.setViewport(sc.vp);
  await p.goto(base + sc.page, { waitUntil: "networkidle2", timeout: 45000 });
  await new Promise((r) => setTimeout(r, 1800));
  let out;
  try {
    out = await sc.run(p);
  } catch (e) {
    out = { 오류: String(e).slice(0, 90) };
  }
  await p.close();
  return out;
}

let ok = 0;
for (const sc of SCENARIOS) {
  const a = await run(NEW, sc);
  const c = await run(LIVE, sc);
  const same = JSON.stringify(a) === JSON.stringify(c);
  if (same) ok++;
  console.log(`${same ? "✔" : "✘"} ${sc.name}`);
  console.log(`   NEW : ${JSON.stringify(a)}`);
  if (!same) console.log(`   LIVE: ${JSON.stringify(c)}`);
}
console.log(`\n===== 인터랙션 ${SCENARIOS.length}건 중 일치 ${ok} =====`);
await b.close();
