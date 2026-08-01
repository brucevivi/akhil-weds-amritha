import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  children: ReactNode
  id?: string
  className?: string
  innerClassName?: string
}

export function SectionContainer({
  children,
  id,
  className,
  innerClassName,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn('relative overflow-hidden px-6 py-24 sm:py-32', className)}>
      <div className={cn('relative mx-auto max-w-5xl', innerClassName)}>{children}</div>
    </section>
  )
}
