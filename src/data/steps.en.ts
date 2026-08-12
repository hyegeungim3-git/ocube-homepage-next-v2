// What We Do 단계 카드(.pin-item)의 문구와 일러스트.
// 키는 "페이지:섹션id" 다. 예) "business-ax:whatwedo".
// 형태가 섞인 목록(solution-cubeon #arch)은 페이지에 그대로 두었다.
import type { RichToken } from "@/components/rich-text";

export interface PinStep {
  no: string;
  slot: string;
  image: { src: string; alt: string; width: string; height: string };
  title: string;
  body: readonly RichToken[];
  bullets: readonly (readonly RichToken[])[];
}

export const pinSteps: Record<string, readonly PinStep[]> = {
  "business-ax:whatwedo": [
    {
      "no": "01",
      "slot": "ax1",
      "image": {
        "src": "assets/img/business/steps/ax-01-opportunity-data-v3.webp",
        "alt": "설비와 업무 시스템 데이터를 진단해 AI 적용 기회를 선별하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Finding the opportunity · Checking the data",
      "body": [
        "We pick the work where AI pays off most, then check whether the data to train it actually exists."
      ],
      "bullets": [
        [
          {
            "b": [
              "Choosing candidates"
            ]
          },
          " Work heavy with repeated decisions and waiting, ranked by expected gain and difficulty"
        ],
        [
          {
            "b": [
              "Data check"
            ]
          },
          " Judging trainability from the quality and labelling of equipment and business system data"
        ],
        [
          {
            "b": [
              "Data collection"
            ]
          },
          " Equipment connected over industrial protocols (OPC-UA, Modbus, MQTT), operating data organised"
        ]
      ]
    },
    {
      "no": "02",
      "slot": "ax2",
      "image": {
        "src": "assets/img/business/steps/ax-02-knowledge-standardization-v3.webp",
        "alt": "흩어진 데이터를 표준화해 의미 기반 검색과 데이터 관계로 연결하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Standardising data · Turning it into knowledge",
      "body": [
        "Equipment, document and event data are organised under one shared meaning, forming a knowledge base that models and agents both draw on."
      ],
      "bullets": [
        [
          {
            "b": [
              "One data format"
            ]
          },
          " Equipment names and codes unified, relationships defined through industry terms and an ontology"
        ],
        [
          {
            "b": [
              "Documents and images linked"
            ]
          },
          " Documents, drawings and images searched by meaning, with their data relationships visible"
        ],
        [
          {
            "b": [
              "A shared vocabulary"
            ]
          },
          " Time-series, events and text tied together so models and agents read the same thing"
        ]
      ]
    },
    {
      "no": "03",
      "slot": "ax3",
      "image": {
        "src": "assets/img/business/steps/ax-03-model-training-v3.webp",
        "alt": "시계열과 문서 데이터에 적합한 AI 모델을 학습하고 비교하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Modelling · Training",
      "body": [
        "We compare models against the task, the security rules and the operating conditions, choosing a setup that weighs accuracy against the cost of false alarms."
      ],
      "bullets": [
        [
          {
            "b": [
              "Model per task"
            ]
          },
          " Time-series models for anomaly detection, predictive maintenance and forecasting; generative AI with RAG for documents"
        ],
        [
          {
            "b": [
              "Combining models"
            ]
          },
          " An in-house small language model (sLLM) and a commercial LLM API, combined to fit the security requirements"
        ],
        [
          {
            "b": [
              "How we choose"
            ]
          },
          " Experiment tracking and cross-validation, plus what a false alarm actually costs that team"
        ]
      ]
    },
    {
      "no": "04",
      "slot": "ax4",
      "image": {
        "src": "assets/img/business/steps/ax-04-hitl-poc-v3.webp",
        "alt": "운영 데이터로 AI 판단을 검증하고 승인 결과를 다시 학습하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Field validation · Human check",
      "body": [
        {
          "b": [
            "Field validation"
          ]
        },
        "proves the gain, and ",
        {
          "b": [
            "human review and approval"
          ]
        },
        "then sets how far it runs on its own."
      ],
      "bullets": [
        [
          {
            "b": [
              "Measuring the effect"
            ]
          },
          " Before and after compared on the same basis, using real operating data (PoC)"
        ],
        [
          {
            "b": [
              "Human in the loop"
            ]
          },
          " The reasoning behind each judgement is checked; unclear cases feed the next round of training"
        ],
        [
          {
            "b": [
              "Agreeing the thresholds"
            ]
          },
          " Alarm levels and autonomy are tuned with the owning team, weighing false alarms against missed ones"
        ]
      ]
    },
    {
      "no": "05",
      "slot": "ax5",
      "image": {
        "src": "assets/img/business/steps/ax-05-agent-integration-v3.webp",
        "alt": "AI 에이전트가 업무 시스템과 설비를 연결해 승인된 작업을 실행하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "AI agents · Connecting the systems",
      "body": [
        "AI is wired into MES, ERP and the equipment itself, so that analysis flows through to reporting, approval and action."
      ],
      "bullets": [
        [
          {
            "b": [
              "Into the work"
            ]
          },
          " Queries, analysis and reporting through a natural-language agent; equipment faults follow detect → propose → approve → act → confirm"
        ],
        [
          {
            "b": [
              "Choosing how to deploy"
            ]
          },
          " Cloud, on-premises or air-gapped — whichever the security requirements call for"
        ],
        [
          {
            "b": [
              "System integration"
            ]
          },
          " Connected to MES and ERP by API so it works inside the existing flow"
        ]
      ]
    },
    {
      "no": "06",
      "slot": "ax6",
      "image": {
        "src": "assets/img/business/steps/ax-06-mlops-cycle-v3.webp",
        "alt": "모델 성능을 감시하고 재학습·배포·되돌리기를 수행하는 AI 모델 운영 순환",
        "width": "1600",
        "height": "900"
      },
      "title": "Operating · Keeping it learning",
      "body": [
        "We keep watching how the model behaves, and when accuracy slips we retrain and redeploy."
      ],
      "bullets": [
        [
          {
            "b": [
              "Watching data and accuracy"
            ]
          },
          " Shifts in input data and model accuracy are tracked, signalling when to retrain"
        ],
        [
          {
            "b": [
              "Versions and rollback"
            ]
          },
          " Model versions and deployment history are kept, so a proven earlier version can be restored if something goes wrong"
        ],
        [
          {
            "b": [
              "Continuous improvement"
            ]
          },
          " User feedback and new data go back into training, and accuracy is verified again"
        ]
      ]
    }
  ],
  "business-embedded:whatwedo": [
    {
      "no": "01",
      "slot": "em1",
      "image": {
        "src": "assets/img/business/steps/embedded-01-vmodel-v3.webp",
        "alt": "요구사항에서 검증까지 추적 가능한 임베디드 시스템 V 모델 설계",
        "width": "1600",
        "height": "900"
      },
      "title": "Requirements · System design",
      "body": [
        "Functional and safety requirements and hardware limits are fixed as design and verification criteria, cutting rework later in mass production."
      ],
      "bullets": [
        [
          {
            "b": [
              "Separating requirements"
            ]
          },
          " Functional and safety requirements (HARA, ASIL) defined separately and kept traceable"
        ],
        [
          {
            "b": [
              "Designing to the limits"
            ]
          },
          " A software architecture that accounts for memory, power and heat, with a step-by-step verification plan"
        ],
        [
          {
            "b": [
              "Choosing the standard"
            ]
          },
          " Whether to use AUTOSAR Classic or Adaptive, decided by what the project needs"
        ]
      ]
    },
    {
      "no": "02",
      "slot": "em2",
      "image": {
        "src": "assets/img/business/steps/embedded-02-board-bringup-v3.webp",
        "alt": "타깃 보드의 부팅 계층과 주변 장치를 순차적으로 포팅하고 검증하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Board bring-up · Board support package (BSP)",
      "body": [
        "We bring up the bootloader, kernel and drivers on the target board, and secure a BSP build environment anyone can reproduce."
      ],
      "bullets": [
        [
          {
            "b": [
              "Board porting"
            ]
          },
          " Bootloader, kernel and drivers brought onto the target board, peripherals verified one by one"
        ],
        [
          {
            "b": [
              "A reproducible build"
            ]
          },
          " A Yocto-based BSP so anyone building it gets the same result"
        ],
        [
          {
            "b": [
              "Early numbers"
            ]
          },
          " Boot time and memory use measured early, setting mass-production targets from the start"
        ]
      ]
    },
    {
      "no": "03",
      "slot": "em3",
      "image": {
        "src": "assets/img/business/steps/embedded-03-os-platform-v3.webp",
        "alt": "차량용 운영체제의 안전 영역과 서비스 영역을 분리하고 복구 체계를 구성한 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Operating system · Platform",
      "body": [
        "The OS, its isolation and its recovery path are shaped around real-time needs, the app ecosystem and update requirements."
      ],
      "bullets": [
        [
          {
            "b": [
              "Choosing the OS"
            ]
          },
          " QNX or an RTOS where timing is critical; Linux or Android Automotive (AAOS) where an app ecosystem matters"
        ],
        [
          {
            "b": [
              "Separating domains"
            ]
          },
          " Safety functions kept apart from infotainment, using containers or a hypervisor"
        ],
        [
          {
            "b": [
              "Built for OTA"
            ]
          },
          " A/B partitions with automatic recovery if an update fails"
        ]
      ]
    },
    {
      "no": "04",
      "slot": "em4",
      "image": {
        "src": "assets/img/business/steps/embedded-04-hmi-middleware-v3.webp",
        "alt": "차량 HMI와 미들웨어가 센서와 도메인 서비스를 연결하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Vehicle HMI · Middleware",
      "body": [
        "The vehicle display and the sensor and service communication are developed together, giving a consistent experience and a steady flow of data."
      ],
      "bullets": [
        [
          {
            "b": [
              "Vehicle display (HMI)"
            ]
          },
          " Qt and QML screens built to keep frame drops to a minimum"
        ],
        [
          {
            "b": [
              "In-vehicle networks"
            ]
          },
          " Middleware for service communication (SOME/IP), the control network (CAN) and automotive Ethernet — developed and integrated"
        ],
        [
          {
            "b": [
              "Domain applications"
            ]
          },
          " Navigation, media, climate and other service-layer functions"
        ]
      ]
    },
    {
      "no": "05",
      "slot": "em5",
      "image": {
        "src": "assets/img/business/steps/embedded-05-hil-safety-v3.webp",
        "alt": "HIL 시뮬레이션과 보안 검증으로 차량 소프트웨어를 통합 시험하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Integration testing · Functional safety",
      "body": [
        "Requirements, functional safety and security verified through hardware-in-the-loop, real vehicles and static analysis — catching regressions early."
      ],
      "bullets": [
        [
          {
            "b": [
              "Coverage"
            ]
          },
          " Requirements confirmed through hardware-in-the-loop and real-vehicle testing"
        ],
        [
          {
            "b": [
              "Standards followed"
            ]
          },
          " ISO 26262 functional safety · ISO/SAE 21434 cybersecurity (TARA)"
        ],
        [
          {
            "b": [
              "Blocking regressions"
            ]
          },
          " MISRA C static analysis and unit and integration tests wired into CI"
        ]
      ]
    },
    {
      "no": "06",
      "slot": "em6",
      "image": {
        "src": "assets/img/business/steps/embedded-06-production-optimization-v3.webp",
        "alt": "임베디드 소프트웨어를 최적화하고 양산 라인에서 검사하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Optimisation · Mass production",
      "body": [
        "Boot time, response and memory are brought to target, and flashing, inspection and update are connected to the production line."
      ],
      "bullets": [
        [
          {
            "b": [
              "Meeting the targets"
            ]
          },
          " Boot time, response latency and memory profiling"
        ],
        [
          {
            "b": [
              "On the production line"
            ]
          },
          " Flashing and inspection, with UDS diagnostics support"
        ],
        [
          {
            "b": [
              "Regulation and upkeep"
            ]
          },
          " Meeting UN R156 for software updates, and putting the after-production process in place"
        ]
      ]
    }
  ],
  "business-si:whatwedo": [
    {
      "no": "01",
      "slot": "si1",
      "image": {
        "src": "assets/img/business/steps/si-01-discovery-planning-v3.webp",
        "alt": "현행 업무 흐름의 병목을 분석해 요구사항과 구축 계획으로 정리하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Requirements · Business analysis",
      "body": [
        "We start by looking at how the work actually flows and where it stalls, then write functional, performance and security requirements as things that can be measured."
      ],
      "bullets": [
        [
          {
            "b": [
              "How the work runs today"
            ]
          },
          " Interviews with the people doing the work, documenting the flow, the bottlenecks and the exceptions"
        ],
        [
          {
            "b": [
              "Requirements you can measure"
            ]
          },
          " Functional requirements alongside non-functional ones — performance, security, availability"
        ],
        [
          {
            "b": [
              "Schedule and risk"
            ]
          },
          " Managed openly through a work breakdown and milestones"
        ]
      ]
    },
    {
      "no": "02",
      "slot": "si2",
      "image": {
        "src": "assets/img/business/steps/si-02-architecture-ux-v3.webp",
        "alt": "확장 가능한 시스템 아키텍처와 반응형 사용자 경험을 함께 설계한 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Architecture · UX design",
      "body": [
        "We settle on a structure that scales to the expected traffic and data volume, and check the real screen flow before development starts."
      ],
      "bullets": [
        [
          {
            "b": [
              "Choosing the structure"
            ]
          },
          " Monolith or microservices, decided by traffic and data volume"
        ],
        [
          {
            "b": [
              "Checking it first"
            ]
          },
          " Information architecture, wireframes and prototypes confirm the screen flow before any code"
        ],
        [
          {
            "b": [
              "Accessibility and responsive layout"
            ]
          },
          " Web accessibility guidelines (KWCAG) and responsive layout built in from the design stage"
        ]
      ]
    },
    {
      "no": "03",
      "slot": "si3",
      "image": {
        "src": "assets/img/business/steps/si-03-data-system-design-v3.webp",
        "alt": "기존 시스템 데이터를 표준화하고 연동·백업·재해복구 구조로 설계한 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Data · System design",
      "body": [
        "Data structures, APIs and the rules for migration, backup and disaster recovery are decided together, so systems stay consistent and can be brought back."
      ],
      "bullets": [
        [
          {
            "b": [
              "Data standards"
            ]
          },
          " A standardised ERD and data dictionary, with a plan for migrating existing data"
        ],
        [
          {
            "b": [
              "Fixing the interfaces"
            ]
          },
          " How existing and external systems connect, written down as API specifications"
        ],
        [
          {
            "b": [
              "Designing for availability"
            ]
          },
          " Backup, redundancy and disaster recovery built into the architecture"
        ]
      ]
    },
    {
      "no": "04",
      "slot": "si4",
      "image": {
        "src": "assets/img/business/steps/si-04-development-integration-v3.webp",
        "alt": "코드 리뷰와 자동 테스트를 거쳐 시스템을 지속적으로 통합하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Development · Integration",
      "body": [
        "Quality is held through code review, automated tests and CI/CD, and progress is shown each cycle as something that actually works."
      ],
      "bullets": [
        [
          {
            "b": [
              "Quality built in"
            ]
          },
          " Coding standards, code review and static analysis applied in continuous integration"
        ],
        [
          {
            "b": [
              "Automated testing"
            ]
          },
          " Unit and integration tests catch regressions early"
        ],
        [
          {
            "b": [
              "A demo each cycle"
            ]
          },
          " Direction agreed with the business by looking at something that runs"
        ]
      ]
    },
    {
      "no": "05",
      "slot": "si5",
      "image": {
        "src": "assets/img/business/steps/si-05-quality-security-v3.webp",
        "alt": "부하·보안·사용자 수용 기준으로 시스템 품질을 검증하는 모습",
        "width": "1600",
        "height": "900"
      },
      "title": "Quality · Security verification",
      "body": [
        "Performance, security and user acceptance are tested against real scenarios, and the conditions for go-live are fixed."
      ],
      "bullets": [
        [
          {
            "b": [
              "Proving performance"
            ]
          },
          " Scenario and load testing confirm response time and concurrency targets"
        ],
        [
          {
            "b": [
              "Security review"
            ]
          },
          " Vulnerabilities checked against the OWASP Top 10, and fixed"
        ],
        [
          {
            "b": [
              "Go-live criteria"
            ]
          },
          " User acceptance testing secures sign-off from the business"
        ]
      ]
    },
    {
      "no": "06",
      "slot": "si6",
      "image": {
        "src": "assets/img/business/steps/si-06-cutover-operations-v3.webp",
        "alt": "중단 위험을 낮춘 시스템 이행과 되돌리기 계획, 운영 모니터링 및 지속 개선 체계",
        "width": "1600",
        "height": "900"
      },
      "title": "Cutover · Operation · Service levels",
      "body": [
        "A rehearsed cutover and a rollback plan lower the risk of go-live, while monitoring, service level targets and an improvement backlog keep operations in good shape."
      ],
      "bullets": [
        [
          {
            "b": [
              "Keeping downtime short"
            ]
          },
          " A rehearsed data migration and a rollback plan keep the risk of downtime low"
        ],
        [
          {
            "b": [
              "How it is run"
            ]
          },
          " Monitoring and alerts, with an incident procedure tied to service level targets"
        ],
        [
          {
            "b": [
              "Improving over time"
            ]
          },
          " Operating data decides what to improve, and it is delivered in priority order"
        ]
      ]
    }
  ]
};
