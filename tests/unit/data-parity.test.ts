import { describe, expect, it } from "vitest";

// 로드맵 3단계에서 src/data/x.ts + x.en.ts 두 벌을 Record<Lang, ContentType> 한 벌로 합친다.
// 합치려면 "두 벌의 모양이 정말 같다" 는 게 전제다. 지금 그 전제를 검사로 못 박아 둔다.
//
// ⚠️ 처음에는 "구조가 완전히 같다" 로 썼다가 기존 코드에서 11건이 깨졌다. 원인은 결함이 아니라
// 설계였다 — RichToken 배열의 "wbr"(한국어 줄바꿈 힌트)은 영어판에서 걷어내고 갈라진 문장을
// 이어 붙이므로 토큰 개수가 애초에 달라진다(architecture.md 참조). 그래서 계약을 실제 규칙으로
// 고쳐 적었다: **필드 구성과 컬렉션 길이는 같고, 인라인 서식 토큰의 개수만 언어별로 다르다.**
// (플레이북 11절: 테스트는 변경 전 코드에서 먼저 통과해야 한다 — 코드가 아니라 기대를 고친다.)

type Json = unknown;

/** RichToken 배열인가 — 원소가 전부 문자열이거나 { b } / { em } 한 겹인 배열 */
function isRichTokens(value: Json): boolean {
  if (!Array.isArray(value) || value.length === 0) return false;
  return value.every((t) => {
    if (typeof t === "string") return true;
    if (t === null || typeof t !== "object" || Array.isArray(t)) return false;
    const keys = Object.keys(t as Record<string, unknown>);
    return keys.length === 1 && (keys[0] === "b" || keys[0] === "em");
  });
}

/** 두 값의 구조를 대조해 어긋난 경로를 모은다. */
function mismatches(ko: Json, en: Json, path = ""): string[] {
  const at = path || "(root)";

  if (Array.isArray(ko) || Array.isArray(en)) {
    if (!Array.isArray(ko) || !Array.isArray(en)) return [`${at}: 한쪽만 배열`];
    // 인라인 서식 토큰은 언어별로 개수가 다른 것이 정상이다
    if (isRichTokens(ko) && isRichTokens(en)) return [];
    if (ko.length !== en.length) return [`${at}: 길이 ${ko.length} vs ${en.length}`];
    return ko.flatMap((item, i) => mismatches(item, en[i], `${at}[${i}]`));
  }

  if (ko !== null && typeof ko === "object") {
    if (en === null || typeof en !== "object") return [`${at}: 한쪽만 객체`];
    const koKeys = Object.keys(ko as Record<string, Json>).sort();
    const enKeys = Object.keys(en as Record<string, Json>).sort();
    if (koKeys.join("|") !== enKeys.join("|")) {
      return [`${at}: 키 [${koKeys}] vs [${enKeys}]`];
    }
    return koKeys.flatMap((key) =>
      mismatches(
        (ko as Record<string, Json>)[key],
        (en as Record<string, Json>)[key],
        `${at}.${key}`,
      ),
    );
  }

  return typeof ko === typeof en ? [] : [`${at}: 타입 ${typeof ko} vs ${typeof en}`];
}

const modules = import.meta.glob<Record<string, unknown>>("../../src/data/*.ts", { eager: true });
const nameOf = (path: string): string => path.slice(path.lastIndexOf("/") + 1, -3);
const pathOf = (name: string): string | undefined =>
  Object.keys(modules).find((p) => nameOf(p) === name);

const koNames = Object.keys(modules)
  .map(nameOf)
  .filter((n) => !n.endsWith(".en"))
  .sort();

describe("src/data 한국어·영어 두 벌", () => {
  it("한국어 데이터 모듈 16개", () => {
    expect(koNames).toHaveLength(16);
  });

  it.each(koNames)("%s.ts 에는 짝이 되는 .en.ts 가 있다", (name) => {
    expect(pathOf(`${name}.en`), `${name}.en.ts 없음`).toBeDefined();
  });

  it.each(koNames)("%s — 두 벌의 export 이름이 같다", (name) => {
    const ko = pathOf(name);
    const en = pathOf(`${name}.en`);
    if (!ko || !en) return; // 위 검사에서 이미 실패로 보고된다
    expect(Object.keys(modules[en]).sort()).toEqual(Object.keys(modules[ko]).sort());
  });

  it.each(koNames)("%s — 필드 구성과 항목 수가 같다 (값·서식 토큰만 다르다)", (name) => {
    const ko = pathOf(name);
    const en = pathOf(`${name}.en`);
    if (!ko || !en) return;
    expect(mismatches(modules[ko], modules[en])).toEqual([]);
  });
});
