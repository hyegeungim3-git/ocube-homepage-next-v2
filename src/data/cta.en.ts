// 푸터 CTA 밴드의 페이지별 문구 — 템플릿(배지·버튼 위치)은 FctaTop 컴포넌트가 가진다.
import type { RichToken } from "@/components/rich-text";

export interface CtaCopy {
  kicker: string;
  heading: readonly RichToken[];
  lead: readonly RichToken[];
  button: string;
  badgeLabel: string;
}

export const ctaCopy: Record<string, CtaCopy> = {
  "business-ax": {
    kicker: "CONTACT",
    heading: ["We start by diagnosing where AI fits and whether your data is ready"],
    lead: ["Working from your goals and the data you already hold, we agree together on what to tackle first, how to verify it, and how far to integrate."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
  "business-embedded": {
    kicker: "CONTACT",
    heading: ["We review the technology from development to mass production"],
    lead: ["Matching your development environment, key features and security requirements, we provide what is needed from development through verification to mass production."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
  "business-si": {
    kicker: "CONTACT",
    heading: ["We work out together which systems you need, and how far the build should go"],
    lead: ["Starting from the work, the users, the systems to connect and the schedule, we shape both the systems and the processes — from build through to operation."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
  "license-protopie": {
    kicker: "CONTACT",
    heading: ["We build an environment where ideas are tested like real products"],
    lead: ["From licensing through team training, technical support and design system integration, we set up an efficient prototyping environment."],
    button: "Talk to us about adoption",
    badgeLabel: "Contact us",
  },
  "license-qt": {
    kicker: "CONTACT",
    heading: ["We work through the product screens you want to build with Qt"],
    lead: ["From licensing through OS porting, HMI development and developer training, we support product development on Qt."],
    button: "Talk to us about Qt",
    badgeLabel: "Contact us",
  },
  "license-telit": {
    kicker: "CONTACT",
    heading: ["We design the connectivity your product will run on"],
    lead: ["We select the module that fits your product and network, and support everything commercialisation needs — from antenna design to carrier certification."],
    button: "Talk to us about modules",
    badgeLabel: "Contact us",
  },
  "license-toradex": {
    kicker: "CONTACT",
    heading: ["We shorten the development time of your embedded product"],
    lead: ["We select the system on module that fits your performance and production needs, and support carrier board design and OS bring-up."],
    button: "Talk to us about SoM",
    badgeLabel: "Contact us",
  },
  "license-tuxera": {
    kicker: "CONTACT",
    heading: ["We design how your data is stored safely"],
    lead: ["We apply the file system that fits your OS and storage, then verify behaviour under power loss and read and write performance."],
    button: "Talk to us about the product",
    badgeLabel: "Contact us",
  },
  "license-visualon": {
    kicker: "CONTACT",
    heading: ["We keep playback quality steady in any environment"],
    lead: ["We apply the SDK and codecs that match your media formats and target devices, then improve playback quality and performance."],
    button: "Talk to us about the product",
    badgeLabel: "Contact us",
  },
  "solution-agentq": {
    kicker: "CONTACT",
    heading: ["We work out which repetitive task to automate first"],
    lead: ["Working from your current workflow, data and existing systems, we set out where an AI agent fits and how it will be verified."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
  "solution-cubeon": {
    kicker: "CONTACT",
    heading: ["We design how AI will actually be operated on site"],
    lead: ["From detection and alerts through operator review and action to automating the tasks that have proven out, we roll it out step by step to fit your site."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
  "solution-dataq": {
    kicker: "CONTACT",
    heading: ["We find the way to connect data that sits apart"],
    lead: ["We integrate and standardise data from the floor and your business systems, building a foundation that analysis and AI can use."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
  "solution-evcp": {
    kicker: "CONTACT",
    heading: ["We design the platform your charging service needs"],
    lead: ["We support the build and system integration of your charging service, sized to your business, your operating model and the infrastructure you already have."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
  "solution-factoryq": {
    kicker: "CONTACT",
    heading: ["We find the process problems your site data can improve"],
    lead: ["From your data and improvement goals, we verify what detection and process improvement can deliver, then agree the scope."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
  "solution-qdrive": {
    kicker: "CONTACT",
    heading: ["We improve mobility operations with vehicle data"],
    lead: ["Working from driving and vehicle condition data, we roll out what safe driving, running cost and carbon management need, step by step."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
  "solution-traffic": {
    kicker: "CONTACT",
    heading: ["We define the hazards to watch for and the rules to act on"],
    lead: ["We design what to detect, how to alert and how far to integrate with your control room, to suit the cameras on your roads and facilities."],
    button: "Contact us",
    badgeLabel: "Contact us",
  },
};
