import type { JSX } from "react";
import { assetPath } from "@/config/i18n";
import type { Lang } from "@/config/i18n";
import { applyBase } from "@/config/site";
import { PageMeta } from "@/components/layout/page-meta";
import { PageShell } from "@/components/layout/page-shell";
import { secHeads } from "@/data/sec-heads";
import { SecHead } from "@/components/section/sec-head";
import { subnavItems } from "@/data/subnav";
import { Subnav } from "@/components/section/subnav";
import { ctaCopy } from "@/data/cta";
import { FctaTop } from "@/components/section/fcta-top";
import { solutionIntros } from "@/data/solution-intro";
import { SolCopy } from "@/components/section/sol-copy";
import { DepCards } from "@/components/section/dep-cards";
import { depCards } from "@/data/cards";
import { FeatItems } from "@/components/section/feat-list";
import { featLists } from "@/data/features";
import { T, localizeLd, t } from "@/i18n/translate";

export function SolutionCubeonPage({ lang }: { lang: Lang }): JSX.Element {
  return (
    <>
      <PageMeta
        lang={lang}
        path="solution-cubeon.html"
        title={t(lang, "Cubeon 산업 AI 운영 플랫폼 — 오큐브")}
        description={t(
          lang,
          "Cubeon — 산업 데이터를 표준화하고 AI 판단을 담당자 승인과 검증된 범위의 제한적 자동 실행으로 연결하는 산업 AI 운영 플랫폼.",
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            localizeLd(
              lang,
              '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@"},{"@type":"ListItem","position":2,"name":"Cubeon","item":"@@BASE@@solution-cubeon.html"}]}',
            ),
          ),
        }}
      />
      <PageShell
        lang={lang}
        slug="solution-cubeon"
        footerId="contact"
        cta={
          <>
            <FctaTop copy={ctaCopy[lang]["solution-cubeon"]} />
          </>
        }
      >
        <div className="sol-open">
          <section id="top" className="hero page-hero dark sol-hero">
            <div
              className="hero-bg"
              style={{
                backgroundImage: `url('${assetPath("assets/video/platform_brain_cube.jpg", lang)}')`,
              }}
              aria-hidden="true"
            ></div>
            <div className="hero-veil" aria-hidden="true"></div>
            <div className="hero-scroll" aria-hidden="true">
              <div className="wrap">
                <i></i>
                <span>SCROLL</span>
              </div>
            </div>
          </section>
          <section className="sol-intro">
            <SolCopy intro={solutionIntros[lang]["solution-cubeon"]} />
            <div className="sol-body">
              <figure className="sol-stage rv d3">
                {" "}
                <img
                  src={assetPath("assets/img/proto/cubeon-main.jpg", lang)}
                  alt={t(lang, "Cubeon 메인 — 통합 플랫폼 플로우와 코어 모듈 상태, 거버넌스 현황")}
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </figure>
            </div>
          </section>
        </div>
        <Subnav items={subnavItems[lang]["solution-cubeon"]} />
        <section id="overview" className="sec-anchor platform dark" style={{ paddingTop: "64px" }}>
          <div className="wrap">
            <SecHead copy={secHeads[lang]["solution-cubeon:overview"]} />
            <div className="media-duo overview-balanced reveal" data-d="1">
              <figure>
                <img
                  className="shot"
                  src={assetPath("assets/img/proto/cubeon-overview.jpg", lang)}
                  alt={t(
                    lang,
                    "Cubeon 기업 AI 지식·Agent 통합 플랫폼 구성 — 기업 데이터 연결부터 지식화·AI Agent·모델 운영·업무 자동화·보안 권한까지",
                  )}
                  loading="lazy"
                  width="1600"
                  height="1200"
                />{" "}
              </figure>
              <div className="feat-list">
                {" "}
                <FeatItems items={featLists[lang]["solution-cubeon:overview"]} />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="sec-anchor">
          <div className="wrap">
            <div className="sec-head rv">
              <span className="kicker">Features</span>{" "}
              <h2>
                <T l={lang}>데이터에서 실행까지 이어지는 여섯 개 코어 모듈</T>
              </h2>
              <p className="lead">
                <T l={lang}>
                  공통 데이터 기반 위에서 지식과 AI 서비스를 운영하고, 조직의 승인 절차에 맞춰
                  안전하게 실행합니다.
                </T>
              </p>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Data Foundation</span>{" "}
                <h3>
                  <T l={lang}>데이터 통합 관리</T>
                </h3>
                <p>
                  <T l={lang}>
                    기업 내 다양한 정형·
                    <wbr />
                    비정형·
                    <wbr />
                    산업 데이터를 연결하고 AI가 활용할 수 있는 형태로 준비합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>소스 연결</T>
                    </b>{" "}
                    <T l={lang}>
                      기간계·
                      <wbr />
                      설비·
                      <wbr />
                      문서·
                      <wbr />
                      API·
                      <wbr />
                      센서를 표준 커넥터로 연결
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>정제 파이프라인</T>
                    </b>{" "}
                    <T l={lang}>연결 → 파싱 → 정제 → 표준화 → 데이터셋 생성</T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>품질 점검</T>
                    </b>{" "}
                    <T l={lang}>
                      완전성·
                      <wbr />
                      일관성·
                      <wbr />
                      최신성·
                      <wbr />
                      유효성 지표로 상시 확인
                    </T>
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src={assetPath("assets/img/proto/cubeon-c01.jpg", lang)}
                  alt={t(
                    lang,
                    "Cubeon 기업 데이터 통합 — 데이터 소스 현황과 정제 파이프라인, 데이터 품질 지표",
                  )}
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Knowledge Intelligence</span>{" "}
                <h3>
                  <T l={lang}>온톨로지 기반 지식화 관리</T>
                </h3>
                <p>
                  <T l={lang}>
                    데이터의 의미·
                    <wbr />
                    관계·
                    <wbr />
                    맥락을 연결하여 기업 고유의 지식체계를 구축합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>지식 그래프</T>
                    </b>{" "}
                    <T l={lang}>
                      클래스·
                      <wbr />
                      엔터티·
                      <wbr />
                      관계를 그래프로 탐색
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>시맨틱 모델</T>
                    </b>{" "}
                    <T l={lang}>온톨로지 스키마와 프로퍼티 매핑 관리</T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>개정 이력</T>
                    </b>{" "}
                    <T l={lang}>온톨로지 버전과 도메인 분류 체계 관리</T>
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src={assetPath("assets/img/proto/cubeon-c02.jpg", lang)}
                  alt={t(
                    lang,
                    "Cubeon 온톨로지 기반 지식화 — 지식 그래프 탐색과 시맨틱 모델, 지식 품질 지표",
                  )}
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">AI Agent</span>{" "}
                <h3>
                  <T l={lang}>지식 기반 AI Agent 서비스</T>
                </h3>
                <p>
                  <T l={lang}>
                    기업 지식과 데이터를 기반으로 질문을 이해하고 분석·
                    <wbr />
                    추론·
                    <wbr />
                    업무 수행까지 지원합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>추론 과정 공개</T>
                    </b>{" "}
                    <T l={lang}>
                      의도 파악부터 분석·
                      <wbr />
                      요약까지 단계 표시
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>도구 연동</T>
                    </b>{" "}
                    <T l={lang}>
                      지식 검색·
                      <wbr />
                      문서 조회·
                      <wbr />
                      DB 조회·
                      <wbr />
                      리포트 생성 호출
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>근거 표기</T>
                    </b>{" "}
                    <T l={lang}>
                      참조한 지식·
                      <wbr />
                      데이터 소스와 신선도 함께 제시
                    </T>
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src={assetPath("assets/img/proto/cubeon-c03.jpg", lang)}
                  alt={t(
                    lang,
                    "Cubeon 지식 기반 AI Agent — 대화 워크스페이스와 작업 실행 파이프라인, 에이전트 디렉터리",
                  )}
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">Model Hub</span> <h3>AI Model Hub</h3>
                <p>
                  <T l={lang}>
                    Cloud LLM부터 On-Premise LLM/SLM까지 업무와 보안환경에 맞게 연결하고 운영합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>배포 선택</T>
                    </b>{" "}
                    <T l={lang}>
                      클라우드·
                      <wbr />
                      프라이빗·
                      <wbr />
                      온프레미스 중 보안 요건에 맞게
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>게이트웨이 라우팅</T>
                    </b>{" "}
                    <T l={lang}>
                      업무별 모델 배분과 응답 지연·
                      <wbr />
                      처리량 관리
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>모델 거버넌스</T>
                    </b>{" "}
                    <T l={lang}>
                      승인 모델·
                      <wbr />
                      접근 제한·
                      <wbr />
                      감사 로그 통합
                    </T>
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src={assetPath("assets/img/proto/cubeon-c04.jpg", lang)}
                  alt={t(
                    lang,
                    "Cubeon AI Model Hub — 모델 인벤토리와 게이트웨이 라우팅, 배포 토폴로지",
                  )}
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo">
              <div className="duo-txt rv">
                <span className="pill">Workflow & Action</span>{" "}
                <h3>
                  <T l={lang}>업무 자동화 및 실행 관리</T>
                </h3>
                <p>
                  <T l={lang}>
                    AI의 분석 결과를 시스템 조회, 문서 생성, 알림, 승인, 업무 처리까지 연결합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>폐루프 실행</T>
                    </b>{" "}
                    <T l={lang}>검색 → 분석 → 권고 → 승인 → 실행 연결</T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>승인 라우팅</T>
                    </b>{" "}
                    <T l={lang}>
                      승인 대기함과 우선순위·
                      <wbr />
                      지연 경고 관리
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>결과 산출</T>
                    </b>{" "}
                    <T l={lang}>
                      발주서·
                      <wbr />
                      리포트 자동 생성과 실행 이력 추적
                    </T>
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src={assetPath("assets/img/proto/cubeon-c05.jpg", lang)}
                  alt={t(
                    lang,
                    "Cubeon 업무 자동화 및 실행 — 워크플로 파이프라인과 승인 대기함, 연결 시스템 현황",
                  )}
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
            <div className="duo rev">
              <div className="duo-txt rv">
                <span className="pill">AI Governance</span>{" "}
                <h3>
                  <T l={lang}>
                    AI 보안·
                    <wbr />
                    권한·
                    <wbr />
                    운영관리
                  </T>
                </h3>
                <p>
                  <T l={lang}>
                    기업 AI 환경에 필요한 데이터 접근권한, Agent 권한, 로그, 모델 및 지식 버전을
                    통합 관리합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>3중 권한 분리</T>
                    </b>{" "}
                    <T l={lang}>
                      데이터·
                      <wbr />
                      Agent·
                      <wbr />
                      모델 권한을 역할 기반으로 관리
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>
                        감사·
                        <wbr />
                        모니터링
                      </T>
                    </b>{" "}
                    <T l={lang}>
                      조회·
                      <wbr />
                      실행·
                      <wbr />
                      권한 변경 로그와 보안 이벤트 추적
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>버전 통제</T>
                    </b>{" "}
                    <T l={lang}>
                      지식·
                      <wbr />
                      모델 버전과 정책 승인 이력 관리
                    </T>
                  </li>
                </ul>
              </div>
              <div className="duo-media stage rv d1">
                {" "}
                <img
                  src={assetPath("assets/img/proto/cubeon-c06.jpg", lang)}
                  alt={t(
                    lang,
                    "Cubeon AI 보안·권한·운영관리 — 역할 기반 접근 제어와 감사 로그, 지식·모델 버전 관리",
                  )}
                  loading="lazy"
                  width="1600"
                  height="900"
                />{" "}
              </div>
            </div>
          </div>
        </section>
        <section id="arch" className="pinsec">
          <div className="wrap">
            <div className="pin-left">
              {" "}
              <span className="pin-num">Architecture</span>{" "}
              <h2>
                <T l={lang}>필요한 기능을 조합하는 8개 공통 모듈</T>
              </h2>
              <p>
                <T l={lang}>
                  산업과 비즈니스에 공통으로 필요한 기능을 나눠 구성해 필요한 모듈과 분야 기능부터
                  단계적으로 확장합니다.
                </T>
              </p>
              <div className="pin-progress" aria-hidden="true">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
            <div className="pin-right">
              <article className="pin-item reveal">
                <div className="pi-no">Connect</div>
                <h3>
                  <T l={lang}>데이터 연결</T>
                </h3>
                <p>
                  <T l={lang}>
                    설비 제어기(PLC)·
                    <wbr />
                    센서·
                    <wbr />
                    생산관리시스템(MES)·
                    <wbr />
                    전사적자원관리시스템(ERP) 등 서로 다른 데이터 원천을 연결합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>
                        엣지 수집·
                        <wbr />
                        전송 복구
                      </T>
                    </b>{" "}
                    <T l={lang}>네트워크 단절 시 데이터를 임시 저장하고 연결 복구 후 재전송</T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>안전한 연결</T>
                    </b>{" "}
                    <T l={lang}>
                      암호화·
                      <wbr />
                      기기 인증·
                      <wbr />
                      역할별 접근 권한으로 시스템 간 데이터 이동 보호
                    </T>
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    <T l={lang}>산업 통신 표준</T>
                  </span>
                  <span className="pill light">
                    <T l={lang}>시스템 연계 API</T>
                  </span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot={assetPath("assets/img/proto/cubeon-connect.jpg", lang)}
                  data-shot-alt={t(
                    lang,
                    "Cubeon Connect — 이기종 데이터 연결 콘솔 개념 화면(소스·프로토콜 어댑터·태그 표준 매핑)",
                  )}
                >
                  <T l={lang}>화면 보기</T>
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Fabric</div>
                <h3>
                  <T l={lang}>데이터 파이프라인</T>
                </h3>
                <p>
                  <T l={lang}>
                    실시간 데이터와 정기 수집 데이터를 안정적으로 저장·
                    <wbr />
                    정제·
                    <wbr />
                    전달합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>운영 상태 추적</T>
                    </b>{" "}
                    <T l={lang}>
                      데이터 수집부터 제어까지 각 단계의 지연과 오류율을 측정해 문제 구간 확인
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>단계적 확장</T>
                    </b>{" "}
                    <T l={lang}>라인 1개 검증에서 전사 확산까지 검증된 처리 구조 재사용</T>
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    <T l={lang}>실시간 처리</T>
                  </span>
                  <span className="pill light">
                    <T l={lang}>정기 처리</T>
                  </span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot={assetPath("assets/img/proto/cubeon-fabric.jpg", lang)}
                  data-shot-alt={t(
                    lang,
                    "Cubeon Fabric — 데이터 처리 흐름 개념 화면(수집→임시 저장→정제→저장→활용)",
                  )}
                >
                  <T l={lang}>화면 보기</T>
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Semantic</div>
                <h3>
                  <T l={lang}>의미 체계</T>
                </h3>
                <p>
                  <T l={lang}>
                    공통 데이터 형식과 용어·
                    <wbr />
                    관계 체계인 온톨로지로 데이터의 이름과 의미를 통일합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>데이터 품질 통일</T>
                    </b>{" "}
                    <T l={lang}>
                      공통 형식 적용·
                      <wbr />
                      품질 검증·
                      <wbr />
                      누락값 보정으로 분석 가능한 상태 확보
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>관계 기반 검색</T>
                    </b>{" "}
                    <T l={lang}>
                      데이터·
                      <wbr />
                      문서·
                      <wbr />
                      업무의 연결 관계를 따라 필요한 정보 탐색
                    </T>
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    <T l={lang}>산업 용어·관계 체계(온톨로지)</T>
                  </span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot={assetPath("assets/img/proto/dataq-knowledge.jpg", lang)}
                  data-shot-alt={t(lang, "의미 표준화·지식 관리 프로토타입 화면")}
                >
                  <T l={lang}>화면 보기</T>
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">ModelOps</div>
                <h3>
                  <T l={lang}>AI 모델 운영</T>
                </h3>
                <p>
                  <T l={lang}>
                    AI 모델의 학습·
                    <wbr />
                    검증·
                    <wbr />
                    배포 이력을 관리하고 운영 중 성능을 감시해 필요할 때 재학습합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>데이터 변화 탐지</T>
                    </b>{" "}
                    <T l={lang}>입력 데이터와 예측 결과의 변화를 확인해 재학습 시점 판단</T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>감사 이력</T>
                    </b>{" "}
                    <T l={lang}>
                      모델의 판단과 실행 전 과정을 기록해 품질·
                      <wbr />
                      규정 대응 지원
                    </T>
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    <T l={lang}>학습·검증·배포·재학습</T>
                  </span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot={assetPath("assets/img/proto/cubeon-modelreg.jpg", lang)}
                  data-shot-alt={t(lang, "모델 레지스트리·거버넌스 프로토타입 화면")}
                >
                  <T l={lang}>화면 보기</T>
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Agents</div>
                <h3>
                  <T l={lang}>전문 AI 에이전트</T>
                </h3>
                <p>
                  <T l={lang}>
                    업무 질문에 답하고 문서를 분석하며 업무를 수행하는 AI 에이전트를 실행합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>근거 제시</T>
                    </b>{" "}
                    <T l={lang}>
                      검색한 문서·
                      <wbr />
                      데이터를 근거로 답변, 출처도 함께 기록
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>권한 인지</T>
                    </b>{" "}
                    <T l={lang}>
                      역할 기반 접근 제어로 사용자별 참조 가능한 지식·
                      <wbr />
                      기능 범위 분리
                    </T>
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    <T l={lang}>검색 증강 생성(RAG)</T>
                  </span>
                  <span className="pill light">
                    <T l={lang}>사내 소형 언어모델(sLLM)</T>
                  </span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot={assetPath("assets/img/proto/agentq-hub.jpg", lang)}
                  data-shot-alt={t(lang, "AI 에이전트 허브 프로토타입 화면")}
                >
                  <T l={lang}>화면 보기</T>
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Orchestrator</div>
                <h3>
                  <T l={lang}>업무 흐름 조정</T>
                </h3>
                <p>
                  <T l={lang}>
                    여러 AI 에이전트가 정해진 순서와 역할에 따라 하나의 업무를 완성하도록
                    조정합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>
                        판단·
                        <wbr />
                        권고 통합
                      </T>
                    </b>{" "}
                    <T l={lang}>여러 AI 에이전트의 판단과 권고를 하나의 흐름으로 조정</T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>승인 경로 분기</T>
                    </b>{" "}
                    <T l={lang}>
                      위험도·
                      <wbr />
                      가역성 정책에 따라 실행 전 승인 경로 자동 분기
                    </T>
                  </li>
                </ul>
                <div className="pi-tags">
                  <span className="pill light">
                    <T l={lang}>AI 도구·시스템 연결</T>
                  </span>
                </div>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot={assetPath("assets/img/proto/cubeon-builder.jpg", lang)}
                  data-shot-alt={t(lang, "노코드 에이전트 빌더·서비스 조정 프로토타입 화면")}
                >
                  <T l={lang}>화면 보기</T>
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Console</div>
                <h3>
                  <T l={lang}>통합 관제·감사</T>
                </h3>
                <p>
                  <T l={lang}>
                    탐지·
                    <wbr />
                    판단·
                    <wbr />
                    업무 실행을 하나의 화면에서 관리합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>통합 운영 대시보드</T>
                    </b>{" "}
                    <T l={lang}>
                      서비스 상태·
                      <wbr />
                      응답 속도·
                      <wbr />
                      처리량·
                      <wbr />
                      오류와 업무 진행 상황을 한 화면에서 추적
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>
                        변경 관리·
                        <wbr />
                        복구
                      </T>
                    </b>{" "}
                    <T l={lang}>
                      모델·
                      <wbr />
                      지식·
                      <wbr />
                      설정 변경을 기록하고 문제 발생 시 이전 버전으로 복구
                    </T>
                  </li>
                </ul>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot={assetPath("assets/img/proto/cubeon-infra.jpg", lang)}
                  data-shot-alt={t(lang, "통합 관제·인프라 콘솔 프로토타입 화면")}
                >
                  <T l={lang}>화면 보기</T>
                </button>{" "}
              </article>
              <article className="pin-item reveal">
                <div className="pi-no">Copilot</div>
                <h3>
                  <T l={lang}>업무 코파일럿</T>
                </h3>
                <p>
                  <T l={lang}>
                    자연어 질의와 업무 지원에 사용할 AI를 상용 대규모 언어모델(LLM)과 사내 소형
                    언어모델(sLLM) 중에서 선택합니다.
                  </T>
                </p>
                <ul className="pi-bul">
                  <li>
                    <b>
                      <T l={lang}>배포 방식 선택</T>
                    </b>{" "}
                    <T l={lang}>
                      상용 AI 서비스·
                      <wbr />
                      사내 구축형·
                      <wbr />
                      인터넷과 분리된 폐쇄망 중 보안 요건에 맞게 선택
                    </T>
                  </li>
                  <li>
                    <b>
                      <T l={lang}>데이터 경계 고정</T>
                    </b>{" "}
                    <T l={lang}>
                      외부 반출 제한 데이터가 경계를 넘지 않도록 처리 위치를 정책으로 고정
                    </T>
                  </li>
                </ul>{" "}
                <button
                  type="button"
                  className="pi-shot"
                  data-shot={assetPath("assets/img/proto/agentq-chat.jpg", lang)}
                  data-shot-alt={t(lang, "업무 코파일럿·자연어 질의 프로토타입 화면")}
                >
                  <T l={lang}>화면 보기</T>
                </button>{" "}
              </article>
            </div>
          </div>
        </section>
        <section id="structure" className="sec-anchor platform dark">
          <div className="wrap">
            <div className="reveal">
              <span className="kicker">Product Structure</span>{" "}
              <h2>
                <T l={lang}>공통 코어 위에 필요한 분야 기능을 확장합니다</T>
              </h2>
              <p className="sec-sub">
                <T l={lang}>
                  데이터·
                  <wbr />
                  AI·
                  <wbr />
                  실행을 담당하는 공통 기반은 재사용하고, 조직의 과제에 맞는 도메인팩과 코파일럿을
                  선택해 구성합니다.
                </T>
              </p>
            </div>
            <div className="prod-row reveal" data-d="1">
              <article className="prod-card">
                <h3>Horizontal Core</h3>{" "}
                <span className="sub">
                  <T l={lang}>공통 운영 기반</T>
                </span>{" "}
                <p>
                  <T l={lang}>
                    Connect부터 Console까지 8개 모듈을 조합해 데이터 연결, AI 운영, 승인과 실행의
                    공통 기준을 만듭니다.
                  </T>
                </p>
              </article>
              <article className="prod-card">
                <h3>Manufacturing Pack</h3>{" "}
                <span className="sub">
                  <T l={lang}>제조 도메인팩</T>
                </span>{" "}
                <p>
                  <T l={lang}>
                    설비 이상 감지·
                    <wbr />
                    예지보전·
                    <wbr />
                    품질 예측·
                    <wbr />
                    공정·
                    <wbr />
                    에너지 최적화 기능을 공정 과제에 맞춰 적용합니다.
                  </T>
                </p>
              </article>
              <article className="prod-card">
                <h3>Safety Pack</h3>{" "}
                <span className="sub">
                  <T l={lang}>안전 도메인팩</T>
                </span>{" "}
                <p>
                  <T l={lang}>
                    영상·
                    <wbr />
                    센서·
                    <wbr />
                    운영 이벤트를 함께 분석해 위험 상황을 감지하고 근거와 대응 우선순위를
                    제공합니다.
                  </T>
                </p>
              </article>
              <article className="prod-card">
                <h3>Copilot</h3>{" "}
                <span className="sub">
                  <T l={lang}>업무 지식 서비스</T>
                </span>{" "}
                <p>
                  <T l={lang}>
                    조직의 문서와 데이터를 근거로 질문에 답하고 분석 결과를 설명하며 필요한 후속
                    업무를 지원합니다.
                  </T>
                </p>
              </article>
            </div>
          </div>
        </section>
        <section id="operation" className="sec-anchor">
          <div className="wrap">
            <div className="cubeon-hero reveal">
              <div>
                {" "}
                <span className="kicker">Operating Levels</span>{" "}
                <h2>
                  <T l={lang}>검증된 범위부터</T>{" "}
                  <span>
                    <T l={lang}>단계적으로 자동화</T>
                  </span>
                </h2>
                <p>
                  <T l={lang}>
                    모든 업무를 한 번에 자동화하지 않고 감지와 알림부터 시작해 담당자 승인, 제한된
                    자동 실행 순으로 적용 범위를 넓힙니다.
                  </T>
                </p>
              </div>
              <div className="ladder" aria-label={t(lang, "Cubeon 운영 자동화 단계")}>
                <div className="rung">
                  <b>Level 1 · Detect</b>
                  <span>
                    <T l={lang}>
                      데이터 수집·
                      <wbr />
                      상태 파악·
                      <wbr />
                      이상 감지·
                      <wbr />
                      알림
                    </T>
                  </span>
                </div>
                <div className="rung l2">
                  <b>Level 2 · Decide</b>
                  <span>
                    <T l={lang}>
                      원인 분석·
                      <wbr />
                      조치 권고·
                      <wbr />
                      담당자 확인과 승인
                    </T>
                  </span>
                </div>
                <div className="rung l3">
                  <b>Level 3 · Act</b>
                  <span>
                    <T l={lang}>
                      승인된 범위의 자동 실행·
                      <wbr />
                      결과 검증·
                      <wbr />
                      지속 개선
                    </T>
                  </span>
                </div>
              </div>
            </div>
            <div className="reveal" data-d="1" style={{ marginTop: "72px" }}>
              <span className="kicker">Deployment</span>{" "}
              <h2>
                <T l={lang}>데이터와 보안 요건에 맞는 배포</T>
              </h2>
              <p className="sec-sub">
                <T l={lang}>
                  장비 가까이에서 처리하는 엣지부터 사내 구축형, 엣지와 사내·
                  <wbr />
                  클라우드를 연결하는 혼합형까지 선택할 수 있습니다.
                </T>
              </p>
            </div>
            <div className="dep-grid reveal" data-d="2">
              {" "}
              <DepCards items={depCards[lang]["solution-cubeon:operation"]} as="article" />
            </div>
          </div>
        </section>
        <section id="fit" className="sec-anchor deploy">
          <div className="wrap">
            <SecHead copy={secHeads[lang]["solution-cubeon:fit"]} />
            <div className="dep-grid g2 reveal" data-d="1" style={{ marginTop: "24px" }}>
              {" "}
              <DepCards items={depCards[lang]["solution-cubeon:fit"]} />
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
