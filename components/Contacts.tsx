"use client";

import { contactSection } from "@/mockData/landing";
import {
  useContactEnquiry,
  CONTACT_STATUS_MESSAGES,
  type ContactFormData,
} from "@/lib/useContactEnquiry";

const inputClassName =
  "w-full border-0 border-b border-[var(--border-input)] bg-transparent py-2.5 text-[15px] leading-[19px] text-[var(--text-heading)] placeholder:text-[var(--text-soft)]/50 transition-colors focus:border-[var(--color-primary)] focus:outline-none lg:text-xs lg:leading-[15px]";

const labelClassName =
  "block text-[13px] font-bold leading-4 tracking-[2px] uppercase text-[var(--text-heading)] lg:text-xs lg:leading-[15px] lg:tracking-[3px] lg:normal-case";

type Props = {
  bgcolor?: string;
  sectionNumber: string;
};

export default function Contact({
  bgcolor = "bg-[var(--bg-section)]",
  sectionNumber,
}: Props) {
  const { form, handleChange, handleSubmit, status, errors } =
    useContactEnquiry();
  const {
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
            className={`${inputClassName} h-[100px] resize-none lg:h-[133.5px]`}
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
            className={`${inputClassName} h-[39px] lg:h-[43.5px]`}
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
      className={`w-full ${bgcolor} px-5 py-12 lg:px-[77.037px] lg:py-[77.037px] 2xl:p-[130px]`}
    >
      <div className="flex w-full flex-col items-start gap-10 lg:items-center lg:gap-10 2xl:flex-row 2xl:items-center 2xl:gap-[231px]">
        {/* Left — heading + details */}
        <div className="flex w-full flex-col items-start gap-6 lg:gap-[29.63px] 2xl:w-[555px] 2xl:shrink-0 2xl:gap-[50px]">
          <div className="flex w-full flex-col items-start gap-3 lg:gap-[17.78px] 2xl:gap-[30px]">
            <div className="flex flex-row items-center gap-3 lg:gap-[9.48px] 2xl:gap-4">
              <span className="text-sm font-medium leading-[18px] text-[var(--color-primary)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5 2xl:tracking-[3px]">
                {sectionNumber}
              </span>
              <span className="h-px w-10 bg-[var(--color-contact-dark)] lg:w-[61.63px] lg:bg-[var(--text-heading)] 2xl:w-[104px]" />
              <span className="text-sm font-medium leading-[18px] tracking-[3px] uppercase text-[var(--text-heading)] lg:text-[13px] lg:leading-4 lg:tracking-[1.77778px] 2xl:text-base 2xl:leading-5">
                {sectionLabel}
              </span>
            </div>

            <h2 className="w-full text-[28px] font-semibold leading-[35px] text-[var(--text-heading)] lg:text-[33.1852px] lg:font-bold lg:leading-[42px] 2xl:text-[56px] 2xl:leading-[71px]">
              {heading}
            </h2>
          </div>

          <div className="flex w-full flex-col items-start gap-4 lg:gap-[11.85px] 2xl:gap-5">
            {details.map((line) => {
              const Component = line.href ? "a" : "p";

              return (
                <Component
                  key={`${line.label}-${line.value}`}
                  {...(line.href ? { href: line.href } : {})}
                  className={`w-full text-[15px]  leading-[19px] [font-feature-settings:'liga'_off] lg:text-[13px] lg:font-normal lg:leading-4  2xl:text-lg 2xl:leading-[23px] ${
                    line.label === "Phone" ? "lg:capitalize" : ""
                  } ${line.href ? "transition-opacity hover:opacity-70" : ""}`}
                >
                  <span className="text-[var(--color-primary)] ">{line.label}: </span> <span> {line.value} </span>
                 </Component>
              );
            })}
          </div>

        </div>

        {/* Right — form */}
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col items-start gap-6 lg:gap-7 2xl:w-[682px] 2xl:shrink-0"
        >
          <div className="flex w-full flex-col gap-6 lg:gap-7">
            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
              {halfFields.slice(0, 2).map(renderField)}
            </div>
            <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
              {halfFields.slice(2, 4).map(renderField)}
            </div>
            {fullFields.map(renderField)}
          </div>

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
            className="flex h-[47px] w-full items-center justify-center bg-[var(--color-primary)] px-4 text-[15px] font-bold leading-[19px] tracking-[3px] uppercase text-white transition-opacity hover:bg-white hover:text-[var(--color-primary)] hover:border hover:border-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60 lg:h-12 lg:text-base lg:leading-5"
          >
            {status === "sending" ? sendingLabel : submitLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
