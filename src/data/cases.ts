// 구축 사례 카드(.bcase-card)의 문구와 이미지.
// projectCards 키는 "페이지:섹션id" (예: "business-ax:projects").
// homeCases 는 홈 마퀴용 4건 — 원본은 무한 스크롤을 위해 같은 행을 두 번 쓰지만
// 여기서는 한 번만 적고 컴포넌트가 복제한다.
import type { RichToken } from "@/components/rich-text";

export interface BcaseItem {
  image: { src: string; alt: string; width: string; height: string };
  cat: string;
  title: readonly RichToken[];
  sum: readonly RichToken[];
  bullets: readonly (readonly RichToken[])[];
}

export interface HomeCase extends BcaseItem {
  href: string;
  ariaLabel: string;
}

export const projectCards: Record<string, readonly BcaseItem[]> = {
  "business-ax:projects": [
    {
      "image": {
        "src": "assets/img/case/factory-insight.jpg",
        "alt": "Factory Insight AI 화면 예시",
        "width": "900",
        "height": "506"
      },
      "cat": "ROBOT MANUFACTURING",
      "title": [
        "Factory Insight AI"
      ],
      "sum": [
        "스크류 체결·",
        "wbr",
        "흡착 이동 로봇의 이상 조기감지 — 원인과 조치 방안은 대화로 확인"
      ],
      "bullets": [
        [
          "LSTM Autoencoder"
        ],
        [
          "LLM Assistant"
        ],
        [
          "LightGBM"
        ]
      ]
    },
    {
      "image": {
        "src": "assets/img/case/smart-optimizer.jpg",
        "alt": "AI Smart Optimizer 화면 예시",
        "width": "900",
        "height": "502"
      },
      "cat": "PROCESS OPTIMIZATION",
      "title": [
        "AI Smart Optimizer"
      ],
      "sum": [
        "열처리 설비의 이상 감지와 열질량 추정 — 제조 조건까지 함께 권고"
      ],
      "bullets": [
        [
          "XGBoost"
        ],
        [
          "Transformer"
        ],
        [
          "Edge Gateway"
        ]
      ]
    },
    {
      "image": {
        "src": "assets/img/case/paper-process-ai.jpg",
        "alt": "제지 공정 AI 자율운영 화면 예시",
        "width": "900",
        "height": "506"
      },
      "cat": "AUTONOMOUS OPERATION",
      "title": [
        "제지 공정 AI-OT 자율운영"
      ],
      "sum": [
        "제지 공정의 설비·",
        "wbr",
        "에너지·",
        "wbr",
        "품질·",
        "wbr",
        "안전 상태를 하나로 연결한 자율운영 플랫폼"
      ],
      "bullets": [
        [
          "AI-OT"
        ],
        [
          "Predictive Maintenance"
        ],
        [
          "MLOps"
        ]
      ]
    }
  ],
  "business-embedded:projects": [
    {
      "image": {
        "src": "assets/img/business/steps/embedded-03-os-platform-v3.webp",
        "alt": "차량 제어기 소프트웨어 업데이트 일러스트",
        "width": "900",
        "height": "506"
      },
      "cat": "SDV / OTA UPDATE",
      "title": [
        "현대차 유무선 업데이트 개발·",
        "wbr",
        "검증"
      ],
      "sum": [
        "엣지디바이스 OTA 솔루션"
      ],
      "bullets": [
        [
          "DCU · CCU"
        ],
        [
          "IVI"
        ],
        [
          "AMP · HUD · DSM"
        ],
        [
          "Edge Device"
        ]
      ]
    },
    {
      "image": {
        "src": "assets/img/business/steps/embedded-04-hmi-middleware-v3.webp",
        "alt": "차량 화면·미들웨어 일러스트",
        "width": "900",
        "height": "506"
      },
      "cat": "AUTOMOTIVE",
      "title": [
        "AUTOSAR(Mobilgene) 개발"
      ],
      "sum": [
        "ASPICE 프로세스 준수"
      ],
      "bullets": [
        [
          "AAOS · Linux · QNX"
        ],
        [
          "CarPlay · AndroidAuto 개발·인증"
        ],
        [
          "Connectivity (Telematics · BT · WiFi)"
        ]
      ]
    },
    {
      "image": {
        "src": "assets/img/business/steps/embedded-05-hil-safety-v3.webp",
        "alt": "차량 사이버보안 위협 분석 일러스트",
        "width": "900",
        "height": "506"
      },
      "cat": "CYBER SECURITY",
      "title": [
        "Global OEM Connected Service"
      ],
      "sum": [
        "CSMS / TARA 대응"
      ],
      "bullets": [
        [
          "ISO/SAE 21434 & R155"
        ],
        [
          "CSMS · TARA 산출 및 인증"
        ],
        [
          "Crypto · Secure Lib · HSM 개발"
        ]
      ]
    }
  ],
  "business-si:projects": [
    {
      "image": {
        "src": "assets/img/business/steps/si-04-development-integration-v3.webp",
        "alt": "금융 시스템 개발·통합 일러스트",
        "width": "900",
        "height": "506"
      },
      "cat": "FINANCIAL SERVICE",
      "title": [
        "통합 금융 SI · 그룹 소통앱"
      ],
      "sum": [
        "계열 금융 앱·",
        "wbr",
        "모바일 서비스 구축과 고도화 — 다년간 운영·",
        "wbr",
        "확장"
      ],
      "bullets": [
        [
          "HCE 선불카드"
        ],
        [
          "그룹 소통앱"
        ],
        [
          "홈페이지 고도화"
        ]
      ]
    },
    {
      "image": {
        "src": "assets/img/business/steps/si-02-architecture-ux-v3.webp",
        "alt": "아키텍처·UX 설계 일러스트",
        "width": "900",
        "height": "506"
      },
      "cat": "HOME AIoT PLATFORM",
      "title": [
        "ThinQ 홈 AIoT · webOS · 기업용 클라우드"
      ],
      "sum": [
        "홈 AIoT 커넥티드 서비스·",
        "wbr",
        "webOS 앱·",
        "wbr",
        "기업용 클라우드 설계·",
        "wbr",
        "구축"
      ],
      "bullets": [
        [
          "ThinQ 앱"
        ],
        [
          "webOS 앱"
        ],
        [
          "Pro:Centric · SuperSign"
        ]
      ]
    },
    {
      "image": {
        "src": "assets/img/business/steps/si-06-cutover-operations-v3.webp",
        "alt": "이행·운영 일러스트",
        "width": "900",
        "height": "506"
      },
      "cat": "ENERGY INFRA",
      "title": [
        "EV 충전 플랫폼 구축"
      ],
      "sum": [
        "충전기 연동·",
        "wbr",
        "관제·",
        "wbr",
        "과금 시스템을 기획부터 구축까지 일괄 수행"
      ],
      "bullets": [
        [
          "충전기 연동"
        ],
        [
          "관제 · 과금"
        ],
        [
          "EVCP 제품화"
        ]
      ]
    }
  ]
};

