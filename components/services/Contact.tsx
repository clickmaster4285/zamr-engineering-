"use client";

import {
  useContactEnquiry,
  CONTACT_STATUS_MESSAGES,
} from "@/lib/useContactEnquiry";

interface Props {
  number?: string;
  serviceTitle?: string;
}

export default function Contact({ number = "06", serviceTitle = "Civil Engineering" }: Props) {
  const { form, handleChange, handleSubmit, status, errors } = useContactEnquiry();

  return (
    <section className="w-full bg-white px-6 py-16 lg:p-[130px]" style={{ background: "var(--bg-section)" }}>
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-[231px]">
        <div className="flex w-full flex-col gap-[50px] lg:w-[755px]">
          <div className="flex w-full flex-col gap-[30px]">
            <div className="flex flex-row items-center gap-4">
              <span className="text-[16px] font-medium leading-5 tracking-[3px] text-[var(--color-blue-accent)]">
                {number}
              </span>
              <span className="h-px w-[104px] bg-[var(--text-dark)]" />
              <span className="text-[16px] font-medium leading-5 tracking-[3px] uppercase text-[var(--text-dark)]">
                CONTACT
              </span>
            </div>
            {/* headline */}
            <h2 className="w-full text-[32px] font-bold leading-[40px] text-[var(--text-heading)] sm:text-[44px] sm:leading-[55px] lg:text-[56px] lg:leading-[71px]">
              Let's Build Something Exceptional.
            </h2>
          </div>

          <div className="flex w-full flex-col text-base justify-end gap-5">
            
            <p className="w-full text-[18px] leading-[23px] ">
              <span className="text-primary">Company Name:</span>  ZAMR Engineering Pty Ltd
            </p>
            <p className="w-full text-[18px] leading-[23px] ">
              <span className="text-primary">Address 1:</span> 30 Smith Street Wentworthville NSW, 2145
            </p>
            <p className="w-full text-[18px] leading-[23px] ">
              <span className="text-primary">Address 2:</span>  L14, 3 Parramatta Square, 153 Macquarie St, Parramatta, NSW 2150 
            </p>
            <p className="w-full text-[18px] leading-[23px] ">
              <span className="text-primary">Email:</span>  admin@zamrengineering.com.au 
            </p>
            <p className="w-full text-[18px] leading-[23px] ">
              <span className="text-primary">Phone:</span>  02 9688 5322  
            </p>
            <p className="w-full text-[18px] leading-[23px] ">
              <span className="text-primary">Email:</span>  khalid.javed@zamrengineering.com.au
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-7 lg:w-[682px]"
        >
          <div className="flex flex-col gap-7 sm:flex-row sm:gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-dark)]"
              >
                NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
                style={{ borderBottom: "1px solid var(--color-border-input)" }}
              />
              {errors.name && (
                <p className="text-[12px] leading-[15px] text-[var(--color-error)]">{errors.name}</p>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-dark)]"
              >
                BUSINESS EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com.au"
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
                style={{ borderBottom: "1px solid var(--color-border-input)" }}
              />
              {errors.email && (
                <p className="text-[12px] leading-[15px] text-[var(--color-error)]">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-7 sm:flex-row sm:gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="designation"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-dark)]"
              >
                DESIGNATION
              </label>
              <input
                id="designation"
                name="designation"
                type="text"
                value={form.designation}
                onChange={handleChange}
                placeholder="Project Manager"
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
                style={{ borderBottom: "1px solid var(--color-border-input)" }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-dark)]"
              >
                BUSINESS PHONE NUMBER
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+61 400 000 000"
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
                style={{ borderBottom: "1px solid var(--color-border-input)" }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-7 sm:flex-row sm:gap-6">
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="company"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-dark)]"
              >
                COMPANY NAME
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Company Pty Ltd"
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
                style={{ borderBottom: "1px solid var(--color-border-input)" }}
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <label
                htmlFor="website"
                className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-dark)]"
              >
                COMPANY WEBSITE
              </label>
              <input
                id="website"
                name="website"
                type="url"
                value={form.website}
                onChange={handleChange}
                placeholder="https://company.com.au"
                className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
                style={{ borderBottom: "1px solid var(--color-border-input)" }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-dark)]"
            >
              SUBJECT
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              placeholder="Project enquiry"
              className="w-full border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
              style={{ borderBottom: "1px solid var(--color-border-input)" }}
            />
            {errors.subject && (
              <p className="text-[12px] leading-[15px] text-[var(--color-error)]">{errors.subject}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-[12px] font-bold leading-[14px] tracking-[3px] text-[var(--text-dark)]"
            >
              PROJECT DETAILS
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              className="w-full resize-none border-0 border-b bg-transparent py-[10px] text-[12px] leading-[15px] text-[var(--text-dark)] placeholder-[var(--color-text-soft)]/50 transition-colors focus:outline-none"
              style={{ borderBottom: "1px solid var(--color-border-input)" }}
            />
            {errors.message && (
              <p className="text-[12px] leading-[15px] text-[var(--color-error)]">{errors.message}</p>
            )}
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
            className="mt-2 w-full hover:bg-[var(--color-primary)] text-[var(--color-primary)] hover:text-white border border-[var(--color-primary)]  py-4 text-sm font-bold tracking-[0.3em] transition-all bg-[var(--bg-light)] text-[var(--color-primary) sm:mt-4 sm:text-base disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "SENDING…" : "SUBMIT ENQUIRY"}
          </button>
        </form>
      </div>
    </section>
  );
}
