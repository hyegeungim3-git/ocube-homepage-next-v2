// 서브페이지 히어로 문구. 배지·제목·리드·핵심 포인트를 여기서 고친다.
// lead 는 토큰 배열이다: 문자열은 그대로, "br" 은 문장 구분 줄바꿈, "wbr" 은 줄바꿈 기회.
export interface HeroData {
  decor: readonly (
    | { kind: "bg"; image: string }
    | { kind: "veil" }
    | { kind: "cube"; hidden: boolean }
  )[];
  id?: string;
  wrapStyle?: React.CSSProperties;
  badge: string;
  title: string;
  lead: readonly string[];
  keys: readonly { k: string; v: string }[];
}

export const heroes: Record<string, HeroData> = {
  "company": {
    "id": "top",
    "decor": [
      {
        "kind": "bg",
        "image": "assets/video/company_wire_face.jpg"
      },
      {
        "kind": "veil"
      },
      {
        "kind": "cube",
        "hidden": false
      }
    ],
    "badge": "COMPANY · HISTORY",
    "title": "History",
    "lead": [
      "From our founding in 2007 to today — how the business grew, the partnerships we formed, and the certifications and awards along the way."
    ],
    "keys": [
      {
        "k": "Founded",
        "v": "March 2007"
      },
      {
        "k": "Business",
        "v": "Embedded · SI · industrial AI"
      },
      {
        "k": "Partners",
        "v": "Six global software vendors"
      }
    ]
  },
  "license-protopie": {
    "decor": [
      {
        "kind": "bg",
        "image": "assets/video/business_robot_arm.jpg"
      },
      {
        "kind": "veil"
      }
    ],
    "badge": "GLOBAL PARTNER · PROTOPIE",
    "title": "ProtoPie — prototyping interactions that feel real",
    "lead": [
      "Designers build screens that move like the finished product, without writing code,",
      "br",
      " and test the flow and the interactions before development begins."
    ],
    "keys": [
      {
        "k": "Prototyping",
        "v": "Like the real thing, without code"
      },
      {
        "k": "Connections",
        "v": "Multiple devices · sensor interactions"
      },
      {
        "k": "OCUBE support",
        "v": "Adoption · training · design systems"
      }
    ],
    "wrapStyle": {
      "position": "relative",
      "zIndex": "3"
    }
  },
  "license-qt": {
    "decor": [
      {
        "kind": "bg",
        "image": "assets/video/business_robot_arm.jpg"
      },
      {
        "kind": "veil"
      }
    ],
    "badge": "GLOBAL PARTNER · QT",
    "title": "Qt — software for more than one platform",
    "lead": [
      "One codebase builds applications for desktop and for embedded devices,",
      "br",
      " and the operator interface (HMI) is developed in the same framework."
    ],
    "keys": [
      {
        "k": "Framework",
        "v": "Essential modules · add-ons per project"
      },
      {
        "k": "Development tools",
        "v": "Qt Creator · qmake · CMake"
      },
      {
        "k": "OCUBE support",
        "v": "Licensing · consulting · training"
      }
    ],
    "wrapStyle": {
      "position": "relative",
      "zIndex": "3"
    }
  },
  "license-telit": {
    "decor": [
      {
        "kind": "bg",
        "image": "assets/video/business_robot_arm.jpg"
      },
      {
        "kind": "veil"
      }
    ],
    "badge": "GLOBAL PARTNER · TELIT CINTERION",
    "title": "Telit Cinterion — cellular modules for industrial IoT",
    "lead": [
      "Modules and services that put industrial equipment, vehicles and asset trackers",
      "br",
      " on the mobile network — machine-to-machine and IoT."
    ],
    "keys": [
      {
        "k": "Modules",
        "v": "M2M and IoT cellular modules"
      },
      {
        "k": "Positioning",
        "v": "GPS and GLONASS supported"
      },
      {
        "k": "OCUBE support",
        "v": "Design review · certification · supply"
      }
    ],
    "wrapStyle": {
      "position": "relative",
      "zIndex": "3"
    }
  },
  "license-toradex": {
    "decor": [
      {
        "kind": "bg",
        "image": "assets/video/business_robot_arm.jpg"
      },
      {
        "kind": "veil"
      }
    ],
    "badge": "GLOBAL PARTNER · TORADEX",
    "title": "Toradex — embedded computing modules",
    "lead": [
      "Toradex supplies computer modules (SoMs) with processor and memory, plus carrier boards.",
      "br",
      " A proven module cuts development effort and launch time."
    ],
    "keys": [
      {
        "k": "Products",
        "v": "SoMs and carrier boards"
      },
      {
        "k": "Strengths",
        "v": "Long-term supply · a family to grow into"
      },
      {
        "k": "OCUBE support",
        "v": "BSP work · engineering support"
      }
    ],
    "wrapStyle": {
      "position": "relative",
      "zIndex": "3"
    }
  },
  "license-tuxera": {
    "decor": [
      {
        "kind": "bg",
        "image": "assets/video/business_robot_arm.jpg"
      },
      {
        "kind": "veil"
      }
    ],
    "badge": "GLOBAL PARTNER · TUXERA",
    "title": "Tuxera — storing data, and getting it back",
    "lead": [
      "File systems and flash management that keep data safe in vehicles,",
      "br",
      " phones and industrial equipment — and bring it back when something goes wrong."
    ],
    "keys": [
      {
        "k": "File systems",
        "v": "Reliance Nitro · FlashFX Tera"
      },
      {
        "k": "Why it matters",
        "v": "Survives power loss · extends flash life"
      },
      {
        "k": "OCUBE support",
        "v": "Porting · performance verification"
      }
    ],
    "wrapStyle": {
      "position": "relative",
      "zIndex": "3"
    }
  },
  "license-visualon": {
    "decor": [
      {
        "kind": "bg",
        "image": "assets/video/business_robot_arm.jpg"
      },
      {
        "kind": "veil"
      }
    ],
    "badge": "GLOBAL PARTNER · VISUALON",
    "title": "VisualOn — SDKs for multimedia playback",
    "lead": [
      "SDKs and codecs for dependable video playback —",
      "br",
      " in streaming services, in-vehicle infotainment, smart TVs and set-top boxes."
    ],
    "keys": [
      {
        "k": "Players",
        "v": "OnStream · ExoPlayer+ · AVPlayer+"
      },
      {
        "k": "Quality",
        "v": "UX monitoring · software codecs"
      },
      {
        "k": "OCUBE support",
        "v": "Device integration · tuning"
      }
    ],
    "wrapStyle": {
      "position": "relative",
      "zIndex": "3"
    }
  },
  "location": {
    "id": "top",
    "decor": [
      {
        "kind": "bg",
        "image": "assets/video/company_wire_face.jpg"
      },
      {
        "kind": "veil"
      }
    ],
    "badge": "COMPANY · LOCATION",
    "title": "Locations",
    "lead": [
      "Addresses and contact details for our Seoul, Anyang and Daegu offices.",
      "br",
      " Find the office you are visiting, and its map, below."
    ],
    "keys": [
      {
        "k": "Seoul",
        "v": "KM Building, Gangseo-gu"
      },
      {
        "k": "Anyang",
        "v": "Geumjeong Station SKV1"
      },
      {
        "k": "Daegu",
        "v": "Alpha City, Suseong-gu"
      }
    ]
  },
  "references": {
    "id": "top",
    "decor": [
      {
        "kind": "cube",
        "hidden": true
      },
      {
        "kind": "veil"
      }
    ],
    "badge": "REFERENCES",
    "title": "Build cases",
    "lead": [
      "Projects across manufacturing, energy, mobility, public, finance, home AIoT and enterprise services.",
      "br",
      " Each shows engagement type, client and field."
    ],
    "keys": [
      {
        "k": "Sectors",
        "v": "Manufacturing · energy · mobility · public · finance · home AIoT · enterprise services"
      },
      {
        "k": "Engagement",
        "v": "B2B · B2G · global"
      }
    ]
  }
};
