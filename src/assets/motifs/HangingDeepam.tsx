import type { SVGProps } from 'react'

/** Original hanging string-light unit: a chain, a small gem bead, and a deepam (oil lamp) with flame. */
export function HangingDeepam(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 150" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line x1="20" y1="0" x2="20" y2="58" stroke="#D4AF37" strokeWidth="1" opacity="0.8" />
      <path d="M20 52L27 60L20 68L13 60Z" fill="#E8C874" stroke="#C9A227" strokeWidth="0.6" />
      <line x1="20" y1="68" x2="20" y2="98" stroke="#D4AF37" strokeWidth="1" opacity="0.8" />

      {/* deepam bowl */}
      <path
        d="M6 100C6 112 12 120 20 120C28 120 34 112 34 100Z"
        fill="#D4AF37"
        stroke="#9C7A1C"
        strokeWidth="0.6"
      />
      <ellipse cx="20" cy="100" rx="14" ry="4" fill="#E8C874" stroke="#9C7A1C" strokeWidth="0.6" />

      {/* flame */}
      <path d="M20 82C15 90 15 96 20 100C25 96 25 90 20 82Z" fill="#FBBF24" opacity="0.95" />
      <path d="M20 88C18 92 18 95 20 97C22 95 22 92 20 88Z" fill="#FEF3C7" />
    </svg>
  )
}
