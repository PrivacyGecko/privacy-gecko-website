"use client";

import { useState, FormEvent } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

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
      <div className="flex flex-col items-center gap-3 py-4 animate-fade-up">
        <CheckCircle className="w-10 h-10 text-[var(--color-accent)]" />
        <p className="text-[var(--color-text-primary)] font-medium">
          You&apos;re subscribed!
        </p>
        <p className="text-[var(--color-text-secondary)] text-sm">
          Check your inbox for a confirmation email.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="text-[var(--color-accent)] text-sm hover:underline mt-2"
        >
          Subscribe another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={formState === "loading"}
          className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)] placeholder-[var(--color-text-tertiary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/20 focus:border-[var(--color-accent)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          required
        />
        <button
          type="submit"
          disabled={formState === "loading" || !email}
          className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {formState === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>

      {/* Error message */}
      {formState === "error" && errorMessage && (
        <div className="flex items-center gap-2 mt-3 text-red-500 text-sm animate-fade-up">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <p className="text-[var(--color-text-tertiary)] text-xs mt-4 text-center">
        No spam. Privacy respected. Unsubscribe anytime.
      </p>
    </form>
  );
}
