import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow: ReactNode
  title: ReactNode
  accent?: ReactNode
  className?: string
  tone?: 'light' | 'dark'
}

/** Eyebrow flanked by hairlines, above a serif title with an optional italic gold accent word. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  className,
  tone = 'light',
}: SectionHeadingProps) {
  const isDark = tone === 'dark'

  return (
    <div className={cn('flex flex-col items-center gap-3 text-center', className)}>
      <div className="flex items-center gap-3">
        <span
          className={cn('h-px w-10', isDark ? 'bg-gold-temple/40' : 'bg-umber-700/30')}
          aria-hidden="true"
        />
        <Eyebrow className={isDark ? 'text-gold-champagne/70' : 'text-umber-700/70'}>
          {eyebrow}
        </Eyebrow>
        <span
          className={cn('h-px w-10', isDark ? 'bg-gold-temple/40' : 'bg-umber-700/30')}
          aria-hidden="true"
        />
      </div>
      <p
        className={cn(
          'font-display text-4xl sm:text-5xl',
          isDark ? 'text-ivory' : 'text-mahogany-900',
        )}
      >
        {title}{' '}
        {accent && (
          <span className={isDark ? 'text-gold-gradient italic' : 'text-gold-antique italic'}>
            {accent}
          </span>
        )}
      </p>
    </div>
  )
}
