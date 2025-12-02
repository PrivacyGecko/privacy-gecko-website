"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Info, CheckCircle } from "lucide-react";
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

  // Pre-select subject from URL parameter
  const [selectedSubject, setSelectedSubject] = useState<string>("");

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setSelectedSubject(subjectParam);
    }
  }, [searchParams]);

  // Countdown timer for redirect after successful submission
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
          message: "Thank you! Your message has been sent successfully. We'll respond within 48 hours.",
        });
        setCountdown(3); // Reset countdown
        form.reset();
        setSelectedSubject("");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or email us directly at support@privacygecko.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleManualRedirect = () => {
    router.push("/");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl mb-6">Send Us a Message</CardTitle>

        {submitStatus.type && (
          <div
            className={`p-4 rounded-lg mb-6 ${
              submitStatus.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.type === "success" && (
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{submitStatus.message}</p>
                  <p className="text-sm mt-2">
                    Redirecting to homepage in {countdown} second{countdown !== 1 ? 's' : ''}...
                  </p>
                </div>
              </div>
            )}
            {submitStatus.type === "error" && (
              <p>{submitStatus.message}</p>
            )}
            {submitStatus.type === "success" && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleManualRedirect}
                className="mt-2"
              >
                Return to Homepage Now
              </Button>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} method="POST" className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gecko-green focus:border-transparent outline-none transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gecko-green focus:border-transparent outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gecko-green focus:border-transparent outline-none transition-all"
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
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gecko-green focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell us how we can help..."
            />
          </div>

          {/* Privacy Notice */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-700">
                <p className="font-semibold text-blue-900 mb-1">Your Privacy Matters</p>
                <p>
                  Your message is encrypted in transit (TLS). We will respond within 48 hours and never share your email with third parties.
                  Messages are retained for 90 days, then permanently deleted.{' '}
                  <Link href="/legal/privacy" className="text-gecko-green underline hover:no-underline font-medium">
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardHeader>
    </Card>
  );
}
