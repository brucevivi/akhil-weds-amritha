import { type CSSProperties, type ReactNode, type Ref } from 'react'
import { cn } from '@/lib/utils'

interface UnfoldPanelProps {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  ref?: Ref<HTMLDivElement>
}

/** A single gold-bordered "paper layer" of the envelope, positioned/animated by its parent. */
export function UnfoldPanel({ children, className, style, ref }: UnfoldPanelProps) {
  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        'border-gold-temple/50 from-mahogany-800 via-mahogany-900 to-chocolate-900 absolute inset-0 border bg-linear-to-br',
        className,
      )}
    >
      {children}
    </div>
  )
}
