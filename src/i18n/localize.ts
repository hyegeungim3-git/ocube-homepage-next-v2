import type { Lang } from "@/config/i18n";
import { lookup } from "@/i18n/dictionary";

// 화면 데이터(src/data/*.ts)를 두 언어로 내놓는다.
//
// 예전에는 생성기가 한국어 데이터 파일을 읽어 영어판 파일(*.en.ts)을 따로 만들어 두었고,
// 영어 화면은 그쪽을 참조했다. 지금은 한국어 데이터 하나만 두고, 그리는 시점에 사전을 태워
// `Record<Lang, T>` 로 내놓는다. 번역을 채우는 자리는 그대로 i18n/*.json 이다.
//
// 규칙은 생성기의 joinWbr + applyDict 와 같다.
//   ① "…", "wbr", "…" 로 갈라진 문장은 먼저 이어 붙인다 (영어에는 줄바꿈 힌트가 없다)
//   ② 이어 붙인 문장 전체가 사전에 있으면 바꾸고, 없으면 한국어를 그대로 둔다

/**
 * RichToken 배열에서 **문자열 사이에 낀 "wbr" 만** 걷어내고 앞뒤를 이어 붙인다.
 *
 * ⚠️ `"br"`(문장 구분 줄바꿈)은 건드리지 않는다. 처음에 "이웃한 문자열은 다 이어 붙인다" 로
 * 썼다가 `["…", "br", " …"]` 까지 한 문장으로 뭉개져 대조 검사가 잡아냈다.
 * 생성기의 정규식도 `"a", "wbr", "b"` 라는 정확한 모양에만 걸린다.
 */
function joinWbr(items: readonly unknown[]): unknown[] {
  const out: unknown[] = [];
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    const prev = out[out.length - 1];
    const next = items[i + 1];
    if (item === "wbr" && typeof prev === "string" && typeof next === "string") {
      out[out.length - 1] = prev + next;
      i += 1; // 다음 문자열은 방금 합쳤다
      continue;
    }
    out.push(item);
  }
  return out;
}

/**
 * 문자열 하나를 영어로. **앞뒤 여백은 그대로 남긴다.**
 *
 * `["… 찾아 묶고, ", { b: […] }]` 처럼 인라인 요소 앞에서 끊긴 조각은 끝의 한 칸이 곧
 * 띄어쓰기다. 사전 조회는 여백을 접어서 하지만, 결과에는 원래 여백을 다시 붙여야 한다.
 * (생성기도 같은 일을 했고, 이걸 빠뜨렸더니 대조 검사가 바로 잡아냈다)
 */
function translateString(value: string): string {
  const hit = lookup(value);
  if (hit === undefined) return value;
  const lead = value.match(/^\s*/)?.[0] ?? "";
  const trail = value.match(/\s*$/)?.[0] ?? "";
  return lead + hit + trail;
}

function toEnglish(value: unknown): unknown {
  if (typeof value === "string") return translateString(value);
  if (Array.isArray(value)) {
    const hadWbr = value.some((v) => v === "wbr");
    const joined = hadWbr ? joinWbr(value) : value;
    return joined.map(toEnglish);
  }
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, inner] of Object.entries(value as Record<string, unknown>)) {
      out[key] = toEnglish(inner);
    }
    return out;
  }
  return value;
}

/**
 * 한국어 데이터 하나를 두 언어로.
 *
 * ```ts
 * export const depCards = localized(depCardsKo);
 * // 화면에서는 depCards[lang]["solution-cubeon:fit"]
 * ```
 */
export function localized<T>(korean: T): Record<Lang, T> {
  return { ko: korean, en: toEnglish(korean) as T };
}
