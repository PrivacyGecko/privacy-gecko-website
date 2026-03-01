import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

const GREEN = "#00D98A";
const GREEN_SOFT = "#00B876";
const RING_COLOR = "#E2E8F0";

export const PrivacyShield: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const progress = frame / durationInFrames;

  const entranceScale = spring({
    frame,
    fps,
    config: { damping: 20, stiffness: 80, mass: 1 },
  });

  const glowOpacity = interpolate(
    Math.sin(progress * Math.PI * 4),
    [-1, 1],
    [0.06, 0.14]
  );

  const ring1Rotation = progress * 360;
  const ring2Rotation = -progress * 240;
  const ring3Rotation = progress * 180;

  const scanY = interpolate(
    (frame % (fps * 4)) / (fps * 4),
    [0, 1],
    [-120, 120]
  );
  const scanOpacity = interpolate(
    (frame % (fps * 4)) / (fps * 4),
    [0, 0.1, 0.9, 1],
    [0, 0.25, 0.25, 0]
  );

  const particles = [0, 1, 2, 3, 4, 5].map((i) => {
    const angle = (progress * 360 + i * 60) * (Math.PI / 180);
    const radius = 90 + i * 5;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      opacity: interpolate(
        Math.sin(progress * Math.PI * 6 + i),
        [-1, 1],
        [0.2, 0.7]
      ),
      size: 2 + Math.sin(progress * Math.PI * 3 + i) * 1,
    };
  });

  const shieldPath = "M 0 -50 L 40 -30 L 40 20 L 0 50 L -40 20 L -40 -30 Z";

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <svg
        viewBox="-150 -150 300 300"
        width="100%"
        height="100%"
        style={{
          transform: `scale(${entranceScale})`,
          maxWidth: 500,
          maxHeight: 500,
        }}
      >
        <defs>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="particleSoft" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="shieldFill" x1="0" y1="-50" x2="0" y2="50" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={GREEN} stopOpacity="0.1" />
            <stop offset="100%" stopColor={GREEN} stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Outer ring */}
        <g transform={`rotate(${ring3Rotation})`}>
          <circle cx="0" cy="0" r="120" fill="none" stroke={RING_COLOR} strokeWidth="0.8" opacity="0.5" />
          <circle cx="0" cy="0" r="120" fill="none" stroke={GREEN} strokeWidth="0.5" strokeDasharray="8 24" opacity="0.25" />
        </g>

        {/* Middle ring */}
        <g transform={`rotate(${ring2Rotation})`}>
          <circle cx="0" cy="0" r="95" fill="none" stroke={RING_COLOR} strokeWidth="0.8" opacity="0.6" />
          <circle cx="0" cy="0" r="95" fill="none" stroke={GREEN} strokeWidth="0.6" strokeDasharray="4 16" opacity="0.3" />
        </g>

        {/* Inner ring */}
        <g transform={`rotate(${ring1Rotation})`}>
          <circle cx="0" cy="0" r="70" fill="none" stroke={RING_COLOR} strokeWidth="0.8" opacity="0.7" />
          <circle cx="0" cy="0" r="70" fill="none" stroke={GREEN} strokeWidth="0.8" strokeDasharray="12 8" opacity="0.35" />
        </g>

        {/* Orbiting particles */}
        {particles.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={p.size}
            fill={GREEN}
            opacity={p.opacity}
            filter="url(#particleSoft)"
          />
        ))}

        {/* Shield glow */}
        <path
          d={shieldPath}
          fill={GREEN}
          opacity={glowOpacity}
          filter="url(#softGlow)"
          transform="scale(1.3)"
        />

        {/* Shield body */}
        <path
          d={shieldPath}
          fill="url(#shieldFill)"
          stroke={GREEN}
          strokeWidth="1.2"
          opacity="0.7"
          filter="url(#softGlow)"
        />

        {/* Lock icon */}
        <g opacity="0.6">
          <rect x="-10" y="-5" width="20" height="16" rx="3" fill="none" stroke={GREEN_SOFT} strokeWidth="1.5" />
          <path d="M -6 -5 L -6 -12 A 6 6 0 0 1 6 -12 L 6 -5" fill="none" stroke={GREEN_SOFT} strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="0" cy="3" r="2" fill={GREEN} opacity="0.5" />
        </g>

        {/* Scan line */}
        <line x1="-60" y1={scanY} x2="60" y2={scanY} stroke={GREEN} strokeWidth="0.8" opacity={scanOpacity} filter="url(#softGlow)" />

        {/* Corner dots */}
        {[[-42, -32], [42, -32], [42, 22], [-42, 22]].map(([x, y], i) => (
          <circle
            key={`c-${i}`}
            cx={x}
            cy={y}
            r="1.5"
            fill={GREEN}
            opacity={interpolate(
              Math.sin(progress * Math.PI * 8 + i * 1.5),
              [-1, 1],
              [0.15, 0.5]
            )}
          />
        ))}
      </svg>
    </AbsoluteFill>
  );
};
