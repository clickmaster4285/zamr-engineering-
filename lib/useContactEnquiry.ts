"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  // Optional fields used by the /contact page form
  designation?: string;
  company?: string;
  website?: string;
  phone?: string;
}

export type ContactStatus = "idle" | "sending" | "success" | "error";

export type ContactErrors = Partial<Record<string, string>>;

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  designation: "",
  company: "",
  website: "",
  phone: "",
};

const REQUIRED_FIELDS = ["name", "email", "subject", "message"] as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const CONTACT_VALIDATION_MESSAGES = {
  required: "Please enter this field.",
  invalidEmail: "Please enter a valid email address.",
};

export const CONTACT_STATUS_MESSAGES: Record<"success" | "error", string> = {
  success: "Your message has been sent successfully. We'll get back to you within 1\u20132 business days.",
  error: "Something went wrong. Please try again or email us directly.",
};

export function useContactEnquiry() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [errors, setErrors] = useState<ContactErrors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!(name in prev)) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const validate = (): ContactErrors => {
    const next: ContactErrors = {};
    if (!form.name.trim()) next.name = CONTACT_VALIDATION_MESSAGES.required;
    if (!form.email.trim()) next.email = CONTACT_VALIDATION_MESSAGES.required;
    else if (!EMAIL_REGEX.test(form.email.trim()))
      next.email = CONTACT_VALIDATION_MESSAGES.invalidEmail;
    if (!form.subject.trim()) next.subject = CONTACT_VALIDATION_MESSAGES.required;
    if (!form.message.trim()) next.message = CONTACT_VALIDATION_MESSAGES.required;
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      const firstField = REQUIRED_FIELDS.find((field) => nextErrors[field]);
      if (firstField) document.getElementById(firstField)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setForm(INITIAL_FORM);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return { form, handleChange, handleSubmit, status, errors };
}
