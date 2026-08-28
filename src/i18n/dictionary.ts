// 화면 문구 사전 — 한국어 원문에서 영어를 찾는다.
//
// 예전에는 scripts/make-en.mjs 가 이 사전으로 **영어 화면 파일을 생성**했다. 지금은 화면이
// 한 벌뿐이고 그리는 시점에 여기서 영어를 꺼낸다. 사전 파일(i18n/*.json)은 그대로 쓴다 —
// 번역을 채우는 자리가 바뀌지 않아야 하기 때문이다.
//
// 밑줄로 시작하는 파일(_remain·_sol)은 작업용 메모라 생성기도 제외했다. 여기서도 제외한다.
//
// ⚠️ 이 모듈은 서버에서만 쓰인다(화면이 전부 Server Component). 브라우저 번들에 실리지 않는다.

import d_about from "../../i18n/about.json";
import d_business_ax from "../../i18n/business-ax.json";
import d_business_embedded from "../../i18n/business-embedded.json";
import d_business_si from "../../i18n/business-si.json";
import d_company from "../../i18n/company.json";
import d_contact from "../../i18n/contact.json";
import d_data from "../../i18n/data.json";
import d_index from "../../i18n/index.json";
import d_license_protopie from "../../i18n/license-protopie.json";
import d_license_qt from "../../i18n/license-qt.json";
import d_license_telit from "../../i18n/license-telit.json";
import d_license_toradex from "../../i18n/license-toradex.json";
import d_license_tuxera from "../../i18n/license-tuxera.json";
import d_license_visualon from "../../i18n/license-visualon.json";
import d_location from "../../i18n/location.json";
import d_privacy from "../../i18n/privacy.json";
import d_references from "../../i18n/references.json";
import d_solution_agentq from "../../i18n/solution-agentq.json";
import d_solution_cubeon from "../../i18n/solution-cubeon.json";
import d_solution_dataq from "../../i18n/solution-dataq.json";
import d_solution_evcp from "../../i18n/solution-evcp.json";
import d_solution_factoryq from "../../i18n/solution-factoryq.json";
import d_solution_qdrive from "../../i18n/solution-qdrive.json";
import d_solution_traffic from "../../i18n/solution-traffic.json";

/** 한국어 원문 -> 영어. 같은 문장이 여러 화면에 나와도 한 번만 번역하면 된다. */
export type Dictionary = Readonly<Record<string, string>>;

const merged: Record<string, string> = Object.assign(
  {},
  d_about,
  d_business_ax,
  d_business_embedded,
  d_business_si,
  d_company,
  d_contact,
  d_data,
  d_index,
  d_license_protopie,
  d_license_qt,
  d_license_telit,
  d_license_toradex,
  d_license_tuxera,
  d_license_visualon,
  d_location,
  d_privacy,
  d_references,
  d_solution_agentq,
  d_solution_cubeon,
  d_solution_dataq,
  d_solution_evcp,
  d_solution_factoryq,
  d_solution_qdrive,
  d_solution_traffic,
);

export const dictionary: Dictionary = merged;

/**
 * 사전 조회용 정규화 — 생성기가 쓰던 규칙 그대로다.
 *
 * 값 안의 역슬래시+n(예: data-typewriter 의 줄바꿈 표시)은 화면에서 줄바꿈이므로
 * 공백 한 칸으로 보고, 실제 줄바꿈·연속 공백도 하나로 접는다.
 *
 * 낱말 이음쇠(U+2060 WORD JOINER)도 걷어낸다. 좁은 화면에서 `·` 이 줄머리로 내려가는 것을
 * 막으려고 한국어 원문에 넣는 **보이지 않는 글자**인데, 사전 열쇠까지 바꾸면 번역을 못 찾는다.
 */
export function normalizeKey(text: string): string {
  return text
    .replace(/\\n/g, " ")
    .replace(/\u2060/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * 영어 문장의 곧은 아포스트로피를 활자용으로 바꾼다 (company's → company’s).
 *
 * 생성기가 하던 일이다. 원래 이유는 "JSX 에 곧은 따옴표를 그대로 쓰면 린트가 막는다" 였지만,
 * 결과적으로 **화면에 나오는 글자**가 달라진다. 실행 시점 번역으로 옮기면서 이걸 빠뜨렸더니
 * 회귀 게이트가 영어 개인정보처리방침에서 바로 잡아냈다 — 그래서 여기로 옮겨 왔다.
 */
function typographic(text: string): string {
  return text.replace(/(\w)'(\w)/g, "$1’$2");
}

const byKey: Map<string, string> = new Map(
  Object.entries(merged).map(([ko, en]) => [normalizeKey(ko), typographic(en)]),
);

/** 사전에 있으면 영어를, 없으면 undefined. 빈 문자열도 뜻이 있으므로 존재 여부로 판단한다. */
export function lookup(korean: string): string | undefined {
  return byKey.get(normalizeKey(korean));
}
