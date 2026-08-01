import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Temple-bell ambience toggle. No audio source is bundled yet — set
 * `AUDIO_SRC` once a real sound file is supplied. Until then this renders
 * as a fully wired but inert control (no playback attempt, no console
 * errors) rather than faking a placeholder sound.
 */
const AUDIO_SRC = ''

export function AudioToggle({ className }: { className?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const hasSource = AUDIO_SRC.length > 0

  const handleToggle = () => {
    if (!hasSource || !audioRef.current) {
      setIsPlaying((prev) => !prev)
      return
    }
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      void audioRef.current.play()
    }
    setIsPlaying((prev) => !prev)
  }

  return (
    <>
      {hasSource && <audio ref={audioRef} src={AUDIO_SRC} loop preload="none" />}
      <button
        type="button"
        data-cursor-interactive
        onClick={handleToggle}
        aria-label={isPlaying ? 'Mute ambient sound' : 'Play ambient sound'}
        aria-pressed={isPlaying}
        className={cn(
          'border-gold-temple/50 flex h-11 w-11 items-center justify-center rounded-full border',
          'text-gold-champagne hover:border-gold-champagne transition-colors duration-300',
          className,
        )}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M4 9v6h4l5 5V4L8 9H4z" />
            <path
              d="M16.5 8.5a5 5 0 0 1 0 7"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M4 9v6h4l5 5V4L8 9H4z" />
            <path
              d="M16 9l5 6M21 9l-5 6"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
    </>
  )
}
