import type { ReactNode } from 'react'
import { KeralaBorderCorner } from '@/assets/motifs/KeralaBorder'
import { cn } from '@/lib/utils'

interface OrnamentalFrameProps {
  children: ReactNode
  className?: string
}

export function OrnamentalFrame({ children, className }: OrnamentalFrameProps) {
  return (
    <div
      className={cn(
        'border-gold-temple/40 relative border px-6 py-10 sm:px-12 sm:py-14',
        className,
      )}
    >
      <KeralaBorderCorner className="text-gold-temple absolute -top-px -left-px h-10 w-10 sm:h-14 sm:w-14" />
      <KeralaBorderCorner className="text-gold-temple absolute -top-px -right-px h-10 w-10 -scale-x-100 sm:h-14 sm:w-14" />
      <KeralaBorderCorner className="text-gold-temple absolute -bottom-px -left-px h-10 w-10 -scale-y-100 sm:h-14 sm:w-14" />
      <KeralaBorderCorner className="text-gold-temple absolute -right-px -bottom-px h-10 w-10 -scale-x-100 -scale-y-100 sm:h-14 sm:w-14" />
      {children}
    </div>
  )
}
