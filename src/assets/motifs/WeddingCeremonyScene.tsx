import type { SVGProps } from 'react'

/** Original flat-illustration daytime scene for the marriage venue card — a sunlit, palm-lined resort hall. */
export function WeddingCeremonyScene(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="ceremonyDaySky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7EC8E3" />
          <stop offset="100%" stopColor="#FCE8B4" />
        </linearGradient>
        <linearGradient id="ceremonyDayWater" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4FB6B0" />
          <stop offset="100%" stopColor="#2E8C88" />
        </linearGradient>
      </defs>

      <rect width="400" height="200" fill="url(#ceremonyDaySky)" />

      {/* sun */}
      <circle cx="335" cy="42" r="22" fill="#FFE9A8" opacity="0.9" />
      <circle cx="335" cy="42" r="14" fill="#FFD866" />

      {/* soft clouds */}
      <g fill="#FFFFFF" opacity="0.75">
        <ellipse cx="70" cy="36" rx="26" ry="9" />
        <ellipse cx="92" cy="32" rx="18" ry="8" />
        <ellipse cx="230" cy="26" rx="20" ry="7" />
        <ellipse cx="248" cy="30" rx="14" ry="6" />
      </g>

      {/* birds */}
      <g stroke="#4A4A4A" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.6">
        <path d="M150 50q5-6 10 0q5-6 10 0" />
        <path d="M180 62q4-5 8 0q4-5 8 0" />
      </g>

      <g fill="#5B8A3A" opacity="0.9">
        <ellipse cx="55" cy="82" rx="26" ry="14" />
        <ellipse cx="40" cy="90" rx="20" ry="11" />
      </g>
      <rect x="52" y="88" width="4" height="46" fill="#8A5A2B" />

      <g fill="#5B8A3A" opacity="0.9">
        <ellipse cx="352" cy="78" rx="24" ry="13" />
        <ellipse cx="366" cy="86" rx="18" ry="10" />
      </g>
      <rect x="352" y="84" width="4" height="50" fill="#8A5A2B" />

      <polygon points="130,70 270,70 200,32" fill="#E8B84B" opacity="0.95" />
      <rect x="120" y="70" width="160" height="64" fill="#B97F4A" />
      <rect x="200" y="70" width="4" height="64" fill="#8A5A2B" opacity="0.6" />

      {[145, 178, 222, 255].map((x, i) => (
        <rect key={i} x={x} y="90" width="14" height="18" rx="2" fill="#FFE9A8" opacity="0.95" />
      ))}
      <rect x="188" y="108" width="24" height="26" fill="#6B4226" />
      <circle cx="200" cy="121" r="1.6" fill="#FFD866" />

      <rect x="0" y="150" width="400" height="50" fill="url(#ceremonyDayWater)" />
      <path
        d="M0 150 Q50 145 100 150 T200 150 T300 150 T400 150"
        stroke="#FFFFFF"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}
