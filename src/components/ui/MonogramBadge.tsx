import type { Ref } from 'react'
import { cn } from '@/lib/utils'
import { invitation } from '@/data/invitation'

interface MonogramBadgeProps {
  className?: string
  ref?: Ref<HTMLDivElement>
}

export function MonogramBadge({ className, ref }: MonogramBadgeProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'border-gold-temple text-gold-champagne flex items-center justify-center rounded-full border',
        className,
      )}
    >
      <span className="font-display text-3xl">
        {invitation.couple.groom[0]}
        <span className="text-gold-champagne/60 mx-1 text-lg">&amp;</span>
        {invitation.couple.bride[0]}
      </span>
    </div>
  )
}
