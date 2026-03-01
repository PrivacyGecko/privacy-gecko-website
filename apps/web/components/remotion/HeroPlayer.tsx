"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const RemotionPlayer = dynamic(
  () =>
    import("@remotion/player").then((mod) => {
      const { Player } = mod;
      const { PrivacyShield } = require("./PrivacyShield");

      function PlayerWrapper() {
        return (
          <Player
            component={PrivacyShield}
            durationInFrames={240}
            compositionWidth={500}
            compositionHeight={500}
            fps={30}
            loop
            autoPlay
            style={{
              width: "100%",
              height: "100%",
              background: "transparent",
            }}
            controls={false}
            inputProps={{}}
          />
        );
      }
      PlayerWrapper.displayName = "PlayerWrapper";
      return PlayerWrapper;
    }),
  {
    ssr: false,
    loading: () => <ShieldFallback />,
  }
);

function ShieldFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg
        viewBox="-150 -150 300 300"
        className="w-full h-full max-w-[500px] max-h-[500px] opacity-20"
      >
        <circle cx="0" cy="0" r="120" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="95" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="70" fill="none" stroke="#E2E8F0" strokeWidth="0.8" />
        <path
          d="M 0 -50 L 40 -30 L 40 20 L 0 50 L -40 20 L -40 -30 Z"
          fill="rgba(0, 217, 138, 0.05)"
          stroke="rgba(0, 217, 138, 0.2)"
          strokeWidth="1.2"
        />
        <rect x="-10" y="-5" width="20" height="16" rx="3" fill="none" stroke="rgba(0, 217, 138, 0.25)" strokeWidth="1.5" />
        <path d="M -6 -5 L -6 -12 A 6 6 0 0 1 6 -12 L 6 -5" fill="none" stroke="rgba(0, 217, 138, 0.25)" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="0" cy="3" r="2" fill="rgba(0, 217, 138, 0.2)" />
      </svg>
    </div>
  );
}

export function HeroPlayer() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <ShieldFallback />;
  }

  return (
    <div className="w-full h-full relative">
      <RemotionPlayer />
    </div>
  );
}
