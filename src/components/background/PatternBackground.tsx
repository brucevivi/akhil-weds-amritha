import { useId } from 'react'
import { cn } from '@/lib/utils'

interface PatternBackgroundProps {
  className?: string
  color?: string
  opacity?: number
  size?: number
}

/** Subtle tone-on-tone repeating sparkle-star texture, tiled across the full section. */
export function PatternBackground({
  className,
  color = '#C9A227',
  opacity = 0.07,
  size = 64,
}: PatternBackgroundProps) {
  const patternId = useId()

  return (
    <svg
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
    >
      <defs>
        <pattern
          id={patternId}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(8)"
        >
          <path
            d={`M${size / 2} ${size * 0.24}
                L${size * 0.58} ${size * 0.42}
                L${size * 0.76} ${size / 2}
                L${size * 0.58} ${size * 0.58}
                L${size / 2} ${size * 0.76}
                L${size * 0.42} ${size * 0.58}
                L${size * 0.24} ${size / 2}
                L${size * 0.42} ${size * 0.42}
                Z`}
            fill={color}
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
