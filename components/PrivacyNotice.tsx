'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import Link from 'next/link';

export function PrivacyNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the notice
    const dismissed = localStorage.getItem('privacy-notice-dismissed');
    if (!dismissed) {
      setShow(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem('privacy-notice-dismissed', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gecko-green/10 border-t-2 border-gecko-green p-4 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-gray-800 flex-1">
          <span className="font-semibold text-gecko-green">Privacy-First Notice:</span> We use only essential cookies for site functionality. No tracking, no ads, no data selling.{' '}
          <Link href="/legal/cookies" className="text-gecko-green underline hover:no-underline font-medium">
            Learn more
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="flex items-center gap-2 px-4 py-2 bg-gecko-green text-white rounded-lg font-medium hover:bg-gecko-green/90 transition-colors flex-shrink-0 w-full sm:w-auto justify-center"
          aria-label="Dismiss privacy notice"
        >
          Got it
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
