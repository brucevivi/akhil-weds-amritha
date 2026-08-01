import type { SVGProps } from 'react'

/** Original ornamental corner motif — a stylised gopuram/temple-arch corner flourish. */
export function KeralaBorderCorner(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4H40" />
        <path d="M4 4V40" />
        <path d="M4 20C16 20 20 16 20 4" />
        <path d="M28 4C28 14 34 20 44 20" opacity="0.7" />
        <path d="M4 28C14 28 20 34 20 44" opacity="0.7" />
        <circle cx="30" cy="30" r="4" opacity="0.5" />
      </g>
    </svg>
  )
}

/** A slim repeating hairline divider with a central lotus-bud accent. */
export function OrnamentalDivider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M0 12H100" />
        <path d="M140 12H240" />
        <path d="M120 2C126 6 126 10 120 12C114 10 114 6 120 2Z" opacity="0.8" />
        <path d="M120 12C126 14 126 18 120 22C114 18 114 14 120 12Z" opacity="0.8" />
        <circle cx="120" cy="12" r="2.5" />
      </g>
    </svg>
  )
}
