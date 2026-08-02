import type { SVGProps } from 'react'

/** Original horizon silhouette blending hill country into a coastline — evoking both venues' geography. */
export function CoastalMountainScape(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 800 220"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 160L60 100L120 150L190 70L260 140L330 90L400 150L460 110L520 160L520 220L0 220Z"
        fill="currentColor"
        opacity="0.35"
      />
      <path
        d="M0 190L50 140L100 180L160 120L230 175L300 130L360 185L360 220L0 220Z"
        fill="currentColor"
        opacity="0.55"
      />
      <g stroke="currentColor" strokeWidth="1.5" opacity="0.5">
        <path d="M420 190Q460 180 500 190T580 190T660 190T740 190T800 190" />
        <path d="M420 205Q460 198 500 205T580 205T660 205T740 205T800 205" opacity="0.7" />
      </g>
      <line x1="0" y1="220" x2="800" y2="220" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}
