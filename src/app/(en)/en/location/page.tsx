import { applyBase, withBase } from "@/config/site";
import { SiteHeader } from "@/components/layout/site-header";
import { MobilePanel } from "@/components/layout/mobile-panel";
import { SiteFooter } from "@/components/layout/site-footer";
import { PageHero } from "@/components/layout/page-hero";
import { heroes } from "@/data/heroes.en";

export default function LocationPage() {
  return (
    <>
      <title>Locations — OCUBE CO., LTD.</title>
      <meta
        name="description"
        content="OCUBE locations — addresses, contact details and maps for our three offices in Seoul, Anyang and Daegu."
      />
      <link rel="canonical" href={withBase("en/location.html")} />
      <link rel="alternate" hrefLang="ko" href={withBase("location.html")} />
      <link rel="alternate" hrefLang="en" href={withBase("en/location.html")} />
      <link rel="alternate" hrefLang="x-default" href={withBase("location.html")} />
      <link
        rel="icon"
        href="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%230e1626'/%3E%3Cpath%20d='M16%206.5l7.5%204.3v8.6L16%2023.7l-7.5-4.3v-8.6z'%20fill='none'%20stroke='%230075de'%20stroke-width='1.8'/%3E%3Cpath%20d='M16%206.5v17.2M8.5%2010.8l7.5%204.3%207.5-4.3'%20stroke='%235b9bff'%20stroke-width='1.4'%20fill='none'/%3E%3C/svg%3E"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="OCUBE CO., LTD." />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content="Locations — OCUBE CO., LTD." />
      <meta
        property="og:description"
        content="OCUBE locations — addresses, contact details and maps for our three offices in Seoul, Anyang and Daegu."
      />
      <meta property="og:url" content={withBase("en/location.html")} />
      <meta property="og:image" content={withBase("og-codex.png")} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Locations — OCUBE CO., LTD." />
      <meta
        name="twitter:description"
        content="OCUBE locations — addresses, contact details and maps for our three offices in Seoul, Anyang and Daegu."
      />
      <meta name="twitter:image" content={withBase("og-codex.png")} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: applyBase(
            '{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"홈","item":"@@BASE@@en/"},{"@type":"ListItem","position":2,"name":"회사","item":"@@BASE@@en/company.html"},{"@type":"ListItem","position":3,"name":"오시는 길","item":"@@BASE@@en/location.html"}]}',
          ),
        }}
      />
      <SiteHeader slug="location" lang="en" />
      <MobilePanel lang="en" />
      <main>
        {" "}
        <PageHero lang="en" data={heroes["location"]} />{" "}
        <section id="location" className="sec">
          <div className="wrap">
            <div className="sec-head rv">
              {" "}
              <span className="kicker">Location</span> <h2 className="loc-h">Our offices</h2>
            </div>
            <div className="loc-list">
              <article className="loc-row rv">
                <div className="loc-map">
                  <iframe
                    src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EA%B0%95%EC%84%9C%EB%A1%9C56%EA%B0%80%EA%B8%B8%20141&z=16&hl=ko&output=embed"
                    title="오큐브 서울 위치 지도"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="loc-card">
                  <div className="loc-card-head">
                    <div>
                      <h3 className="loc-name">OCUBE Seoul</h3>
                    </div>{" "}
                    <span className="loc-pin">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                        <circle cx="12" cy="10" r="2.6"></circle>
                      </svg>
                    </span>{" "}
                  </div>
                  <dl className="loc-dl">
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                            <circle cx="12" cy="10" r="2.6"></circle>
                          </svg>
                        </span>
                        <span className="sr-only">Address</span>
                      </dt>
                      <dd>2F–3F, KM Building, 141 Gangseo-ro 56ga-gil, Gangseo-gu, Seoul, Korea</dd>
                    </div>
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M6.5 3.5h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"></path>
                          </svg>
                        </span>
                        <span className="sr-only">Phone</span>
                      </dt>
                      <dd>
                        <a href="tel:0269278067">02-6927-8067</a>
                      </dd>
                    </div>
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 8V4h10v4"></path>
                            <rect x="3.5" y="8" width="17" height="8" rx="2"></rect>
                            <path d="M7 14h10v6H7z"></path>
                          </svg>
                        </span>
                        <span className="sr-only">Fax</span>
                      </dt>
                      <dd>02-3663-5332</dd>
                    </div>
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="3" y="5" width="18" height="14" rx="2.5"></rect>
                            <path d="M4 7l8 6 8-6"></path>
                          </svg>
                        </span>
                        <span className="sr-only">Sales and solutions</span>
                      </dt>
                      <dd>
                        <a href="tel:07040105704">070-4010-5704</a>
                      </dd>
                    </div>
                  </dl>{" "}
                  <a
                    className="loc-btn"
                    href="https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EC%84%9C%EA%B5%AC%20%EA%B0%95%EC%84%9C%EB%A1%9C56%EA%B0%80%EA%B8%B8%20141"
                    target="_blank"
                    rel="noopener"
                  >
                    Open in maps{" "}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </a>{" "}
                </div>
              </article>
              <article className="loc-row rv d1">
                <div className="loc-map">
                  <iframe
                    src="https://www.google.com/maps?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%96%91%EC%8B%9C%20%EB%8F%99%EC%95%88%EA%B5%AC%20LS%EB%A1%9C%20142%20%EA%B8%88%EC%A0%95%EC%97%AD%20SKV1%20%EC%84%BC%ED%84%B0&z=16&hl=ko&output=embed"
                    title="오큐브 안양사옥 위치 지도"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="loc-card">
                  <div className="loc-card-head">
                    <div>
                      <h3 className="loc-name">OCUBE Anyang</h3>
                    </div>{" "}
                    <span className="loc-pin">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                        <circle cx="12" cy="10" r="2.6"></circle>
                      </svg>
                    </span>{" "}
                  </div>
                  <dl className="loc-dl">
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                            <circle cx="12" cy="10" r="2.6"></circle>
                          </svg>
                        </span>
                        <span className="sr-only">Address</span>
                      </dt>
                      <dd>
                        142 LS-ro, Dongan-gu, Anyang, Gyeonggi-do, Korea
                        <br />
                        #710, #722–723, Geumjeong Station SKV1 Center
                      </dd>
                    </div>
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M6.5 3.5h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"></path>
                          </svg>
                        </span>
                        <span className="sr-only">Phone</span>
                      </dt>
                      <dd>
                        <a href="tel:07040105725">070-4010-5725</a>
                      </dd>
                    </div>
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 8V4h10v4"></path>
                            <rect x="3.5" y="8" width="17" height="8" rx="2"></rect>
                            <path d="M7 14h10v6H7z"></path>
                          </svg>
                        </span>
                        <span className="sr-only">Fax</span>
                      </dt>
                      <dd>070-4334-5332</dd>
                    </div>
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="3" y="5" width="18" height="14" rx="2.5"></rect>
                            <path d="M4 7l8 6 8-6"></path>
                          </svg>
                        </span>
                        <span className="sr-only">Email</span>
                      </dt>
                      <dd>
                        <a href="mailto:sales@ocube.co.kr">sales@ocube.co.kr</a>
                      </dd>
                    </div>
                  </dl>{" "}
                  <a
                    className="loc-btn"
                    href="https://www.google.com/maps/search/?api=1&query=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EC%95%88%EC%96%91%EC%8B%9C%20%EB%8F%99%EC%95%88%EA%B5%AC%20LS%EB%A1%9C%20142%20%EA%B8%88%EC%A0%95%EC%97%AD%20SKV1%20%EC%84%BC%ED%84%B0"
                    target="_blank"
                    rel="noopener"
                  >
                    Open in maps{" "}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </a>{" "}
                </div>
              </article>
              <article className="loc-row rv d2">
                <div className="loc-map">
                  <iframe
                    src="https://www.google.com/maps?q=%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%88%98%EC%84%B1%EA%B5%AC%20%EC%95%8C%ED%8C%8C%EC%8B%9C%ED%8B%B01%EB%A1%9C%2031%EA%B8%B8%2018&z=16&hl=ko&output=embed"
                    title="오큐브 대구사옥 위치 지도"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="loc-card">
                  <div className="loc-card-head">
                    <div>
                      <h3 className="loc-name">OCUBE Daegu</h3>
                    </div>{" "}
                    <span className="loc-pin">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                        <circle cx="12" cy="10" r="2.6"></circle>
                      </svg>
                    </span>{" "}
                  </div>
                  <dl className="loc-dl">
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                            <circle cx="12" cy="10" r="2.6"></circle>
                          </svg>
                        </span>
                        <span className="sr-only">Address</span>
                      </dt>
                      <dd>18, Alpha City 1-ro 31-gil, Suseong-gu, Daegu, Korea</dd>
                    </div>
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <rect x="3" y="5" width="18" height="14" rx="2.5"></rect>
                            <path d="M4 7l8 6 8-6"></path>
                          </svg>
                        </span>
                        <span className="sr-only">Email</span>
                      </dt>
                      <dd>
                        <a href="mailto:sales@ocube.co.kr">sales@ocube.co.kr</a>
                      </dd>
                    </div>
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M6.5 3.5h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.7 2 2 0 0 1 6.5 3.5z"></path>
                          </svg>
                        </span>
                        <span className="sr-only">Phone</span>
                      </dt>
                      <dd>
                        <a href="tel:0533135333">053-313-5333</a>
                      </dd>
                    </div>
                    <div className="row">
                      <dt>
                        <span className="loc-ic">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M7 8V4h10v4"></path>
                            <rect x="3.5" y="8" width="17" height="8" rx="2"></rect>
                            <path d="M7 14h10v6H7z"></path>
                          </svg>
                        </span>
                        <span className="sr-only">Fax</span>
                      </dt>
                      <dd>053-313-5332</dd>
                    </div>
                  </dl>{" "}
                  <a
                    className="loc-btn"
                    href="https://www.google.com/maps/search/?api=1&query=%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%88%98%EC%84%B1%EA%B5%AC%20%EC%95%8C%ED%8C%8C%EC%8B%9C%ED%8B%B01%EB%A1%9C%2031%EA%B8%B8%2018"
                    target="_blank"
                    rel="noopener"
                  >
                    Open in maps{" "}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </a>{" "}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang="en" />
    </>
  );
}
