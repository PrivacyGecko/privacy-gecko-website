"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Info } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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
            {submitStatus.message}
          </div>
        )}

        <form action="https://formspree.io/f/xovkyqdp" method="POST" className="space-y-6">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gecko-green focus:border-transparent outline-none transition-all"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="partnership">Partnership</option>
              <option value="press">Press/Media</option>
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
                  Your message is encrypted in transit (TLS). We'll respond within 48 hours and never share your email with third parties.
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
          >
            Send Message
          </Button>
        </form>
      </CardHeader>
    </Card>
  );
}
