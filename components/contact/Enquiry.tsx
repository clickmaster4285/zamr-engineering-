"use client";

import Image from "next/image";
import { enquiryContent } from "@/mockData/contact";
import type { EnquiryFormField } from "@/mockData/contact";
import {
  useContactEnquiry,
  CONTACT_STATUS_MESSAGES,
} from "@/lib/useContactEnquiry";

function buildRows(fields: EnquiryFormField[]): EnquiryFormField[][] {
  const rows: EnquiryFormField[][] = [];
  let current: EnquiryFormField[] = [];
  for (const field of fields) {
    if (field.width === "full") {
      if (current.length) {
        rows.push(current);
        current = [];
      }
      rows.push([field]);
    } else {
      current.push(field);
      if (current.length === 2) {
        rows.push(current);
        current = [];
      }
    }
  }
  if (current.length) rows.push(current);
  return rows;
}

export default function Enquiry() {
  const { form, handleChange, handleSubmit, status } = useContactEnquiry();
  const { sectionNumber, sectionLabel, heading, details, socialLinks, fields, submitLabel } =
    enquiryContent;
  const rows = buildRows(fields);

  return (
    <section className="w-full bg-[var(--bg-section)] px-6 py-16 sm:px-10 sm:py-20 lg:p-[130px]">
      <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:items-start lg:gap-[231px]">
        {/* Left column — details */}
        <div className="flex w-full flex-col items-start gap-[50px] lg:w-[600px]">
          <div className="flex w-full flex-col items-start gap-[30px]">
            <div className="flex items-center gap-4">
              <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-contact-accent)]">
                {sectionNumber}
              </span>
              <span className="h-px w-[104px] bg-[var(--text-dark)]" />
              <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
                {sectionLabel}
              </span>
            </div>
            <h2 className="w-full text-[28px] font-bold leading-[36px] text-[var(--text-dark)] sm:text-[36px] sm:leading-[44px] lg:text-[56px] lg:leading-[71px]">
              {heading}
            </h2>
          </div>

          <div className="flex w-full flex-col justify-end gap-5">
            {details.map((detail) => (
              <p
                key={detail.label + detail.value}
                className="w-full text-[18px] leading-[23px] text-[var(--color-contact-blue)]"
              >
                <span className="font-normal">{detail.label} </span>
                {detail.label.toLowerCase().includes("email") ? (
                  <a
                    href={`mailto:${detail.value}`}
                    className="break-all transition-colors hover:underline"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="break-all">{detail.value}</span>
                )}
              </p>
            ))}

            <div className="flex items-center gap-6 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.alt}
                  href={link.href}
                  aria-label={link.alt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-7 w-7 items-center justify-center transition-opacity hover:opacity-70"
                >
                  <Image src={link.src} alt={link.alt} width={28} height={28} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-7 lg:w-[682px]">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={
                row.length === 2
                  ? "flex w-full flex-col gap-7 sm:flex-row sm:gap-7"
                  : "flex w-full flex-col"
              }
            >
              {row.map((field) => (
                <div
                  key={field.name}
                  className={`flex flex-col gap-2 ${row.length === 2 ? "sm:flex-1" : "w-full"}`}
                >
                  <label
                    htmlFor={field.name}
                    className="text-[12px] font-bold leading-[15px] tracking-[3px] text-[var(--text-dark)]"
                  >
                    {field.label.toUpperCase()}
                  </label>
                  {field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={form[field.name] ?? ""}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="h-[134px] w-full resize-none border-0 border-b border-[var(--border-input)] bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] outline-none placeholder:text-[var(--text-soft)]/50 transition-colors focus:border-[var(--color-contact-accent)]"
                    />
                  ) : (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={form[field.name] ?? ""}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full border-0 border-b border-[var(--border-input)] bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] outline-none placeholder:text-[var(--text-soft)]/50 transition-colors focus:border-[var(--color-contact-accent)]"
                    />
                  )}
                </div>
              ))}
            </div>
          ))}

          {status === "success" && (
            <p className="text-sm text-[var(--color-success)]">{CONTACT_STATUS_MESSAGES.success}</p>
          )}
          {status === "error" && (
            <p className="text-sm text-[var(--color-error)]">{CONTACT_STATUS_MESSAGES.error}</p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex w-full cursor-pointer items-center justify-center bg-[var(--color-contact-accent)] px-8 py-[14px] text-[16px] font-bold leading-5 tracking-[3px] uppercase text-white transition-colors duration-300 hover:bg-[var(--color-contact-dark)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "SENDING…" : submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
