import { gsap } from './gsapConfig'

/**
 * Registers two GSAP contexts via matchMedia: a full cinematic timeline for
 * normal motion, and a much lighter opacity-only version under
 * `prefers-reduced-motion: reduce`. Pass builder functions that receive the
 * gsap.Context-scoped `gsap` instance and set up their own timelines/ScrollTriggers.
 */
export function withMotionPreference(
  fullMotion: (context: gsap.Context) => void,
  reducedMotion: (context: gsap.Context) => void,
) {
  const mm = gsap.matchMedia()

  mm.add('(prefers-reduced-motion: no-preference)', (context) => {
    fullMotion(context as gsap.Context)
  })

  mm.add('(prefers-reduced-motion: reduce)', (context) => {
    reducedMotion(context as gsap.Context)
  })

  return mm
}
