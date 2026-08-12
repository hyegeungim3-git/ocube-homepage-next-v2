import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { T, localizeLd, t } from "@/i18n/translate";
import { lookup } from "@/i18n/dictionary";

// 3단계의 심장. 예전에는 생성기가 영어 화면 파일을 만들어 두었고, 이제는 그리는 시점에
// 사전을 태운다. **두 방식의 결과가 같아야** 화면이 안 바뀐다 — 그 규칙을 여기에 못 박는다.

const html = (node: React.ReactNode): string => renderToStaticMarkup(<>{node}</>);

describe("사전", () => {
  it("실제 번역을 찾는다", () => {
    expect(lookup("개인정보처리방침")).toBe("Privacy Policy");
    expect(lookup("홈")).toBe("Home");
  });

  it("앞뒤 공백·줄바꿈이 달라도 같은 문장으로 본다", () => {
    expect(lookup("  홈 ")).toBe("Home");
    expect(lookup("홈")).toBe(lookup("\n      홈\n    "));
  });

  it("없는 문장은 undefined (빈 문자열 번역과 구분된다)", () => {
    expect(lookup("사전에 없는 문장입니다")).toBeUndefined();
  });
});

describe("t — 속성값", () => {
  it("한국어 화면은 원문 그대로", () => {
    expect(t("ko", "개인정보처리방침")).toBe("개인정보처리방침");
  });

  it("영어 화면은 사전의 문장", () => {
    expect(t("en", "개인정보처리방침")).toBe("Privacy Policy");
  });

  it("사전에 없으면 한국어를 그대로 둔다 (빈칸으로 만들지 않는다)", () => {
    expect(t("en", "사전에 없는 문장입니다")).toBe("사전에 없는 문장입니다");
  });
});

describe("T — 화면에 보이는 글", () => {
  it("한국어면 받은 것을 그대로 돌려준다", () => {
    expect(html(<T l="ko">개인정보처리방침</T>)).toBe("개인정보처리방침");
  });

  it("영어면 사전의 문장으로 바꾼다", () => {
    expect(html(<T l="en">개인정보처리방침</T>)).toBe("Privacy Policy");
  });

  it("한국어 화면의 <wbr /> 은 그대로 남는다", () => {
    expect(
      html(
        <T l="ko">
          개인정보
          <wbr />
          처리방침
        </T>,
      ),
    ).toBe("개인정보<wbr/>처리방침");
  });

  it("영어에서는 <wbr /> 로 갈라진 문장을 이어 붙여 찾는다", () => {
    // 생성기도 <wbr /> 를 먼저 걷어낸 뒤 사전과 맞췄다
    expect(
      html(
        <T l="en">
          개인정보
          <wbr />
          처리방침
        </T>,
      ),
    ).toBe("Privacy Policy");
  });

  it("앞뒤 여백은 남긴다 — 인라인 요소 경계의 띄어쓰기가 사라지면 안 된다", () => {
    expect(html(<T l="en"> 개인정보처리방침 </T>)).toBe(" Privacy Policy ");
  });

  it("사전에 없으면 한국어를 그대로 그린다", () => {
    expect(html(<T l="en">사전에 없는 문장입니다</T>)).toBe("사전에 없는 문장입니다");
  });
});

describe("localizeLd — 구조화 데이터", () => {
  const raw =
    '{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},' +
    '{"@type":"ListItem","position":2,"name":"개인정보처리방침","item":"@@BASE@@privacy.html"}';

  it("한국어는 손대지 않는다", () => {
    expect(localizeLd("ko", raw)).toBe(raw);
  });

  it("영어는 주소를 en/ 아래로 옮기고 이름을 번역한다", () => {
    const out = localizeLd("en", raw);
    expect(out).toContain('"name":"Home"');
    expect(out).toContain('"name":"Privacy Policy"');
    expect(out).toContain('"item":"@@BASE@@en/"');
    expect(out).toContain('"item":"@@BASE@@en/privacy.html"');
  });

  it("사전에 없는 이름은 한국어로 남는다 (지금 영어 화면과 같은 상태)", () => {
    expect(localizeLd("en", '{"name":"오큐브 주식회사"}')).toContain('"name":"오큐브 주식회사"');
  });
});
