import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/animations/gsapConfig'
import { invitation } from '@/data/invitation'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { ScrollReveal } from '@/components/motion/ScrollReveal'
import { TimelineNode } from './TimelineNode'

export function EventTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const useHorizontalPin = isDesktop && !prefersReducedMotion

  useGSAP(
    () => {
      if (!useHorizontalPin) return
      const track = trackRef.current
      const section = sectionRef.current
      if (!track || !section) return

      const scrollDistance = () => Math.max(track.scrollWidth - window.innerWidth, 0)

      const trackTween = gsap.to(track, {
        x: () => -scrollDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDistance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      })

      const lineTween = lineRef.current
        ? gsap.fromTo(
            lineRef.current,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${scrollDistance()}`,
                scrub: 1,
              },
            },
          )
        : null

      return () => {
        trackTween.scrollTrigger?.kill()
        trackTween.kill()
        lineTween?.scrollTrigger?.kill()
        lineTween?.kill()
      }
    },
    { scope: sectionRef, dependencies: [useHorizontalPin] },
  )

  if (!useHorizontalPin) {
    return (
      <section id="timeline" className="bg-mahogany-900 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <div className="mb-14 text-center">
            <Eyebrow>The Celebration</Eyebrow>
          </div>
          <div className="border-gold-temple/30 relative flex flex-col gap-12 border-l pl-8">
            {invitation.events.map((event) => (
              <ScrollReveal key={event.id}>
                <TimelineNode event={event} className="border-none px-0 py-0 text-left" />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="timeline"
      className="bg-mahogany-900 relative h-[100svh] w-full overflow-hidden"
    >
      <div className="absolute top-16 right-0 left-0 z-10 text-center">
        <Eyebrow>The Celebration</Eyebrow>
      </div>
      <div ref={trackRef} className="flex h-full w-max items-center gap-32 px-[15vw]">
        {invitation.events.map((event, index) => (
          <div key={event.id} className="relative flex w-[70vw] max-w-2xl items-center">
            {index === 1 && (
              <div
                ref={lineRef}
                className="bg-gold-temple/60 absolute top-1/2 -left-32 h-px w-32 origin-left"
              />
            )}
            <TimelineNode event={event} className="w-full" />
          </div>
        ))}
      </div>
    </section>
  )
}
