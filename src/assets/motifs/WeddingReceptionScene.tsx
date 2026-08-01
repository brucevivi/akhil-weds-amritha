import type { SVGProps } from 'react'

/** Original flat-illustration night scene for the reception venue card — a pillared auditorium entrance. */
export function WeddingReceptionScene(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="receptionSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2A4A" />
          <stop offset="100%" stopColor="#0E1830" />
        </linearGradient>
      </defs>

      <rect width="400" height="200" fill="url(#receptionSky)" />

      {[...Array(16)].map((_, i) => (
        <circle
          key={i}
          cx={15 + ((i * 53) % 370)}
          cy={8 + ((i * 41) % 60)}
          r={i % 4 === 0 ? 1.5 : 0.8}
          fill="#F0E4C3"
          opacity={0.75}
        />
      ))}

      <path d="M60 40 Q200 8 340 40" stroke="#D4AF37" strokeWidth="1.2" fill="none" opacity="0.7" />
      {[60, 116, 172, 228, 284, 340].map((x, i) => {
        const y = 40 - Math.sin((i / 5) * Math.PI) * 26
        return <circle key={i} cx={x} cy={y} r="2.2" fill="#E8C874" />
      })}

      <polygon points="120,72 280,72 200,38" fill="#8B9CB8" opacity="0.9" />
      <rect x="110" y="72" width="180" height="62" fill="#25324F" />

      {[128, 158, 188, 218, 248, 272].map((x, i) => (
        <rect key={i} x={x} y="80" width="10" height="46" fill="#3E4E70" opacity="0.9" />
      ))}
      {[143, 173, 203, 233, 263].map((x, i) => (
        <rect key={i} x={x} y="88" width="12" height="14" rx="1.5" fill="#E8C874" opacity="0.85" />
      ))}

      <polygon points="180,134 220,134 232,168 168,168" fill="#5C1A1F" />
      <rect x="176" y="128" width="4" height="40" fill="#D4AF37" />
      <rect x="220" y="128" width="4" height="40" fill="#D4AF37" />
      <circle cx="178" cy="126" r="4" fill="#E8C874" />
      <circle cx="222" cy="126" r="4" fill="#E8C874" />

      <rect x="0" y="168" width="400" height="32" fill="#0E1830" />
    </svg>
  )
}
