import type { SVGProps } from 'react'

/** Original hand-drawn peacock feather line-art, echoing the crest motif on the invitation. */
export function PeacockMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 60 140" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 138C30 100 30 60 30 30" />
        <path d="M30 30C18 20 14 8 20 2C28 10 30 20 30 30Z" />
        <path d="M30 30C42 20 46 8 40 2C32 10 30 20 30 30Z" />
        <circle cx="30" cy="16" r="6" opacity="0.8" />
        <path d="M30 44C22 38 12 38 6 46C14 52 22 50 30 44Z" opacity="0.85" />
        <path d="M30 44C38 38 48 38 54 46C46 52 38 50 30 44Z" opacity="0.85" />
        <path d="M30 66C20 62 8 64 2 74C12 78 22 74 30 66Z" opacity="0.7" />
        <path d="M30 66C40 62 52 64 58 74C48 78 38 74 30 66Z" opacity="0.7" />
        <path d="M30 90C22 88 12 92 8 100C16 102 24 98 30 90Z" opacity="0.55" />
        <path d="M30 90C38 88 48 92 52 100C44 102 36 98 30 90Z" opacity="0.55" />
      </g>
    </svg>
  )
}
