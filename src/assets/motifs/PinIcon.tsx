import type { SVGProps } from 'react'

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.5 6.5 11.6 7 12.06.28.26.72.26 1 0 .5-.46 7-6.56 7-12.06C19.5 5.36 16.14 2 12 2Zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z" />
    </svg>
  )
}
