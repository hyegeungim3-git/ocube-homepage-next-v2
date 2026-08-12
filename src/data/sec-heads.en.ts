// 섹션 머리(킥커·제목·부제)의 표준형 문구 — 키는 "페이지:섹션id".
// 표준형이 아닌 섹션 머리는 각 페이지에 인라인으로 남아 있다(README 참고).
import type { RichToken } from "@/components/rich-text";

export interface SecHeadCopy {
  cls: string;
  kicker: string;
  title: readonly RichToken[];
  titleWhite?: boolean;
  titleCls?: string;
  sub?: readonly RichToken[];
  subCls?: string;
}

export const secHeads: Record<string, SecHeadCopy> = {
  "about:greeting": {
    cls: "sec-head rv",
    kicker: "CEO Greeting",
    title: ["A message from the CEO"],
    titleCls: "loc-h",
  },
  "about:value": {
    cls: "sec-head center rv",
    kicker: "Core Value",
    title: ["Core values"],
  },
  "about:ci": {
    cls: "rv",
    kicker: "Corporate Identity",
    title: ["CI"],
    titleCls: "loc-h",
  },
  "business-ax:applications": {
    cls: "reveal",
    kicker: "Applications",
    title: ["Where it applies"],
    sub: ["We connect data and AI to real industry work so that the way you operate actually changes."],
    subCls: "sec-sub",
  },
  "business-embedded:applications": {
    cls: "reveal",
    kicker: "Applications",
    title: ["Where it applies"],
    sub: ["From vehicles to industrial equipment and IoT edge devices — embedded software matched to the product environment."],
    subCls: "sec-sub",
  },
  "business-si:applications": {
    cls: "reveal",
    kicker: "Applications",
    title: ["Where it applies"],
    sub: ["From finance to enterprise, public sector, energy, smart home and mobility — work and services built as systems that stay up."],
    subCls: "sec-sub",
  },
  "license-protopie:tech": {
    cls: "sec-head rv",
    kicker: "Core Technology",
    title: ["What lets you test it as if it were built"],
  },
  "license-protopie:industry": {
    cls: "reveal",
    kicker: "Industries",
    title: ["Where ProtoPie is used"],
  },
  "license-qt:framework": {
    cls: "sec-head rv",
    kicker: "Qt Developer Framework",
    title: ["Modules and tools that take one codebase to many platforms"],
  },
  "license-qt:tools": {
    cls: "reveal",
    kicker: "Qt Development Tools",
    title: ["Development tools"],
  },
  "license-qt:partner": {
    cls: "reveal",
    kicker: "Partnership",
    title: ["OCUBE × The Qt Company"],
    sub: ["OCUBE is an official partner of The Qt Company, and in 2010 was the first in Korea to become a Nokia Qt Certified Partner."],
    subCls: "sec-sub",
  },
  "license-qt:portfolio": {
    cls: "sec-head rv",
    kicker: "Qt-based Portfolio",
    title: ["Work built on Qt"],
  },
  "license-telit:modules": {
    cls: "sec-head rv",
    kicker: "M2M Modules & Terminals",
    title: ["One family of modules, across the cellular standards"],
  },
  "license-telit:usecase": {
    cls: "reveal",
    kicker: "Applications",
    title: ["Where it applies"],
  },
  "license-toradex:som": {
    cls: "sec-head rv",
    kicker: "What is SoM?",
    title: ["What is a System on Module?"],
  },
  "license-toradex:benefits": {
    cls: "reveal",
    kicker: "Benefits",
    title: ["What a System on Module gives you"],
  },
  "license-toradex:why": {
    cls: "reveal",
    kicker: "Why Toradex",
    title: ["Why Toradex"],
    sub: ["Performance, engineering support, long-term supply and upkeep considered together — the range and support hold well past production."],
    subCls: "sec-sub",
  },
  "license-tuxera:products": {
    cls: "sec-head rv",
    kicker: "Tuxera Main Products",
    title: ["Main products"],
  },
  "license-tuxera:apply": {
    cls: "reveal",
    kicker: "Applications",
    title: ["Where it applies"],
  },
  "license-visualon:onstream": {
    cls: "sec-head rv",
    kicker: "Product Line",
    title: ["The VisualOn range"],
  },
  "license-visualon:apply": {
    cls: "reveal",
    kicker: "Applications",
    title: ["Where it applies"],
  },
  "solution-agentq:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["One request, passed between specialists, finished as a deliverable"],
    sub: ["Ask through the portal and the right agents work through documents, knowledge and data in sequence — a workflow you can run again and again."],
    subCls: "sec-sub",
  },
  "solution-agentq:proof": {
    cls: "reveal",
    kicker: "Prototype Workflows",
    title: ["Each agent takes its part, and the result comes together"],
    sub: ["The prototype shows separate capabilities chained in order, producing work a person can then review."],
    subCls: "sec-sub",
  },
  "solution-agentq:scenarios": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["Where it makes the most difference"],
    sub: ["For work where documents, data and rules are tangled together, and the output needs both evidence and control."],
    subCls: "sec-sub",
  },
  "solution-cubeon:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["Data and AI, connected to how your organisation actually acts"],
    titleWhite: true,
    sub: ["Cubeon handles it all in one place — connecting data, running AI models and agents, taking approval from the person responsible, and checking what the action produced."],
    subCls: "sec-sub",
  },
  "solution-cubeon:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["It suits organisations like these"],
    sub: ["For organisations that want scattered data and AI services brought under one operating standard — and carried through to action."],
    subCls: "sec-sub",
  },
  "solution-dataq:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["Data piled up in different formats and to different rules, brought together"],
    sub: ["QData connects what is scattered across systems and teams, and puts it in a form analysis and AI can work with."],
    subCls: "sec-sub",
  },
  "solution-dataq:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["It suits organisations like these"],
    sub: ["For organisations whose data is too scattered to start with AI at all."],
    subCls: "sec-sub",
  },
  "solution-evcp:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["Charging data, turned into steadier and leaner operation"],
    sub: ["EVCP brings together charger integration, membership, payment and monitoring, and adds AI analysis for fault response and energy management."],
    subCls: "sec-sub",
  },
  "solution-evcp:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["It suits operators like these"],
    sub: ["For operators starting out in charging, or widening what they already run."],
    subCls: "sec-sub",
  },
  "solution-factoryq:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["Not one machine — the whole plant"],
    sub: ["QFactory leaves your equipment as it is, gathers data from the processes that matter, and carries predictions through into action on the line."],
    subCls: "sec-sub",
  },
  "solution-factoryq:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["It suits plants like these"],
    sub: ["For plants dealing with the kind of drift an alarm never catches."],
    subCls: "sec-sub",
  },
  "solution-qdrive:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["Turning what the vehicles record into better operation"],
    titleWhite: true,
    sub: ["Driving and diagnostic data show risky driving — and how you are doing on cost and carbon."],
    subCls: "sec-sub",
  },
  "solution-qdrive:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["It suits operations like these"],
    sub: ["For organisations managing driving, safety, energy and carbon together."],
    subCls: "sec-sub",
  },
  "solution-traffic:overview": {
    cls: "reveal",
    kicker: "Overview",
    title: ["Cameras you already have, working as traffic and safety sensors"],
    sub: ["CCTV footage gives traffic counts by vehicle type, and potholes and incidents are detected live and passed to the control room."],
    subCls: "sec-sub",
  },
  "solution-traffic:fit": {
    cls: "reveal",
    kicker: "Ideal Use Cases",
    title: ["It suits places like these"],
    sub: ["For places that need more out of the cameras already on the poles."],
    subCls: "sec-sub",
  },
};
