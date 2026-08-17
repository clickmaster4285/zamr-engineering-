"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactStatus = "idle" | "sending" | "success" | "error";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export const CONTACT_STATUS_MESSAGES: Record<"success" | "error", string> = {
  success: "Your message has been sent successfully. We'll get back to you within 1\u20132 business days.",
  error: "Something went wrong. Please try again or email us directly.",
};

export function useContactEnquiry() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<ContactStatus>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setForm(INITIAL_FORM);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return { form, handleChange, handleSubmit, status };
}
