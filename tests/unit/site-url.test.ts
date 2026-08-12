import { describe, expect, it } from "vitest";
import { applyBase, siteBaseUrl, withBase } from "@/config/site";

// canonical·og:url·JSON-LD·sitemap 이 전부 이 두 함수를 거친다.
// 슬래시 하나가 어긋나면 48쪽 메타가 통째로 틀어지므로 경계를 못 박는다.
describe("사이트 주소", () => {
  it("기준 주소는 슬래시로 끝난다", () => {
    expect(siteBaseUrl.endsWith("/")).toBe(true);
  });

  it("withBase 는 앞 슬래시가 있든 없든 같은 결과", () => {
    expect(withBase("/about.html")).toBe(`${siteBaseUrl}about.html`);
    expect(withBase("about.html")).toBe(`${siteBaseUrl}about.html`);
  });

  it("withBase 는 슬래시를 겹치지 않는다", () => {
    expect(withBase("/en/about.html")).not.toContain("//en/");
  });

  it("applyBase 는 자리표시자를 모두 바꾼다", () => {
    expect(applyBase("@@BASE@@a.html 와 @@BASE@@b.html")).toBe(
      `${siteBaseUrl}a.html 와 ${siteBaseUrl}b.html`,
    );
  });

  it("applyBase 는 자리표시자가 없으면 원문 그대로", () => {
    expect(applyBase("변경 없음")).toBe("변경 없음");
  });
});
