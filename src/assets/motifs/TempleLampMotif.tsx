import type { SVGProps } from 'react'

/** Original hand-drawn Kerala nilavilakku (temple lamp) line-art. */
export function TempleLampMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 80 140" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* flame */}
        <path d="M40 20C34 28 34 36 40 42C46 36 46 28 40 20Z" />
        {/* bowl */}
        <path d="M22 42C22 50 30 56 40 56C50 56 58 50 58 42" />
        <path d="M18 42H62" />
        {/* stem with decorative rings */}
        <path d="M40 56V96" />
        <path d="M30 66H50" opacity="0.7" />
        <path d="M28 78H52" opacity="0.7" />
        <path d="M26 90H54" opacity="0.7" />
        {/* base */}
        <path d="M14 118C14 106 26 96 40 96C54 96 66 106 66 118" />
        <path d="M8 130H72" />
        <path d="M14 118H66" />
      </g>
    </svg>
  )
}
