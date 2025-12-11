"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Info, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setSelectedSubject(subjectParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (submitStatus.type === "success" && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (submitStatus.type === "success" && countdown === 0) {
      router.push("/");
    }
  }, [submitStatus.type, countdown, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjkajvrk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent. We'll respond within 48 hours.",
        });
        setCountdown(3);
        form.reset();
        setSelectedSubject("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManualRedirect = () => {
    router.push("/");
  };

  return (
    <div className="bg-slate-50 rounded-2xl p-8 lg:p-10">
      <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">
        Send a message
      </h2>

      {submitStatus.type && (
        <div
          className={`p-6 rounded-xl mb-8 ${
            submitStatus.type === "success"
              ? "bg-emerald-50 border border-emerald-200"
              : "bg-red-50 border border-red-200"
          }`}
        >
          {submitStatus.type === "success" && (
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-emerald-900">{submitStatus.message}</p>
                <p className="text-sm text-emerald-700 mt-2">
                  Redirecting to homepage in {countdown} second{countdown !== 1 ? "s" : ""}...
                </p>
                <button
                  type="button"
                  onClick={handleManualRedirect}
                  className="mt-3 text-sm text-emerald-700 font-medium hover:text-emerald-800 transition-colors inline-flex items-center"
                >
                  Return now
                  <ArrowRight className="w-3 h-3 ml-1" />
                </button>
              </div>
            </div>
          )}
          {submitStatus.type === "error" && (
            <p className="text-red-800">{submitStatus.message}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} method="POST" className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="support">Technical Support</option>
            <option value="billing">Billing Question</option>
            <option value="partnership">Partnership</option>
            <option value="press">Press/Media</option>
            <option value="GeckoCore Waitlist">GeckoCore Waitlist</option>
            <option value="GeckoCore Newsletter">GeckoCore Newsletter</option>
            <option value="AI Beta Waitlist">AI Beta Waitlist</option>
            <option value="Early Adopter Waitlist">Early Adopter Waitlist</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder="How can we help you?"
          />
        </div>

        {/* Privacy Notice */}
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800">
              <p className="font-semibold mb-1">Your privacy matters</p>
              <p className="text-blue-700">
                Encrypted in transit. Never shared with third parties. Messages deleted after 90 days.{" "}
                <Link href="/legal/privacy" className="underline hover:no-underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25"
        >
          {isSubmitting ? "Sending..." : "Send message"}
        </button>
      </form>
    </div>
  );
}
