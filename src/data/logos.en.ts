// 고객사·기술 파트너 로고 — references 로고 그리드 2개.

export interface Logo {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export const logoGroups: Record<"clients" | "vendors", readonly Logo[]> = {
  clients: [
    {
      src: "assets/img/client/lg-electronics.png",
      alt: "LG Electronics",
      width: "280",
      height: "90",
    },
    { src: "assets/img/client/sk-energy.png", alt: "SK Energy", width: "280", height: "90" },
    { src: "assets/img/client/ls-electric.png", alt: "LS ELECTRIC", width: "170", height: "45" },
    { src: "assets/img/client/doosan.png", alt: "두산", width: "280", height: "90" },
    {
      src: "assets/img/client/dgb-financial-group.png",
      alt: "DGB금융지주",
      width: "280",
      height: "90",
    },
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
