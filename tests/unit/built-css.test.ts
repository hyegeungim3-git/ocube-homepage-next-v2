import { describe, expect, it } from "vitest";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

// 빌드된 CSS 를 직접 본다.
//
// 왜 필요한가: 회귀 게이트(`npm run verify`)는 HTML 구조·본문·메타만 비교하고 **CSS 내용은
// 전혀 보지 않는다.** 그래서 압축기가 선언을 삼켜도 528/528 이 초록으로 나온다.
// 실제로 두 번 당했다 —
//   ① 표준 `backdrop-filter` 가 사라져 헤더 유리 효과가 죽었다 (Chrome 에서 눈에 보이는 결함)
//   ② `height:100vh` 폴백이 사라져 구형 브라우저에서 높이가 무너졌다
// 둘 다 소스에는 멀쩡히 있었고 출력에서만 없어졌다. 소스를 읽는 검사로는 못 잡는다.
//
// ⚠️ 이 검사는 `npm run build` 뒤에 의미가 있다. out/ 이 없으면 건너뛴다(CI 는 build 뒤에 돈다).

const CHUNKS = join(process.cwd(), "out", "_next", "static", "chunks");

function builtCss(): string | null {
  if (!existsSync(CHUNKS)) return null;
  const files = readdirSync(CHUNKS).filter((f) => f.endsWith(".css"));
  if (!files.length) return null;
  return files.map((f) => readFileSync(join(CHUNKS, f), "utf-8")).join("\n");
}

const css = builtCss();
const run = css ? describe : describe.skip;

run("빌드된 CSS", () => {
  const sheet = css ?? "";

  /**
   * 그 셀렉터를 **정확히** 가진 규칙들의 선언을 모두 모은다.
   * 단순 indexOf 로 찾으면 `.hero` 가 `.hero-bg` 에 먼저 걸린다(직접 겪었다).
   */
  function declarationsFor(selector: string): string {
    const bodies: string[] = [];
    for (const m of sheet.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const selectors = m[1]!.split(",").map((x) => x.trim());
      if (selectors.includes(selector)) bodies.push(m[2]!);
    }
    return bodies.join(";");
  }

  // ① 접두사 없는 표준 선언이 살아 있어야 한다 — Chrome 은 -webkit- 별칭을 모른다.
  it.each([
    [".gnb.scrolled", "헤더 유리 효과"],
    [".case-filter", "사례 필터 바"],
    [".fab-btn", "맨 위로·전화 버튼"],
  ])("%s 에 무접두 backdrop-filter 가 남아 있다 (%s)", (selector) => {
    const body = declarationsFor(selector);
    expect(body, `${selector} 규칙을 찾지 못했다`).not.toBe("");
    expect(body).toMatch(/(^|;)backdrop-filter:/);
  });

  it("표준 backdrop-filter 개수가 -webkit- 보다 적지 않다", () => {
    const plain = sheet.match(/(?<!-)\bbackdrop-filter:/g)?.length ?? 0;
    const webkit = sheet.match(/-webkit-backdrop-filter:/g)?.length ?? 0;
    expect(plain).toBeGreaterThan(0);
    expect(plain).toBeGreaterThanOrEqual(webkit);
  });

  // ② 구형 브라우저 폴백 — @supports 로 감싸지 않으면 압축기가 앞 선언을 지운다.
  it("100vh 폴백이 @supports 로 분리돼 5곳 모두 살아 있다", () => {
    const blocks = sheet.match(/@supports \(height:\s*100dvh\)/g)?.length ?? 0;
    expect(blocks).toBe(5);
  });

  it.each([".hero", ".hero.page-hero", ".m-panel", ".sol-copy", ".about-vision-stage"])(
    "%s 에 100vh(또는 calc) 폴백이 남아 있다",
    (selector) => {
      const body = declarationsFor(selector);
      expect(body, `${selector} 규칙을 찾지 못했다`).not.toBe("");
      expect(body).toMatch(/100vh/);
    },
  );
});
