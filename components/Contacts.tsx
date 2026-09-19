"use client";

import { contactSection } from "@/mockData/landing";
import {
  useContactEnquiry,
  CONTACT_STATUS_MESSAGES,
  type ContactFormData,
} from "@/lib/useContactEnquiry";

const inputClassName =
  "w-full border-0 border-b border-[var(--border-input)] bg-transparent py-2.5 text-xs leading-[15px] text-[var(--text-heading)] placeholder:text-[var(--text-soft)]/50 transition-colors focus:border-[var(--color-primary)] focus:outline-none";

const labelClassName =
  "block text-[10px] font-bold leading-[13px] text-[var(--text-heading)] lg:text-xs lg:leading-[15px] lg:tracking-[3px]";

type Props = {
  bgcolor?: string;
};

export default function Contact({ bgcolor = "bg-white" }: Props) {
  const { form, handleChange, handleSubmit, status, errors } =
    useContactEnquiry();
  const {
    sectionNumber,
    sectionLabel,
    heading,
    details,
    formFields,
    submitLabel,
    sendingLabel,
  } = contactSection;

  const halfFields = formFields.filter((f) => f.half);
  const fullFields = formFields.filter((f) => !f.half);

  const renderField = (field: (typeof formFields)[number]) => {
    const value = form[field.name as keyof ContactFormData] ?? "";
    const error = errors[field.name];

    return (
      <div key={field.id} className="flex w-full flex-col gap-2">
        <label htmlFor={field.id} className={labelClassName}>
          {field.label}
        </label>
        {field.type === "textarea" ? (
          <textarea
            id={field.id}
            name={field.name}
            rows={5}
            value={value}
            onChange={handleChange}
            placeholder={field.placeholder}
            className={`${inputClassName} h-[133.5px] resize-none`}
          />
        ) : (
          <input
            id={field.id}
            name={field.name}
            type={field.type ?? "text"}
            value={value}
            onChange={handleChange}
            placeholder={field.placeholder}
            minLength={field.name === "phone" ? 7 : undefined}
            maxLength={field.name === "phone" ? 15 : undefined}
            className={`${inputClassName} h-[43.5px]`}
          />
        )}
        {error && (
          <p className="text-xs text-[var(--color-error)]">{error}</p>
        )}
      </div>
    );
  };

  return (
    <section
      className={`w-full ${bgcolor} px-[30px] py-[30px] lg:px-[77px] lg:py-[77px] 2xl:p-[130px]`}
    >
      <div className="flex w-full flex-col items-center gap-8 lg:gap-10 2xl:flex-row 2xl:items-center 2xl:gap-[231px]">
        {/* Left — heading + details */}
        <div className="flex w-full flex-col gap-[11px] lg:gap-[30px] 2xl:w-[555px] 2xl:shrink-0 2xl:gap-[50px]">
          <div className="flex flex-col gap-[7px] lg:gap-[18px] 2xl:gap-[30px]">
            <div className="flex items-center gap-[4px] lg:gap-[9.5px] 2xl:gap-4">
              <span className="text-sm font-medium leading-[18px] tracking-[0.68px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.78px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                {sectionNumber}
              </span>
              <span className="h-px w-[24px] bg-[var(--text-heading)] lg:w-[62px] 2xl:w-[104px]" />
              <span className="text-[12px] font-medium leading-[15px] tracking-[3px] uppercase text-[var(--text-section-label)]">
                {sectionLabel}
              </span>
            </div>
            <h2 className="text-[36px] font-bold leading-[45px] text-[var(--text-heading)] lg:text-[33px] lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
              {heading}
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {details.map((line) => (
              <p
                key={line.label}
                className="text-xs leading-[15px] [font-feature-settings:'liga'_off] 2xl:text-lg 2xl:leading-[23px]"
              >
                <span className=" text-[var(--color-primary)]">
                {line.label}:{" "}

                </span>
                {line.href ? (
                  <a
                    href={line.href}
                    className="transition-opacity hover:opacity-70"
                  >
                    {line.value}
                  </a>
                ) : (
                  line.value
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-7 2xl:w-[682px] 2xl:shrink-0"
        >
          {/* Row pairs: name/email, phone/origination */}
          <div className="flex w-full flex-col gap-7">
            <div className="grid grid-cols-2 gap-6">
              {halfFields.slice(0, 2).map(renderField)}
            </div>
            <div className="grid grid-cols-2 gap-7">
              {halfFields.slice(2, 4).map(renderField)}
            </div>
          </div>

          {fullFields.map(renderField)}

          {status === "success" && (
            <p className="text-sm text-[var(--color-success)]">
              {CONTACT_STATUS_MESSAGES.success}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-[var(--color-error)]">
              {CONTACT_STATUS_MESSAGES.error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex h-12 w-full items-center justify-center bg-[var(--color-primary)] px-4 text-base font-bold leading-5 tracking-[3px] uppercase text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? sendingLabel : submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
