import { localized } from "@/i18n/localize";
// 고객사·기술 파트너 로고 — references 로고 그리드 2개.

export interface Logo {
  src: string;
  alt: string;
  width: string;
  height: string;
}

const logoGroupsKo: Record<"clients" | "vendors", readonly Logo[]> = {
  clients: [
    { src: "assets/img/client/lg-electronics.png", alt: "LG전자", width: "280", height: "90" },
    { src: "assets/img/client/sk-energy.png", alt: "SK에너지", width: "280", height: "90" },
    { src: "assets/img/client/ls-electric.png", alt: "LS ELECTRIC", width: "170", height: "45" },
    { src: "assets/img/client/doosan.png", alt: "두산", width: "280", height: "90" },
    {
      src: "assets/img/client/dgb-financial-group.png",
      alt: "DGB금융지주",
      width: "280",
      height: "90",
    },
    // 2026-08-26 리뷰로 추가한 8종. 원본은 사용자가 준 `로고` 폴더이고,
    // 기존 로고와 같은 280x90 캔버스에 광학 크기를 맞춰 넣었다.
    { src: "assets/img/client/hansol.png", alt: "한솔", width: "280", height: "90" },
    { src: "assets/img/client/hivac.png", alt: "하이박", width: "280", height: "90" },
    {
      src: "assets/img/client/sl-corporation.png",
      alt: "SL Corporation",
      width: "280",
      height: "90",
    },
    { src: "assets/img/client/samsung.png", alt: "삼성", width: "280", height: "90" },
    { src: "assets/img/client/encore.png", alt: "엔코아", width: "280", height: "90" },
    { src: "assets/img/client/lg-magna.png", alt: "LG마그나", width: "280", height: "90" },
    { src: "assets/img/client/hyundai.png", alt: "현대자동차", width: "280", height: "90" },
    { src: "assets/img/client/hyundai-mobis.png", alt: "현대모비스", width: "280", height: "90" },
  ],
  vendors: [
    { src: "assets/img/vlogo/qt.png", alt: "Qt", width: "240", height: "70" },
    { src: "assets/img/vlogo/telit.png", alt: "Telit Cinterion", width: "308", height: "163" },
    { src: "assets/img/vlogo/toradex.png", alt: "Toradex", width: "240", height: "70" },
    { src: "assets/img/vlogo/visualon.png", alt: "VisualOn", width: "240", height: "70" },
    { src: "assets/img/vlogo/tuxera.png", alt: "Tuxera", width: "418", height: "117" },
    { src: "assets/img/vlogo/protopie.png", alt: "ProtoPie", width: "411", height: "94" },
  ],
};

// 두 언어. 화면에서는 logoGroups[lang] 처럼 언어로 먼저 고른다.
// 영어는 i18n/*.json 사전에서 그리는 시점에 만들어진다 (src/i18n/localize.ts).
export const logoGroups = localized(logoGroupsKo);
