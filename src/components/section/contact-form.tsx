"use client";

import type { JSX, ReactNode } from "react";
import { useState } from "react";
import type { Lang } from "@/config/i18n";

// 문의 폼. 6단계에서 site2.js 의 25-contact-mail.js 를 대신한다.
//
// 서버에 저장하지 않고 사용자의 이메일 앱에 내용을 실어 보낸다(보내는 방식은 사용자 결정 대기).
// 폼 안쪽(라벨·입력칸)은 서버가 그린 그대로 children 으로 받는다 — 여기서는 제출만 맡는다.

const TO = "sales@ocube.co.kr";

const TEXT = {
  ko: {
    subject: (type: string, name: string) => `[오큐브 홈페이지 문의] ${type} - ${name}`,
    type: "문의 유형: ",
    name: "성함 / 회사: ",
    from: "회신 이메일: ",
    body: "문의 내용",
    sent: `이메일 앱에서 내용을 확인한 뒤 전송해 주세요. 앱이 열리지 않으면 ${TO}로 보내 주세요.`,
  },
  en: {
    subject: (type: string, name: string) => `[OCUBE enquiry] ${type} - ${name}`,
    type: "Type: ",
    name: "Name / company: ",
    from: "Reply to: ",
    body: "Message",
    sent: `Please review the draft in your email app and send it. If the app does not open, write to ${TO}.`,
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
    const type = value("f-type");
    const name = value("f-name");

    const body = [
      text.type + type,
      text.name + name,
      text.from + value("f-mail"),
      "",
      text.body,
      value("f-msg"),
    ].join("\n");

    setStatus(text.sent);
    window.location.href =
      `mailto:${TO}?subject=` +
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
