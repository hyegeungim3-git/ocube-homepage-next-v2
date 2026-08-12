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
      no: "01",
      slot: "ax1",
      image: {
        src: "assets/img/business/steps/ax-01-opportunity-data-v3.webp",
        alt: "설비와 업무 시스템 데이터를 진단해 AI 적용 기회를 선별하는 모습",
        width: "1600",
        height: "900",
      },
      title: "AI 기회 발굴 · 데이터 진단",
      body: ["AI 적용 가치가 큰 업무를 선별하고, 실제 학습에 사용할 데이터가 있는지 확인합니다."],
      bullets: [
        [
          {
            b: ["적용 후보 선정"],
          },
          " 반복 판단·",
          "wbr",
          "대기가 많은 업무를 기대 효과와 난이도로 우선순위화",
        ],
        [
          {
            b: ["데이터 진단"],
          },
          " 설비·",
          "wbr",
          "업무 시스템 데이터의 품질과 라벨로 학습 가능성 판정",
        ],
        [
          {
            b: ["데이터 수집"],
          },
          " 산업 통신 규격(OPC-UA·",
          "wbr",
          "Modbus·",
          "wbr",
          "MQTT)으로 설비 연결, 운영 데이터 정리",
        ],
      ],
    },
    {
      no: "02",
      slot: "ax2",
      image: {
        src: "assets/img/business/steps/ax-02-knowledge-standardization-v3.webp",
        alt: "흩어진 데이터를 표준화해 의미 기반 검색과 데이터 관계로 연결하는 모습",
        width: "1600",
        height: "900",
      },
      title: "데이터 표준화 · 지식화",
      body: [
        "설비·",
        "wbr",
        "문서·",
        "wbr",
        "이벤트 데이터를 같은 의미 체계로 정리해 모델과 에이전트가 함께 쓰는 지식 기반을 만듭니다.",
      ],
      bullets: [
        [
          {
            b: ["공통 데이터 형식"],
          },
          " 설비별 이름·",
          "wbr",
          "코드를 통일하고, 산업 용어·",
          "wbr",
          "관계 체계(온톨로지)로 관계 정의",
        ],
        [
          {
            b: ["문서·", "wbr", "이미지 연결"],
          },
          " 문서·",
          "wbr",
          "도면·",
          "wbr",
          "이미지를 의미 기반으로 검색하고 데이터 관계까지 확인",
        ],
        [
          {
            b: ["공통 의미 체계"],
          },
          " 시계열·",
          "wbr",
          "이벤트·",
          "wbr",
          "텍스트를 하나로 묶어 모델과 에이전트가 함께 참조",
        ],
      ],
    },
    {
      no: "03",
      slot: "ax3",
      image: {
        src: "assets/img/business/steps/ax-03-model-training-v3.webp",
        alt: "시계열과 문서 데이터에 적합한 AI 모델을 학습하고 비교하는 모습",
        width: "1600",
        height: "900",
      },
      title: "AI 모델링 · 학습",
      body: [
        "과제·",
        "wbr",
        "보안·",
        "wbr",
        "운영 조건에 맞는 모델을 비교해 정확도와 오탐 비용을 함께 고려한 구성을 선정합니다.",
      ],
      bullets: [
        [
          {
            b: ["과제별 모델"],
          },
          " 이상탐지·",
          "wbr",
          "예지보전·",
          "wbr",
          "수요예측은 시계열 모델, 문서 이해는 생성형 AI·",
          "wbr",
          "근거 검색(RAG)",
        ],
        [
          {
            b: ["모델 조합"],
          },
          " 사내 소형 언어모델(sLLM)과 상용 LLM API를 보안 요건에 맞게 조합",
        ],
        [
          {
            b: ["선정 기준"],
          },
          " 실험 추적·",
          "wbr",
          "교차 검증에 더해 업무별 오탐 비용까지 반영",
        ],
      ],
    },
    {
      no: "04",
      slot: "ax4",
      image: {
        src: "assets/img/business/steps/ax-04-hitl-poc-v3.webp",
        alt: "운영 데이터로 AI 판단을 검증하고 승인 결과를 다시 학습하는 모습",
        width: "1600",
        height: "900",
      },
      title: "운영 검증 · 사람 확인",
      body: [
        {
          b: ["운영 검증"],
        },
        "으로 성과를 확인하고, ",
        {
          b: ["사람의 검토·", "wbr", "승인"],
        },
        "을 거쳐 자율화 범위를 정합니다.",
      ],
      bullets: [
        [
          {
            b: ["효과 정량화"],
          },
          " 실제 운영 데이터로 도입 전후를 같은 기준으로 비교(PoC)",
        ],
        [
          {
            b: ["사람 검토(HITL)"],
          },
          " AI 판단의 근거를 확인하고 애매한 사례는 다음 학습 데이터에 반영",
        ],
        [
          {
            b: ["임계값 합의"],
          },
          " 오탐·",
          "wbr",
          "미탐 비용을 담당 부서와 맞춰 알람 기준과 자율화 수준 조정",
        ],
      ],
    },
    {
      no: "05",
      slot: "ax5",
      image: {
        src: "assets/img/business/steps/ax-05-agent-integration-v3.webp",
        alt: "AI 에이전트가 업무 시스템과 설비를 연결해 승인된 작업을 실행하는 모습",
        width: "1600",
        height: "900",
      },
      title: "AI 에이전트 · 시스템 연결",
      body: [
        "AI를 MES·",
        "wbr",
        "ERP·",
        "wbr",
        "설비에 연결해 분석 결과가 보고·",
        "wbr",
        "승인·",
        "wbr",
        "조치로 이어지도록 구현합니다.",
      ],
      bullets: [
        [
          {
            b: ["업무 연결"],
          },
          " 조회·",
          "wbr",
          "분석·",
          "wbr",
          "보고는 자연어 에이전트, 설비 이상은 탐지 → 제안 → 승인 → 실행 → 확인",
        ],
        [
          {
            b: ["배포 방식 선택"],
          },
          " 클라우드·",
          "wbr",
          "사내 구축형(온프레미스)·",
          "wbr",
          "폐쇄망 중 보안 요건에 맞는 방식으로 구축",
        ],
        [
          {
            b: ["업무 시스템 연동"],
          },
          " 생산관리(MES)·",
          "wbr",
          "전사자원관리(ERP)와 API로 연결해 업무 흐름 안에서 작동",
        ],
      ],
    },
    {
      no: "06",
      slot: "ax6",
      image: {
        src: "assets/img/business/steps/ax-06-mlops-cycle-v3.webp",
        alt: "모델 성능을 감시하고 재학습·배포·되돌리기를 수행하는 AI 모델 운영 순환",
        width: "1600",
        height: "900",
      },
      title: "운영 · 지속 학습",
      body: [
        "AI 모델의 품질 변화를 지속적으로 확인하고, 성능이 낮아지면 재학습과 재배포로 대응합니다.",
      ],
      bullets: [
        [
          {
            b: ["데이터·", "wbr", "성능 변화 감시"],
          },
          " 입력 데이터와 모델 성능 변화를 확인해 재학습 시점 안내",
        ],
        [
          {
            b: ["버전·", "wbr", "복구"],
          },
          " 모델 버전과 배포 이력을 관리하고, 문제가 생기면 검증된 이전 버전으로 복구",
        ],
        [
          {
            b: ["지속 개선"],
          },
          " 사용자 피드백과 신규 데이터를 재학습에 반영하고 성능 재검증",
        ],
      ],
    },
  ],
  "business-embedded:whatwedo": [
    {
      no: "01",
      slot: "em1",
      image: {
        src: "assets/img/business/steps/embedded-01-vmodel-v3.webp",
        alt: "요구사항에서 검증까지 추적 가능한 임베디드 시스템 V 모델 설계",
        width: "1600",
        height: "900",
      },
      title: "요구 분석 · 시스템 설계",
      body: [
        "기능·",
        "wbr",
        "안전 요구와 하드웨어 제약을 설계·",
        "wbr",
        "검증 기준으로 확정해 양산 단계의 재작업을 줄입니다.",
      ],
      bullets: [
        [
          {
            b: ["요구 분리"],
          },
          " 기능 요구와 안전 요구(HARA·",
          "wbr",
          "ASIL)를 나눠 추적 가능한 형태로 정의",
        ],
        [
          {
            b: ["제약 반영 설계"],
          },
          " 메모리·",
          "wbr",
          "전력·",
          "wbr",
          "발열을 반영한 SW 아키텍처와 단계별 검증 계획",
        ],
        [
          {
            b: ["표준 적용 판단"],
          },
          " AUTOSAR Classic/",
          "wbr",
          "Adaptive 적용 여부를 프로젝트 특성에 맞춰 결정",
        ],
      ],
    },
    {
      no: "02",
      slot: "em2",
      image: {
        src: "assets/img/business/steps/embedded-02-board-bringup-v3.webp",
        alt: "타깃 보드의 부팅 계층과 주변 장치를 순차적으로 포팅하고 검증하는 모습",
        width: "1600",
        height: "900",
      },
      title: "보드 초기 구동 · 보드 지원 패키지(BSP) 적용",
      body: [
        "타깃 보드에서 부트로더·",
        "wbr",
        "커널·",
        "wbr",
        "드라이버를 구동하고, 재현 가능한 보드 지원 패키지(BSP) 빌드 환경을 확보합니다.",
      ],
      bullets: [
        [
          {
            b: ["보드 포팅"],
          },
          " 부트로더·",
          "wbr",
          "커널·",
          "wbr",
          "드라이버를 타깃 보드에 올리고 주변장치 하나씩 검증",
        ],
        [
          {
            b: ["재현 가능한 빌드"],
          },
          " Yocto 기반 보드 지원 패키지(BSP)로 누구나 같은 결과를 얻는 빌드 환경",
        ],
        [
          {
            b: ["초기 지표"],
          },
          " 부팅 시간·",
          "wbr",
          "메모리 사용량 측정으로 양산 목표 조기 설정",
        ],
      ],
    },
    {
      no: "03",
      slot: "em3",
      image: {
        src: "assets/img/business/steps/embedded-03-os-platform-v3.webp",
        alt: "차량용 운영체제의 안전 영역과 서비스 영역을 분리하고 복구 체계를 구성한 모습",
        width: "1600",
        height: "900",
      },
      title: "운영체제 · 플랫폼 구성",
      body: [
        "실시간성·",
        "wbr",
        "앱 생태계·",
        "wbr",
        "업데이트 요구에 맞춰 OS와 격리·",
        "wbr",
        "복구 구조를 구성합니다.",
      ],
      bullets: [
        [
          {
            b: ["OS 선택"],
          },
          " 실시간 영역은 QNX·",
          "wbr",
          "RTOS, 앱 생태계가 필요한 영역은 Linux·",
          "wbr",
          "차량용 Android(AAOS)",
        ],
        [
          {
            b: ["도메인 분리"],
          },
          " 컨테이너·",
          "wbr",
          "하이퍼바이저로 안전 기능과 인포테인먼트 격리",
        ],
        [
          {
            b: ["OTA 전제"],
          },
          " A/B 파티션과 실패 시 자동 복구 체계",
        ],
      ],
    },
    {
      no: "04",
      slot: "em4",
      image: {
        src: "assets/img/business/steps/embedded-04-hmi-middleware-v3.webp",
        alt: "차량 HMI와 미들웨어가 센서와 도메인 서비스를 연결하는 모습",
        width: "1600",
        height: "900",
      },
      title: "차량 화면(HMI) · 미들웨어 개발",
      body: [
        "차량 화면과 센서·",
        "wbr",
        "서비스 통신을 함께 개발해 일관된 사용자 경험과 안정적인 데이터 흐름을 구현합니다.",
      ],
      bullets: [
        [
          {
            b: ["차량 화면(HMI)"],
          },
          " Qt·",
          "wbr",
          "QML 기반 화면을 프레임 저하 최소화 기준으로 개발",
        ],
        [
          {
            b: ["차량 네트워크"],
          },
          " 차량 서비스 통신(SOME/IP)·",
          "wbr",
          "제어망(CAN)·",
          "wbr",
          "차량 이더넷 미들웨어 개발·",
          "wbr",
          "통합",
        ],
        [
          {
            b: ["도메인 앱"],
          },
          " 내비게이션·",
          "wbr",
          "미디어·",
          "wbr",
          "공조 등 서비스 계층 구현",
        ],
      ],
    },
    {
      no: "05",
      slot: "em5",
      image: {
        src: "assets/img/business/steps/embedded-05-hil-safety-v3.webp",
        alt: "HIL 시뮬레이션과 보안 검증으로 차량 소프트웨어를 통합 시험하는 모습",
        width: "1600",
        height: "900",
      },
      title: "통합 검증 · 기능안전",
      body: [
        "가상 장비 시험(HIL)·",
        "wbr",
        "실차·",
        "wbr",
        "정적분석으로 요구사항과 기능안전·",
        "wbr",
        "보안을 검증하고, 회귀 결함을 조기에 발견해 재발 위험을 낮춥니다.",
      ],
      bullets: [
        [
          {
            b: ["커버리지 검증"],
          },
          " 가상 장비 연동 시험(HIL)과 실차 테스트로 요구사항 확인",
        ],
        [
          {
            b: ["표준 프로세스"],
          },
          " ISO 26262 기능안전 · ISO/SAE 21434 사이버보안(TARA)",
        ],
        [
          {
            b: ["회귀 차단"],
          },
          " MISRA C 정적분석·",
          "wbr",
          "단위·",
          "wbr",
          "통합 테스트를 CI에 연결",
        ],
      ],
    },
    {
      no: "06",
      slot: "em6",
      image: {
        src: "assets/img/business/steps/embedded-06-production-optimization-v3.webp",
        alt: "임베디드 소프트웨어를 최적화하고 양산 라인에서 검사하는 모습",
        width: "1600",
        height: "900",
      },
      title: "최적화 · 양산 대응",
      body: [
        "부팅·",
        "wbr",
        "응답·",
        "wbr",
        "메모리를 목표치에 맞추고 플래싱·",
        "wbr",
        "검사·",
        "wbr",
        "업데이트 체계를 양산 라인에 연결합니다.",
      ],
      bullets: [
        [
          {
            b: ["목표 스펙 최적화"],
          },
          " 부팅 시간·",
          "wbr",
          "응답 지연·",
          "wbr",
          "메모리 프로파일링",
        ],
        [
          {
            b: ["양산 라인 대응"],
          },
          " 플래싱·",
          "wbr",
          "검사 체계와 UDS 진단 프로토콜 지원",
        ],
        [
          {
            b: ["규정·", "wbr", "유지보수"],
          },
          " UN R156 SW 업데이트 대응과 양산 이후 체계 구축",
        ],
      ],
    },
  ],
  "business-si:whatwedo": [
    {
      no: "01",
      slot: "si1",
      image: {
        src: "assets/img/business/steps/si-01-discovery-planning-v3.webp",
        alt: "현행 업무 흐름의 병목을 분석해 요구사항과 구축 계획으로 정리하는 모습",
        width: "1600",
        height: "900",
      },
      title: "요구 정의 · 업무 분석",
      body: [
        "현업의 업무 흐름과 병목을 먼저 확인해 기능·",
        "wbr",
        "성능·",
        "wbr",
        "보안 요구를 측정 가능한 기준으로 정리합니다.",
      ],
      bullets: [
        [
          {
            b: ["현재 업무 분석"],
          },
          " 현업 인터뷰로 업무 흐름·",
          "wbr",
          "병목·",
          "wbr",
          "예외 상황 문서화",
        ],
        [
          {
            b: ["측정 가능한 요구"],
          },
          " 기능 요구와 비기능 요구(성능·",
          "wbr",
          "보안·",
          "wbr",
          "가용성)를 기준으로 정의",
        ],
        [
          {
            b: ["일정·", "wbr", "리스크"],
          },
          " WBS와 마일스톤으로 투명하게 관리",
        ],
      ],
    },
    {
      no: "02",
      slot: "si2",
      image: {
        src: "assets/img/business/steps/si-02-architecture-ux-v3.webp",
        alt: "확장 가능한 시스템 아키텍처와 반응형 사용자 경험을 함께 설계한 모습",
        width: "1600",
        height: "900",
      },
      title: "아키텍처 · UX 설계",
      body: [
        "예상 트래픽과 데이터 규모에 맞는 확장 구조를 정하고, 실제 사용할 화면 흐름을 개발 전에 검증합니다.",
      ],
      bullets: [
        [
          {
            b: ["구조 판단"],
          },
          " 트래픽·",
          "wbr",
          "데이터 규모에 맞춰 단일 구조와 마이크로서비스(MSA) 중 선택",
        ],
        [
          {
            b: ["사전 검증"],
          },
          " 정보 구조(IA)·",
          "wbr",
          "와이어프레임·",
          "wbr",
          "프로토타입으로 화면 흐름을 개발 전에 확인",
        ],
        [
          {
            b: ["접근성·", "wbr", "반응형"],
          },
          " 웹 접근성 지침(KWCAG)과 반응형 화면을 설계 단계부터 반영",
        ],
      ],
    },
    {
      no: "03",
      slot: "si3",
      image: {
        src: "assets/img/business/steps/si-03-data-system-design-v3.webp",
        alt: "기존 시스템 데이터를 표준화하고 연동·백업·재해복구 구조로 설계한 모습",
        width: "1600",
        height: "900",
      },
      title: "데이터 · 시스템 설계",
      body: [
        "데이터 구조와 API, 이행·",
        "wbr",
        "백업·",
        "wbr",
        "재해복구 기준을 함께 정해 시스템 간 정합성과 복구 가능성을 확보합니다.",
      ],
      bullets: [
        [
          {
            b: ["데이터 표준"],
          },
          " ERD·",
          "wbr",
          "데이터 사전 표준화와 기존 데이터 이행 전략",
        ],
        [
          {
            b: ["인터페이스 확정"],
          },
          " 기존·",
          "wbr",
          "외부 시스템의 연동 방식을 API 명세로 정리",
        ],
        [
          {
            b: ["가용성 설계"],
          },
          " 백업·",
          "wbr",
          "이중화·",
          "wbr",
          "재해복구(DR)를 아키텍처에 포함",
        ],
      ],
    },
    {
      no: "04",
      slot: "si4",
      image: {
        src: "assets/img/business/steps/si-04-development-integration-v3.webp",
        alt: "코드 리뷰와 자동 테스트를 거쳐 시스템을 지속적으로 통합하는 모습",
        width: "1600",
        height: "900",
      },
      title: "개발 · 통합",
      body: [
        "코드 리뷰·",
        "wbr",
        "자동 테스트·",
        "wbr",
        "CI/CD로 품질을 관리하고, 개발 주기마다 작동하는 결과물로 진행 상황을 확인합니다.",
      ],
      bullets: [
        [
          {
            b: ["품질 내재화"],
          },
          " 코딩 표준·",
          "wbr",
          "코드 리뷰·",
          "wbr",
          "정적분석을 지속적 통합(CI)에 적용",
        ],
        [
          {
            b: ["테스트 자동화"],
          },
          " 단위·",
          "wbr",
          "통합 테스트로 회귀 결함 조기 발견",
        ],
        [
          {
            b: ["개발 주기별 시연"],
          },
          " 작동하는 결과물을 보며 현업과 방향 조율",
        ],
      ],
    },
    {
      no: "05",
      slot: "si5",
      image: {
        src: "assets/img/business/steps/si-05-quality-security-v3.webp",
        alt: "부하·보안·사용자 수용 기준으로 시스템 품질을 검증하는 모습",
        width: "1600",
        height: "900",
      },
      title: "품질 · 보안 검증",
      body: [
        "성능·",
        "wbr",
        "보안·",
        "wbr",
        "사용자 수용 기준을 실제 시나리오로 검증해 오픈 조건을 확정합니다.",
      ],
      bullets: [
        [
          {
            b: ["성능 실증"],
          },
          " 시나리오·",
          "wbr",
          "부하 테스트로 응답시간·",
          "wbr",
          "동시접속 목표 확인",
        ],
        [
          {
            b: ["보안 점검"],
          },
          " OWASP Top 10 기준 취약점 진단과 조치",
        ],
        [
          {
            b: ["오픈 조건"],
          },
          " 사용자 수용 테스트(UAT)로 현업 승인 확보",
        ],
      ],
    },
    {
      no: "06",
      slot: "si6",
      image: {
        src: "assets/img/business/steps/si-06-cutover-operations-v3.webp",
        alt: "중단 위험을 낮춘 시스템 이행과 되돌리기 계획, 운영 모니터링 및 지속 개선 체계",
        width: "1600",
        height: "900",
      },
      title: "이행 · 운영 · 서비스 수준 관리",
      body: [
        "이행 리허설과 되돌리기 계획으로 서비스 오픈 위험을 낮추고, 모니터링·",
        "wbr",
        "서비스 수준 기준(SLA)·",
        "wbr",
        "개선 과제로 운영 품질을 관리합니다.",
      ],
      bullets: [
        [
          {
            b: ["중단 최소화"],
          },
          " 데이터 이행 리허설과 되돌리기 계획으로 서비스 중단 위험 최소화",
        ],
        [
          {
            b: ["운영 체계"],
          },
          " 모니터링·",
          "wbr",
          "알림과 서비스 수준 기준(SLA) 기반 장애 대응 절차",
        ],
        [
          {
            b: ["지속 고도화"],
          },
          " 운영 데이터로 개선 과제를 정하고 우선순위에 따라 반영",
        ],
      ],
    },
  ],
};
