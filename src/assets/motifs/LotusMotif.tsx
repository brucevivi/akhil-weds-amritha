import type { SVGProps } from 'react'

/** Original hand-drawn lotus line-art, inspired by the invitation's Kerala mural palette. */
export function LotusMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 92C60 92 60 58 60 46" />
        <path d="M60 46C45 46 30 56 22 78C38 82 52 74 60 46Z" />
        <path d="M60 46C75 46 90 56 98 78C82 82 68 74 60 46Z" />
        <path d="M60 46C48 40 40 26 42 8C56 14 62 26 60 46Z" />
        <path d="M60 46C72 40 80 26 78 8C64 14 58 26 60 46Z" />
        <path d="M60 46C52 34 52 18 60 4C68 18 68 34 60 46Z" />
        <path d="M22 78C22 78 40 90 60 90C80 90 98 78 98 78" opacity="0.6" />
      </g>
    </svg>
  )
}
