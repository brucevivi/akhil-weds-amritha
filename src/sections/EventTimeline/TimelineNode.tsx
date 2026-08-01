import type { EventDetail } from '@/data/types'
import { cn } from '@/lib/utils'

export function TimelineNode({ event, className }: { event: EventDetail; className?: string }) {
  return (
    <div
      className={cn(
        'border-gold-temple/40 bg-mahogany-900/60 flex flex-col items-center gap-3 border px-8 py-10 text-center backdrop-blur-sm',
        className,
      )}
    >
      <span className="bg-gold-temple h-3 w-3 rounded-full shadow-[0_0_16px_rgba(212,175,55,0.7)]" />
      <p className="font-label text-gold-champagne/70 text-xs tracking-[0.3em] uppercase">
        {event.label}
      </p>
      <p className="font-display text-ivory text-2xl sm:text-3xl">{event.displayDate}</p>
      <p className="font-body text-gold-champagne/60 text-xs">{event.malayalamDate}</p>
      <div className="mt-2 space-y-1">
        <p className="font-display text-gold-champagne text-lg">{event.venueName}</p>
        <p className="font-body text-ivory/70 text-sm">{event.venueAddress}</p>
        {event.time && <p className="font-body text-ivory/70 text-sm">{event.time}</p>}
      </div>
    </div>
  )
}
