import { redirect } from "next/navigation";
import { validateSession } from "@/lib/auth";
import { LoginForm } from "@/components/auth/LoginForm";
import { Shield, Sparkles, Lock } from "lucide-react";

export default async function LoginPage() {
  // If already authenticated, redirect to dashboard
  const isAuthenticated = await validateSession();
  if (isAuthenticated) {
    redirect("/");
  }

  return (
    <div className="login-container">
      {/* Animated background orbs */}
      <div className="login-orb login-orb-1" />
      <div className="login-orb login-orb-2" />
      <div className="login-orb login-orb-3" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo floating above card */}
        <div className="text-center mb-8 animate-slide-up">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[#00F5A0] shadow-2xl shadow-[var(--color-accent)]/30 mb-6 relative group">
            <span className="text-4xl transform group-hover:scale-110 transition-transform">
              🦎
            </span>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[#00F5A0] opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)] tracking-tight">
            Privacy Gecko
          </h1>
          <div className="flex items-center justify-center gap-2 mt-2">
            <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
            <span className="text-sm text-[var(--color-text-tertiary)] uppercase tracking-widest font-medium">
              Admin Portal
            </span>
            <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
          </div>
        </div>

        {/* Login card */}
        <div className="login-card animate-scale-in">
          <div className="login-card-header">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent-subtle)] flex items-center justify-center">
                <Lock className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h2 className="font-semibold text-[var(--color-text-primary)]">
                  Secure Access
                </h2>
                <p className="text-xs text-[var(--color-text-tertiary)]">
                  Enter your credentials to continue
                </p>
              </div>
            </div>
          </div>

          <div className="login-card-body">
            <LoginForm />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center justify-center gap-3 text-xs text-[var(--color-text-muted)]">
            <Shield className="w-3.5 h-3.5" />
            <span>Protected admin area</span>
            <span className="text-[var(--color-border-strong)]">•</span>
            <span>Unauthorized access prohibited</span>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-[var(--color-text-muted)]">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            <span>System Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
