import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import audioSrc from '@/assets/audio/wedding-theme.mp3'

export function AudioToggle({ className }: { className?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [userPaused, setUserPaused] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  // Browsers block unmuted autoplay until the visitor has interacted with
  // the page. We try immediately (some browsers allow it), then fall back
  // to starting on the very first click/tap/keypress anywhere on the page —
  // the closest a web page can get to "plays by default" without muting.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const tryPlay = () => {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    }

    tryPlay()

    const handleFirstInteraction = () => {
      if (userPaused) return
      tryPlay()
    }

    document.addEventListener('pointerdown', handleFirstInteraction, { once: true })
    document.addEventListener('keydown', handleFirstInteraction, { once: true })

    return () => {
      document.removeEventListener('pointerdown', handleFirstInteraction)
      document.removeEventListener('keydown', handleFirstInteraction)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleToggle = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
      setUserPaused(true)
    } else {
      setUserPaused(false)
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    }
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop preload="auto" />
      <motion.button
        type="button"
        onClick={handleToggle}
        aria-label={isPlaying ? 'Pause wedding song' : 'Play wedding song'}
        aria-pressed={isPlaying}
        animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className={cn(
          'border-gold-temple/50 bg-ivory/90 flex h-12 w-12 items-center justify-center rounded-full border shadow-md backdrop-blur-sm',
          'text-mahogany-900 hover:border-gold-antique transition-colors duration-300',
          className,
        )}
      >
        <span className="relative text-lg" aria-hidden="true">
          <motion.span
            className="inline-block"
            animate={isPlaying && !prefersReducedMotion ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 6, repeat: isPlaying ? Infinity : 0, ease: 'linear' }}
          >
            🎵
          </motion.span>
          {!isPlaying && (
            <span
              className="bg-mahogany-900 absolute top-1/2 left-1/2 h-[1.5px] w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45"
              aria-hidden="true"
            />
          )}
        </span>
      </motion.button>
    </>
  )
}
