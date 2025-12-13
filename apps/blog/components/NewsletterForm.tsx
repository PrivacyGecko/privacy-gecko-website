"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

type FormState = "idle" | "loading" | "success" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email || formState === "loading") return;

    setFormState("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to subscribe");
      }

      setFormState("success");
      setEmail("");
    } catch (error) {
      setFormState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  }

  // Success state
  if (formState === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-6 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-[var(--color-accent)]" />
        </div>
        <div className="text-center">
          <p className="text-[var(--color-text-primary)] font-semibold text-lg mb-1">
            You&apos;re subscribed!
          </p>
          <p className="text-[var(--color-text-secondary)] text-sm">
            Check your inbox for a confirmation email.
          </p>
        </div>
        <button
          onClick={() => setFormState("idle")}
          className="text-[var(--color-accent)] text-sm font-medium hover:underline mt-2"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={formState === "loading"}
            className="w-full px-5 py-4 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>
        <button
          type="submit"
          disabled={formState === "loading" || !email}
          className="btn-primary px-8 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shrink-0"
        >
          {formState === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Error message */}
      {formState === "error" && errorMessage && (
        <div className="flex items-center justify-center gap-2 mt-4 text-red-500 text-sm animate-fade-up">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}
