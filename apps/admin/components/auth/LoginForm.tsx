"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock, AlertCircle, ArrowRight, KeyRound } from "lucide-react";

export function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!password || isLoading) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || "Invalid password");
        setIsLoading(false);
        return;
      }

      router.push("/");
      router.refresh();
    } catch {
      setError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]"
        >
          <KeyRound className="w-4 h-4 text-[var(--color-accent)]" />
          Admin Password
        </label>
        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)] group-focus-within:text-[var(--color-accent)] transition-colors" />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your secret key"
            disabled={isLoading}
            className={`login-input ${error ? "login-input-error" : ""}`}
            autoFocus
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[#00F5A0] opacity-0 group-focus-within:opacity-10 transition-opacity pointer-events-none" />
        </div>
      </div>

      {error && (
        <div className="login-error animate-fade-in">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading || !password}
        className="login-button group"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Authenticating...</span>
            </>
          ) : (
            <>
              <span>Access Dashboard</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </span>
      </button>

      {/* Decorative hint */}
      <div className="text-center">
        <p className="text-xs text-[var(--color-text-muted)]">
          Hint: Check your secure notes for the admin key
        </p>
      </div>
    </form>
  );
}
