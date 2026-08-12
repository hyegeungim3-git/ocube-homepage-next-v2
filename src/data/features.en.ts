// 라벨 + 설명으로 된 항목 목록(.feat-list)의 문구.
// 키는 "페이지:섹션id" 다. 예) "solution-cubeon:overview".
// 제목이 h3 인 목록과 번호가 붙은 목록은 형태가 달라 페이지에 그대로 두었다.
import type { RichToken } from "@/components/rich-text";

export interface FeatItem {
  label: readonly RichToken[];
  body: readonly RichToken[];
}

export const featLists: Record<string, readonly FeatItem[]> = {
  "solution-agentq:overview": [
    {
      "label": [
        "A hub of specialist agents"
      ],
      "body": [
        "Knowledge search, OCR, database queries, analysis, translation, reports, policy review — each in one place"
      ]
    },
    {
      "label": [
        "Orchestration across agents"
      ],
      "body": [
        "Each step’s result passes to the next agent, carrying multi-stage work through to the end"
      ]
    },
    {
      "label": [
        "Evidence and security throughout"
      ],
      "body": [
        "DRM and OCR preparation, cited sources, permissions and classification, and a final check — all part of the flow"
      ]
    },
    {
      "label": [
        "Something you can review"
      ],
      "body": [
        "Not just an answer — reports, minutes, review notes and analyses you actually use"
      ]
    }
  ],
  "solution-agentq:pipeline": [
    {
      "label": [
        "Results passed on automatically"
      ],
      "body": [
        "OCR, lookups and analysis from the previous step carry forward — nothing is typed in twice"
      ]
    },
    {
      "label": [
        "Permissions held throughout"
      ],
      "body": [
        "What you may see, and how each document is classified, applies from the first search to the final output"
      ]
    }
  ],
  "solution-cubeon:overview": [
    {
      "label": [
        "Connecting data and systems"
      ],
      "body": [
        "Equipment and sensors, business systems, documents and video — different kinds of data connected in one standard way"
      ]
    },
    {
      "label": [
        "A shared vocabulary"
      ],
      "body": [
        "Different names and formats reconciled under shared terms and relationships, so context and meaning line up"
      ]
    },
    {
      "label": [
        "Running models and agents"
      ],
      "body": [
        "Training, deployment, performance and permissions for analytic models and specialist agents, held to one standard"
      ]
    },
    {
      "label": [
        "Approval, execution, verification"
      ],
      "body": [
        "The person responsible reviews the reasoning, approves, acts — and the outcome and its history are checked again"
      ]
    }
  ],
  "solution-dataq:overview": [
    {
      "label": [
        "Collection and integration"
      ],
      "body": [
        "PLC, sensors, MES and ERP connected, with differing protocols and formats turned into one common input"
      ]
    },
    {
      "label": [
        "Format and meaning standardised"
      ],
      "body": [
        "Names, units and relationships that differ by machine, brought to one standard"
      ]
    },
    {
      "label": [
        "Building AI-ready data"
      ],
      "body": [
        "Shaped for document retrieval (RAG, CAG), data querying (TAG) and predictive models"
      ]
    },
    {
      "label": [
        "Analysis and services"
      ],
      "body": [
        "Dashboards and live queries, ready for QFactory and AgentQ to use"
      ]
    }
  ],
  "solution-dataq:standards": [
    {
      "label": [
        "Interoperability standards"
      ],
      "body": [
        "OPC-UA and ISA-95 as reference, unifying mixed equipment data into a standard layer"
      ]
    },
    {
      "label": [
        "Data governance"
      ],
      "body": [
        "Catalogue, lineage and quality rules keep origin and trustworthiness traceable"
      ]
    },
    {
      "label": [
        "Fine-grained access control"
      ],
      "body": [
        "Permissions down to the data and the query, with audit logs — for regulated industries and data sovereignty"
      ]
    },
    {
      "label": [
        "Industrial interoperability"
      ],
      "body": [
        "Equipment data aligned in meaning with international standard models"
      ]
    },
    {
      "label": [
        "Quality and validation rules"
      ],
      "body": [
        "Gaps, anomalies and duplicates checked by shared rules, so later analysis and AI results can be trusted"
      ]
    },
    {
      "label": [
        "An open catalogue"
      ],
      "body": [
        "Data assets listed, so the whole organisation can reuse them"
      ]
    }
  ],
  "solution-evcp:overview": [
    {
      "label": [
        "Managing every charger"
      ],
      "body": [
        "Chargers from different makers connected over OCPP, with status and settings managed remotely"
      ]
    },
    {
      "label": [
        "Predicting faults"
      ],
      "body": [
        "Charging state and error history are read to find likely failures early, and to say what to inspect first"
      ]
    },
    {
      "label": [
        "Membership, payment, settlement"
      ],
      "body": [
        "Members, bookings, payment methods, usage records and settlement — all handled in one place"
      ]
    },
    {
      "label": [
        "Demand and energy"
      ],
      "body": [
        "Usage patterns by time and place, and energy consumption, inform planning, pricing and load management"
      ]
    }
  ],
  "solution-factoryq:overview": [
    {
      "label": [
        "Plant data, unified"
      ],
      "body": [
        "Equipment, process and quality data joined, so the state of the whole plant is visible in one place"
      ]
    },
    {
      "label": [
        "Live monitoring and anomaly detection"
      ],
      "body": [
        "Equipment and flow watched continuously, so departures from normal surface early — with likely causes"
      ]
    },
    {
      "label": [
        "Predictive maintenance and quality"
      ],
      "body": [
        "Failure likelihood, remaining useful life and quality drift predicted, pointing to when to inspect and what to do"
      ]
    },
    {
      "label": [
        "Production and energy optimisation"
      ],
      "body": [
        "Process conditions and energy use analysed, with operating settings recommended for better output and efficiency"
      ]
    }
  ],
  "solution-qdrive:overview": [
    {
      "label": [
        "Collecting vehicle data"
      ],
      "body": [
        "Tachograph records and diagnostic signals gathered, and vehicle and trip state put into one common format"
      ]
    },
    {
      "label": [
        "Driving and safety analysis"
      ],
      "body": [
        "Speed, harsh acceleration and hard braking are read to find risky driving and where it can improve"
      ]
    },
    {
      "label": [
        "Energy and charging"
      ],
      "body": [
        "Battery and energy use are watched, and charging and discharging schedules tuned"
      ]
    },
    {
      "label": [
        "Carbon management"
      ],
      "body": [
        "Distance and energy data give the emissions figure — and the reduction achieved"
      ]
    }
  ],
  "solution-traffic:overview": [
    {
      "label": [
        "Recognising what is there"
      ],
      "body": [
        "Vehicles, pedestrians and two-wheelers told apart automatically, and their movement followed"
      ]
    },
    {
      "label": [
        "Traffic flow"
      ],
      "body": [
        "Counts by vehicle type, congestion and changes in speed, hour by hour"
      ]
    },
    {
      "label": [
        "Spotting danger"
      ],
      "body": [
        "Wrong-way driving, stopped vehicles, potholes and unsafe behaviour — caught before they become accidents"
      ]
    },
    {
      "label": [
        "Into the control room"
      ],
      "body": [
        "Events reach the control screen and the person on duty, and end up in statistics and reports"
      ]
    }
  ],
  "solution-traffic:detect": [
    {
      "label": [
        "Designed against false alarms"
      ],
      "body": [
        "Confidence score, consecutive frames and human review before it is confirmed"
      ]
    },
    {
      "label": [
        "Night and bad weather"
      ],
      "body": [
        "Detection in low light, backlight and rain, corrected with real operating data"
      ]
    },
    {
      "label": [
        "Protecting personal image data"
      ],
      "body": [
        "Blurring, separated access rights and retention limits keep it within the rules"
      ]
    }
  ]
};
