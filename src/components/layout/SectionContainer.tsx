import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children: ReactNode
  /** Full-bleed layer (gradients, particles) rendered behind the content, spanning the whole section width — not clipped to the max-width content column. */
  background?: ReactNode
  id?: string
  className?: string
  innerClassName?: string
}

export function SectionContainer({
  children,
  background,
  id,
  className,
  innerClassName,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn('relative overflow-hidden px-6 py-24 sm:py-32', className)}>
      {background}
      <div className={cn('relative mx-auto max-w-5xl', innerClassName)}>{children}</div>
    </section>
  )
}
