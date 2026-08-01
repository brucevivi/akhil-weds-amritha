import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

/**
 * Plugins are registered once, at module load, so every section can simply
 * `import { gsap, ScrollTrigger, SplitText } from '@/animations/gsapConfig'`
 * without remembering a separate setup call.
 *
 * Ownership boundary: GSAP + ScrollTrigger drive scroll-pinned / scrubbed
 * cinematic sequences (Hero curtain, InvitationUnfold, EventTimeline).
 * Framer Motion drives everything else (enter reveals, hover/tap, form
 * interactions). A single element's `transform` is never animated by both
 * systems at once — pick one per section to avoid fighting over the same
 * composited property.
 */
gsap.registerPlugin(ScrollTrigger, SplitText)

export { gsap, ScrollTrigger, SplitText }
