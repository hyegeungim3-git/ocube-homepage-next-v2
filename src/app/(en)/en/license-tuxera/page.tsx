import type { JSX } from "react";
import { LicenseTuxeraPage } from "@/components/pages/license-tuxera-page";

// 주소만 담당하는 얇은 진입점. 실제 화면은 두 언어가 같은 컴포넌트를 쓴다.
export default function Page(): JSX.Element {
  return <LicenseTuxeraPage lang="en" />;
}
