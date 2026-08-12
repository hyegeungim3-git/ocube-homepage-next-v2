import type { JSX } from "react";
import type { Lang } from "@/config/i18n";
import { BackToTop } from "@/components/behavior/back-to-top";
import { CopyToast } from "@/components/behavior/copy-toast";
import { ScrollProgress } from "@/components/behavior/scroll-progress";
import { CaseFilter } from "@/components/behavior/case-filter";
import { CiTilt } from "@/components/behavior/ci-tilt";
import { DemoVideos } from "@/components/behavior/demo-videos";
import { Lightbox } from "@/components/behavior/lightbox";
import { PinDots } from "@/components/behavior/pin-dots";
import { Reveal } from "@/components/behavior/reveal";
import { TableScroll } from "@/components/behavior/table-scroll";

// 6단계에서 `site2.js` 로부터 React 로 옮겨 온 동작들을 한 자리에 모은다.
//
// 네 개의 루트 레이아웃이 이것 하나만 부르면 되므로, 기능을 하나 더 옮길 때
// 레이아웃 네 곳을 다시 손대지 않아도 된다. 여기 모인 것들은 모두
// **브라우저에서만 그리는** 조각이다 — 서버 HTML 은 예전과 같아야 한다.

export function ClientBehaviors({ lang = "ko" }: { lang?: Lang }): JSX.Element {
  return (
    <>
      <Reveal />
      <PinDots />
      <TableScroll lang={lang} />
      <DemoVideos />
      <CiTilt />
      <CaseFilter />
      <Lightbox lang={lang} />
      <ScrollProgress />
      <CopyToast lang={lang} />
      <BackToTop lang={lang} />
    </>
  );
}
