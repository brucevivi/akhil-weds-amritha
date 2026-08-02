import { useId } from 'react'
import { cn } from '@/lib/utils'

interface LotusPatternProps {
  className?: string
  color?: string
  opacity?: number
  size?: number
}

/**
 * Repeating lotus-bud tile echoing the invitation card's own ornamentation —
 * the same petal shape as the card's OrnamentalDivider accents and the
 * marigold garland on its edges — so the section background reads as an
 * extension of the card rather than a generic texture.
 */
export function LotusPattern({
  className,
  color = '#C9A227',
  opacity = 0.1,
  size = 96,
}: LotusPatternProps) {
  const patternId = useId()
  const cx = size / 2
  const cy = size / 2
  const petal = size * 0.15

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
          patternTransform="rotate(12)"
        >
          <g stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" opacity={opacity}>
            <path
              d={`M${cx} ${cy - petal * 1.6}C${cx + petal} ${cy - petal} ${cx + petal} ${cy + petal} ${cx} ${cy + petal * 1.6}`}
            />
            <path
              d={`M${cx} ${cy - petal * 1.6}C${cx - petal} ${cy - petal} ${cx - petal} ${cy + petal} ${cx} ${cy + petal * 1.6}`}
            />
            <path
              d={`M${cx - petal * 1.6} ${cy}C${cx - petal} ${cy - petal} ${cx + petal} ${cy - petal} ${cx + petal * 1.6} ${cy}`}
            />
            <path
              d={`M${cx - petal * 1.6} ${cy}C${cx - petal} ${cy + petal} ${cx + petal} ${cy + petal} ${cx + petal * 1.6} ${cy}`}
            />
            <circle cx={cx} cy={cy} r={petal * 0.35} fill={color} stroke="none" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  )
}
