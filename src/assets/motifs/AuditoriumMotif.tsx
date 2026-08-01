import type { SVGProps } from 'react'

/** Original line-art suggesting an auditorium facade, for the reception venue. */
export function AuditoriumMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 130V50L100 14L176 50V130" />
        <path d="M24 50H176" opacity="0.6" />
        <path d="M40 130V64" />
        <path d="M62 130V58" />
        <path d="M84 130V54" />
        <path d="M116 130V54" />
        <path d="M138 130V58" />
        <path d="M160 130V64" />
        <path d="M90 130V96C90 90 95 86 100 86C105 86 110 90 110 96V130" opacity="0.8" />
        <path d="M14 130H186" />
        <circle cx="100" cy="30" r="3" opacity="0.6" />
      </g>
    </svg>
  )
}
