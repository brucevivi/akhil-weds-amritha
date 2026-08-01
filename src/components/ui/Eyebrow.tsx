import type { ReactNode, Ref } from 'react'
import { cn } from '@/lib/utils'

interface EyebrowProps {
  children: ReactNode
  className?: string
  ref?: Ref<HTMLParagraphElement>
}

export function Eyebrow({ children, className, ref }: EyebrowProps) {
  return (
    <p
      ref={ref}
      className={cn(
        'font-label text-gold-champagne/80 text-xs tracking-[0.35em] uppercase sm:text-sm',
        className,
      )}
    >
      {children}
    </p>
  )
}
