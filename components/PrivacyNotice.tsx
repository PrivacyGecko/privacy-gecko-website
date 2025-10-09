'use client';

import { useState, useEffect } from 'react';
import { X, Settings } from 'lucide-react';
import Link from 'next/link';

type ConsentState = 'accepted' | 'rejected' | 'essential-only' | null;

export function PrivacyNotice() {
  const [show, setShow] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(null);

  useEffect(() => {
    // Check if user has previously made a consent choice
    const storedConsent = localStorage.getItem('cookie-consent') as ConsentState;
    if (!storedConsent) {
      setShow(true);
    } else {
      setConsent(storedConsent);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setConsent('accepted');
    setShow(false);
    setShowManage(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setConsent('rejected');
    setShow(false);
    setShowManage(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem('cookie-consent', 'essential-only');
    setConsent('essential-only');
    setShow(false);
    setShowManage(false);
  };

  const openManagePreferences = () => {
    setShowManage(true);
  };

  const closeManagePreferences = () => {
    setShowManage(false);
  };

  if (!show) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      {!showManage && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gecko-green p-4 sm:p-6 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gecko-green mb-2 text-lg">
                    Your Privacy Matters
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    We respect your privacy. This website uses only essential cookies for basic functionality.
                    We use privacy-friendly Plausible Analytics (no personal data, GDPR compliant).
                    No tracking, no ads, no data selling. Ever.{' '}
                    <Link
                      href="/legal/cookies"
                      className="text-gecko-green underline hover:no-underline font-medium"
                    >
                      Learn more about our cookie policy
                    </Link>
                  </p>
                </div>
                <button
                  onClick={() => setShow(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                  aria-label="Close banner"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-gecko-green text-white rounded-lg font-medium hover:bg-gecko-green/90 transition-colors"
                  aria-label="Accept all cookies"
                >
                  Accept All
                </button>
                <button
                  onClick={handleEssentialOnly}
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                  aria-label="Accept essential cookies only"
                >
                  Essential Only
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 sm:flex-none px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                  aria-label="Reject all cookies"
                >
                  Reject All
                </button>
                <button
                  onClick={openManagePreferences}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 text-gecko-green hover:text-gecko-green/80 transition-colors font-medium"
                  aria-label="Manage cookie preferences"
                >
                  <Settings className="w-4 h-4" />
                  Manage Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manage Preferences Modal */}
      {showManage && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
                <button
                  onClick={closeManagePreferences}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close preferences"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                    <span className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full font-medium">
                      Always Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are necessary for the website to function and cannot be disabled.
                    They store your cookie consent choice and maintain basic site functionality.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">Analytics Cookies (Privacy-Friendly)</h3>
                    <span className="text-xs bg-gecko-green/10 text-gecko-green px-3 py-1 rounded-full font-medium">
                      Plausible Analytics
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    We use Plausible Analytics, a privacy-friendly, GDPR-compliant analytics tool that:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4 list-disc">
                    <li>Does not use cookies</li>
                    <li>Does not collect personal data</li>
                    <li>Does not track you across websites</li>
                    <li>Is fully open source and transparent</li>
                  </ul>
                  <Link
                    href="https://plausible.io/privacy-focused-web-analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gecko-green hover:underline inline-block mt-2"
                  >
                    Learn more about Plausible Analytics
                  </Link>
                </div>

                {/* No Tracking Notice */}
                <div className="bg-gecko-green/5 border border-gecko-green/20 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold text-gecko-green">Privacy Guarantee: </span>
                    We do not use any tracking cookies, advertising cookies, or third-party marketing tools.
                    We will never sell your data or share it with advertisers.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-6 py-2.5 bg-gecko-green text-white rounded-lg font-medium hover:bg-gecko-green/90 transition-colors"
                >
                  Accept All
                </button>
                <button
                  onClick={handleEssentialOnly}
                  className="flex-1 px-6 py-2.5 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Essential Only
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 px-6 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  Reject All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
