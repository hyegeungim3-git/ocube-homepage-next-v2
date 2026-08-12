// 제목 + 설명만 있는 카드 그리드의 문구.
// 키는 "페이지:섹션id" 다. 예) "solution-cubeon:fit" → Cubeon 페이지의 "Where it fits".
// 아이콘·이미지·링크가 붙은 카드는 형태가 달라 페이지에 그대로 두었다.
import type { RichToken } from "@/components/rich-text";

export interface DepCardItem {
  title: readonly RichToken[];
  body: readonly RichToken[];
}

export const depCards: Record<string, readonly DepCardItem[]> = {
  "license-protopie:industry": [
    {
      title: ["Mobile and web applications"],
      body: ["Screen flow and user experience tried out before an app or web service is built"],
    },
    {
      title: ["Automotive (in-vehicle HMI)"],
      body: [
        "Prototyping interactions for infotainment systems, digital clusters and head-up displays",
      ],
    },
    {
      title: ["Smart devices (IoT and wearables)"],
      body: ["Designing and testing UX and UI for smart TVs, watches and connected home devices"],
    },
    {
      title: ["Kiosks and appliances"],
      body: [
        "Testing the experience on retail kiosks, smart fridges and other touchscreen products",
      ],
    },
  ],
  "license-telit:usecase": [
    {
      title: ["Industrial gateways"],
      body: ["Industrial gateways that carry equipment and sensor data over the cellular network"],
    },
    {
      title: ["Asset tracking"],
      body: ["Tracking and monitoring units combining GPS and GLONASS"],
    },
    {
      title: ["Vehicle telematics"],
      body: [
        "Collecting and sending vehicle data — already used in OCUBE’s embedded OCPP charging module",
      ],
    },
  ],
  "license-toradex:why": [
    {
      title: ["Built for industrial conditions"],
      body: [
        "Industrial temperature, vibration and humidity — the exact grade and approvals depend on the product",
      ],
    },
    {
      title: ["Room in the family"],
      body: ["Choosing a compatible model in the same family means less carrier board to redesign"],
    },
    {
      title: ["Lifecycle and upkeep"],
      body: [
        "Long-term supply, with a process for changes and defects — the term and scope depend on the product",
      ],
    },
    {
      title: ["Making use of the hardware"],
      body: ["Boot optimisation, GPU, cryptographic acceleration and 3D rendering, all put to use"],
    },
    {
      title: ["Development environment"],
      body: ["Board support package, GPIO, display configuration and system monitoring tools"],
    },
    {
      title: ["Engineering support"],
      body: [
        "Toradex documentation and global support, with OCUBE as first-line engineering support in Korea",
      ],
    },
  ],
  "license-tuxera:apply": [
    {
      title: ["Vehicles and automotive electronics"],
      body: [
        "Dashcams, head units and the rest — vehicle storage that loses power often, and must not lose data",
      ],
    },
    {
      title: ["Industrial equipment"],
      body: ["Flash life managed and storage kept fail-safe in harsh conditions"],
    },
    {
      title: ["Safety-critical systems"],
      body: ["Aerospace, medical and anywhere else consistency and recovery are not optional"],
    },
  ],
  "license-visualon:apply": [
    {
      title: ["In-vehicle infotainment media"],
      body: [
        "Media playback in the vehicle that has to work — and it sits right beside OCUBE’s own automotive work",
      ],
    },
    {
      title: ["OTT and streaming"],
      body: [
        "Streaming playback fitted to the supported mobile, PC, smart TV and set-top box environments",
      ],
    },
    {
      title: ["Broadcast and devices"],
      body: ["Media playback software for embedded devices such as smart TVs and set-top boxes"],
    },
  ],
  "solution-agentq:pipeline": [
    {
      title: ["Documents and rules · RAG"],
      body: [
        "Finds and combines the closest evidence across internal documents and rules, and shows ",
        {
          b: ["the source and its classification"],
        },
        "alongside it",
      ],
    },
    {
      title: ["Tables and figures · Text2SQL"],
      body: [
        "Turns the question into a database query, does the sums, and explains the result with ",
        {
          b: ["tables, charts and the conditions used"],
        },
        "",
      ],
    },
    {
      title: ["Multi-step work · Multi-agent"],
      body: [
        "OCR, address normalisation, database lookup, analysis and reporting joined up into ",
        {
          b: ["a single deliverable"],
        },
        "",
      ],
    },
  ],
  "solution-agentq:scenarios": [
    {
      title: ["Lots of documents, no two alike"],
      body: [
        "Protected files, scans and recordings that must be put in order by ",
        {
          b: ["text and speech recognition"],
        },
        "before anything can be searched, summarised or reviewed",
      ],
    },
    {
      title: ["Work that must cite the rule it rests on"],
      body: [
        "Finding the internal rule, the law or the guidance, recording the source and comparing it with the document — ",
        {
          b: ["pre-review and assessment"],
        },
        " work",
      ],
    },
    {
      title: ["Where the same queries come round again and again"],
      body: [
        "Querying databases and spreadsheets in plain language, then producing ",
        {
          b: ["statistics, outlier checks and charts"],
        },
        "on top",
      ],
    },
    {
      title: ["Multi-step work someone currently retypes"],
      body: [
        "Text recognition, address normalisation, data lookup, rule search and report writing, joined into ",
        {
          b: ["one workflow across several agents"],
        },
        "",
      ],
    },
    {
      title: ["Where the output has to be an official document"],
      body: [
        "Analysis and evidence written into the set format — report, minutes, review note — and put through ",
        {
          b: ["approval by the person responsible"],
        },
        "",
      ],
    },
    {
      title: ["Where nothing may leave, and everything must be controlled"],
      body: [
        "Running an in-house small language model and knowledge base, with permissions, classification and usage records held ",
        {
          b: ["to one consistent standard"],
        },
        "",
      ],
    },
  ],
  "solution-cubeon:operation": [
    {
      title: ["Edge"],
      body: [
        "Collected and analysed beside the equipment, keeping latency and outbound traffic to a minimum",
      ],
    },
    {
      title: ["On-Premise"],
      body: [
        "Built on your own servers, keeping sensitive data and models inside the security boundary",
      ],
    },
    {
      title: ["Hybrid"],
      body: [
        "Edge, on-premises and cloud each take a role, giving security and room to grow at once",
      ],
    },
  ],
  "solution-cubeon:fit": [
    {
      title: ["Where AI work is scattered across departments"],
      body: ["Every team runs data and models its own way, and a shared standard is overdue"],
    },
    {
      title: ["Where AI results never reach the work"],
      body: [
        "The analysis exists, but approval, follow-up and checking the outcome are not joined up",
      ],
    },
    {
      title: ["Where important calls still need a person"],
      body: ["Safety, quality, cost — work where someone must see the reasoning and sign it off"],
    },
    {
      title: ["Where data cannot leave"],
      body: [
        "Edge, on-premises or an isolated network — the rules decide where processing may happen",
      ],
    },
  ],
  "solution-dataq:fit": [
    {
      title: ["Manufacturers stuck at data preparation"],
      body: [
        "Tag schemes and units differ line by line, so every trial starts ",
        {
          b: ["from cleansing all over again"],
        },
        " — leaving no time to improve the model itself",
      ],
    },
    {
      title: ["Where the plant network and the office network are separate"],
      body: [
        "Equipment data and business system data never meet, so a quality problem cannot be traced back to the machine",
      ],
    },
    {
      title: ["Where technical documents are scattered"],
      body: [
        "Work standards, inspection logs and equipment manuals pile up as documents, and the evidence you need is slow to find",
      ],
    },
    {
      title: ["Where the network is closed or separated"],
      body: [
        "Public sector and energy settings that must build standardisation and AI on data which is never allowed to leave",
      ],
    },
  ],
  "solution-evcp:fit": [
    {
      title: ["New to the charging business"],
      body: ["Where membership, payment and monitoring all have to be built from nothing"],
    },
    {
      title: ["Running chargers from several makers"],
      body: [
        "Chargers from different makers connected over OCPP and ",
        {
          b: ["managed on one screen"],
        },
        "",
      ],
    },
    {
      title: ["Growing the business in stages"],
      body: ["Adding what is needed now, and leaving roaming for later"],
    },
    {
      title: ["Operating under your own brand"],
      body: ["Where you want to decide the screens and the pricing yourself"],
    },
  ],
  "solution-factoryq:fit": [
    {
      title: ["Lines that manage quality on threshold alarms alone"],
      body: [
        "Slow decline inside the normal range goes unnoticed, and the problem only shows up downstream",
      ],
    },
    {
      title: ["Processes that rest on an experienced eye"],
      body: ["Heat treatment and assembly, where quality shifts when the operator changes"],
    },
    {
      title: ["Continuous lines where a stop is a loss"],
      body: [
        "Round-the-clock plants that can only schedule maintenance if they know when it will fail",
      ],
    },
    {
      title: ["Plants where energy is a large part of the cost"],
      body: [
        "Where the savings only appear when equipment, process and energy are looked at together",
      ],
    },
  ],
  "solution-qdrive:fit": [
    {
      title: ["Public transport, shuttles and MaaS"],
      body: [
        "Where many vehicles must be tracked, and safety and service quality managed alongside",
      ],
    },
    {
      title: ["Logistics, delivery and field service"],
      body: [
        "Fleets that must cover more ground while spending less on fuel, accidents and repairs",
      ],
    },
    {
      title: ["Rental, car sharing and company fleets"],
      body: [
        "Where vehicle condition and usage history need standardising, and safety, maintenance and reporting need structure",
      ],
    },
    {
      title: ["EV fleets and charging infrastructure"],
      body: [
        "Where battery and charge state must feed the schedule, and energy cost and carbon reduction have to be managed",
      ],
    },
  ],
  "solution-traffic:fit": [
    {
      title: ["Control rooms where someone must keep watching"],
      body: ["Too many screens to follow live, so footage only gets checked after the event"],
    },
    {
      title: ["Where traffic surveys are done by hand"],
      body: ["Roads and junctions where the people and the weeks it takes are the problem"],
    },
    {
      title: ["Where road inspection depends on patrols"],
      body: ["Potholes and cracks that ought to be found before anyone reports them"],
    },
    {
      title: ["Where image data protection matters"],
      body: [
        "The original footage never leaves, and ",
        {
          b: ["personal data is masked where it is filmed"],
        },
        "",
      ],
    },
  ],
};
