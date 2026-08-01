import type { SVGProps } from 'react'

/** Original small temple-bell ornament, hung at the foot of a garland border. */
export function BellOrnament(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line x1="20" y1="0" x2="20" y2="14" stroke="#C9A227" strokeWidth="1.5" />
      <path
        d="M20 14C11 14 6 22 8 32C9 37 14 40 20 40C26 40 31 37 32 32C34 22 29 14 20 14Z"
        fill="#D4AF37"
        stroke="#9C7A1C"
        strokeWidth="0.6"
      />
      <path d="M11 27H29" stroke="#9C7A1C" strokeWidth="0.6" opacity="0.6" />
      <circle cx="20" cy="46" r="4" fill="#E8C874" stroke="#9C7A1C" strokeWidth="0.6" />
      <line x1="20" y1="40" x2="20" y2="42" stroke="#9C7A1C" strokeWidth="1" />
    </svg>
  )
}