export const homeCases: readonly HomeCase[] = [
  {
    "image": {
      "src": "assets/home-refresh/case-robot-line.svg",
      "alt": "",
      "width": "480",
      "height": "260"
    },
    "cat": "AX · SMART MANUFACTURING",
    "title": [
      "Factory Insight AI — 조립 라인 이상 조기감지"
    ],
    "sum": [
      "설비 신호의 이상을 발생 시점에 포착하는 제조 AI 시스템"
    ],
    "bullets": [
      [
        "로봇·설비 시계열 데이터 통합"
      ],
      [
        "이상 징후 조기 감지와 원인 구간 추적"
      ],
      [
        "업무 흐름·알람 화면 연계"
      ]
    ],
    "href": "business-ax.html",
    "ariaLabel": "Factory Insight AI — 조립 라인 이상 조기감지 자세히 보기"
  },
  {
    "image": {
      "src": "assets/home-refresh/case-vehicle-hmi.svg",
      "alt": "",
      "width": "480",
      "height": "260"
    },
    "cat": "EMBEDDED · AUTOMOTIVE",
    "title": [
      "Global OEM 차량 화면·",
      "wbr",
      "미들웨어 개발"
    ],
    "sum": [
      "차량 환경에 최적화된 사용자 화면(HMI) 소프트웨어 개발과 양산 검증"
    ],
    "bullets": [
      [
        "Qt·QML 기반 차량용 UI 개발"
      ],
      [
        "Linux·QNX·차량용 Android(AAOS) 플랫폼 적용과 검증"
      ],
      [
        "양산 품질 기준의 테스트와 검증"
      ]
    ],
    "href": "business-embedded.html",
    "ariaLabel": "Global OEM 차량 화면·미들웨어 개발 자세히 보기"
  },
  {
    "image": {
      "src": "assets/home-refresh/case-thinq-webos.svg",
      "alt": "",
      "width": "480",
      "height": "260"
    },
    "cat": "SI · CONNECTED SERVICE",
    "title": [
      "ThinQ 홈 AIoT · webOS · 기업용 클라우드"
    ],
    "sum": [
      "다양한 디바이스와 서비스를 하나의 경험으로 연결한 글로벌 플랫폼"
    ],
    "bullets": [
      [
        "사용자·관리자·업무 시스템 통합 구축"
      ],
      [
        "다국가·다기기 운영 환경 대응"
      ],
      [
        "안정적인 B2B 서비스 아키텍처"
      ]
    ],
    "href": "business-si.html",
    "ariaLabel": "ThinQ 홈 AIoT · webOS · 기업용 클라우드 자세히 보기"
  },
  {
    "image": {
      "src": "assets/home-refresh/case-ev-charging.svg",
      "alt": "",
      "width": "480",
      "height": "260"
    },
    "cat": "ENERGY · EV CHARGING",
    "title": [
      "EV 충전 플랫폼 구축"
    ],
    "sum": [
      "충전기 연동부터 관제·회원·결제까지 연결한 통합 운영 플랫폼"
    ],
    "bullets": [
      [
        "OCPP 기반 충전기 연동"
      ],
      [
        "지도 기반 실시간 관제와 장애 대응"
      ],
      [
        "회원·결제·운영 시스템 통합"
      ]
    ],
    "href": "solution-evcp.html",
    "ariaLabel": "EV 충전 플랫폼 구축 자세히 보기"
  }
];
