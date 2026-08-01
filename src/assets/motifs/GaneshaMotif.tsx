import { useId } from 'react'
import type { SVGProps } from 'react'

/** Original ornamental gold-flourish line art of Lord Ganesha, invoked at the opening of the invitation. */
export function GaneshaMotif(props: SVGProps<SVGSVGElement>) {
  const gradientId = useId()

  return (
    <svg viewBox="0 0 200 190" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="45%" stopColor="#F0E4C3" />
          <stop offset="55%" stopColor="#E8C874" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${gradientId})`}
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* crown flourish */}
        <path d="M85 20C85 8 115 8 115 20" />
        <path d="M97 6C97 0 103 0 103 6" />

        {/* left ear — spiral scroll */}
        <path d="M74 58C42 46 22 66 32 90C40 106 62 104 66 88C69 76 56 70 51 78C48 84 54 90 60 86" />

        {/* right ear — mirrored spiral scroll */}
        <path d="M126 58C158 46 178 66 168 90C160 106 138 104 134 88C131 76 144 70 149 78C152 84 146 90 140 86" />

        {/* head silhouette, open flowing line */}
        <path d="M74 58C72 36 86 24 100 24C114 24 128 36 126 58C130 74 124 90 112 98" />

        {/* eyes */}
        <circle cx="88" cy="48" r="2.6" fill={`url(#${gradientId})`} />
        <circle cx="112" cy="48" r="2.6" fill={`url(#${gradientId})`} />

        {/* trunk — flowing S-curve swirl */}
        <path d="M100 58C95 72 86 80 91 94C96 106 112 108 107 122C103 132 90 135 82 128" />

        {/* small tusk accent */}
        <path d="M92 68C88 72 88 78 92 80" opacity="0.7" />
      </g>
    </svg>
  )
}
