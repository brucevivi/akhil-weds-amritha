import type { SVGProps } from 'react'

/** Original line-art suggesting a temple mandapa hall, for the marriage venue. */
export function MandapaMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M100 8L60 34H140L100 8Z" />
        <path d="M100 8V34" opacity="0.6" />
        <path d="M50 34H150" />
        <path d="M40 46H160" />
        <path d="M46 46V118" />
        <path d="M154 46V118" />
        <path d="M70 46V118" opacity="0.7" />
        <path d="M100 46V118" opacity="0.7" />
        <path d="M130 46V118" opacity="0.7" />
        <path d="M30 118H170" />
        <path d="M20 130H180" />
        <path d="M46 118C46 108 58 100 70 100C82 100 94 108 94 118" opacity="0.5" />
        <path d="M106 118C106 108 118 100 130 100C142 100 154 108 154 118" opacity="0.5" />
      </g>
    </svg>
  )
}
