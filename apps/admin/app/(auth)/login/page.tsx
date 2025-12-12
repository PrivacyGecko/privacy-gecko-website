import { redirect } from "next/navigation";
import { validateSession } from "@/lib/auth";
import { LoginForm } from "@/components/auth/LoginForm";
import { Shield } from "lucide-react";

export default async function LoginPage() {
  // If already authenticated, redirect to dashboard
  const isAuthenticated = await validateSession();
  if (isAuthenticated) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-subtle)]">
      <div className="w-full max-w-md">
        <div className="card">
          <div className="card-body">
            {/* Logo/Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)] mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-semibold text-[var(--color-text-primary)]">
                Privacy Gecko Admin
              </h1>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                Enter your password to access the dashboard
              </p>
            </div>

            <LoginForm />
          </div>
        </div>

        <p className="text-center text-xs text-[var(--color-text-tertiary)] mt-6">
          Protected admin area. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  );
}
