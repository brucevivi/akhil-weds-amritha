import type { SVGProps } from 'react'

/** Original hand-drawn mandala line-art used as a rotating background ornament. */
export function MandalaMotif(props: SVGProps<SVGSVGElement>) {
  const petals = Array.from({ length: 12 })

  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="0.8" strokeLinecap="round">
        <circle cx="100" cy="100" r="94" opacity="0.35" />
        <circle cx="100" cy="100" r="76" opacity="0.35" />
        <circle cx="100" cy="100" r="40" opacity="0.5" />
        <circle cx="100" cy="100" r="14" opacity="0.7" />
        {petals.map((_, i) => {
          const angle = (360 / petals.length) * i
          return (
            <g key={i} transform={`rotate(${angle} 100 100)`}>
              <path d="M100 6C106 24 106 40 100 58C94 40 94 24 100 6Z" opacity="0.55" />
              <path d="M100 24L100 76" opacity="0.3" />
            </g>
          )
        })}
      </g>
    </svg>
  )
}
