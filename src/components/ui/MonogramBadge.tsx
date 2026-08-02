import type { Ref } from 'react'
import { cn } from '@/lib/utils'
import { invitation } from '@/data/invitation'

interface MonogramBadgeProps {
  className?: string
  textClassName?: string
  ref?: Ref<HTMLDivElement>
}

export function MonogramBadge({ className, textClassName = 'text-3xl', ref }: MonogramBadgeProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'border-gold-temple text-gold-champagne flex items-center justify-center rounded-full border',
        className,
      )}
    >
      <span className={cn('font-display', textClassName)}>
        {invitation.couple.bride[0]}
        <span className="text-gold-champagne/60 mx-1 text-[0.55em]">&amp;</span>
        {invitation.couple.groom[0]}
      </span>
    </div>
  )
}
