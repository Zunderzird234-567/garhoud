"use client";

import { useState } from "react";
import { submitContactForm, type ContactPayload } from "@/lib/submit-contact";

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export function useSubmitContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const submit = async (payload: ContactPayload, form?: HTMLFormElement) => {
    setStatus("loading");
    try {
      const response = await submitContactForm(payload);
      if (!response.ok) {
        setStatus("error");
        return false;
      }
      if (form) {
        form.reset();
      }
      setStatus("success");
      return true;
    } catch (error) {
      setStatus("error");
      return false;
    }
  };

  return {
    status,
    isSubmitting: status === "loading",
    submit,
    reset: () => setStatus("idle"),
  };
}
