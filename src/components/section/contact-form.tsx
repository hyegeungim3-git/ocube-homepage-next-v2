"use client";

import type { JSX, ReactNode } from "react";
import { useState } from "react";
import type { Lang } from "@/config/i18n";
import { recipientsFor } from "@/data/enquiry-recipients";

// 문의 폼. 6단계에서 site2.js 의 25-contact-mail.js 를 대신한다.
//
// 서버에 저장하지 않고 사용자의 이메일 앱에 내용을 실어 보낸다(보내는 방식은 사용자 결정 대기).
// 폼 안쪽(라벨·입력칸)은 서버가 그린 그대로 children 으로 받는다 — 여기서는 제출만 맡는다.
//
// 받는 사람은 **문의 유형에 따라 달라진다** (2026-08-26 리뷰).
// select 의 value 가 곧 담당자를 찾는 key 이고, 메일 본문에 적는 유형 이름은 보이는 글자다.

const TEXT = {
  ko: {
    subject: (type: string, name: string) => `[오큐브 홈페이지 문의] ${type} - ${name}`,
    type: "문의 유형: ",
    name: "성함 / 회사: ",
    from: "회신 이메일: ",
    body: "문의 내용",
    sent: (to: string) =>
      `이메일 앱에서 내용을 확인한 뒤 전송해 주세요. 앱이 열리지 않으면 ${to}로 보내 주세요.`,
  },
  en: {
    subject: (type: string, name: string) => `[OCUBE enquiry] ${type} - ${name}`,
    type: "Type: ",
    name: "Name / company: ",
    from: "Reply to: ",
    body: "Message",
    sent: (to: string) =>
      `Please review the draft in your email app and send it. If the app does not open, write to ${to}.`,
  },
} as const;

export function ContactForm({
  children,
  lang = "ko",
}: {
  children: ReactNode;
  lang?: Lang;
}): JSX.Element {
  const [status, setStatus] = useState("");
  const text = TEXT[lang];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const value = (id: string): string =>
      (document.getElementById(id) as HTMLInputElement | null)?.value.trim() ?? "";

    const select = document.getElementById("f-type") as HTMLSelectElement | null;
    // 담당자는 key 로 찾고, 메일에 적는 유형 이름은 사람이 읽는 글자로 (언어에 따라 달라진다)
    const to = recipientsFor(select?.value ?? "").join(",");
    const type = select?.selectedOptions[0]?.text.trim() ?? "";
    const name = value("f-name");

    const body = [
      text.type + type,
      text.name + name,
      text.from + value("f-mail"),
      "",
      text.body,
      value("f-msg"),
    ].join("\n");

    setStatus(text.sent(to.replace(/,/g, ", ")));
    window.location.href =
      `mailto:${to}?subject=` +
      encodeURIComponent(text.subject(type, name)) +
      "&body=" +
      encodeURIComponent(body);
  };

  return (
    <form
      className="form reveal"
      data-contact-form=""
      data-d="1"
      aria-describedby="form-note form-status"
      onSubmit={onSubmit}
    >
      {children}
      <p id="form-status" className="form-status" role="status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
