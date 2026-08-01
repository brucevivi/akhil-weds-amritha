import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/animations/gsapConfig'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { invitation } from '@/data/invitation'
import { MonogramBadge } from '@/components/ui/MonogramBadge'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { UnfoldPanel } from './UnfoldPanel'

export function InvitationUnfold() {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const topFlapRef = useRef<HTMLDivElement>(null)
  const leftFlapRef = useRef<HTMLDivElement>(null)
  const rightFlapRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      if (prefersReducedMotion) {
        gsap.set(contentRef.current, { opacity: 1, y: 0, scale: 1 })
        gsap.set(topFlapRef.current, { rotateX: -150 })
        gsap.set([leftFlapRef.current, rightFlapRef.current], {
          xPercent: 0,
          opacity: 0,
        })
        return
      }

      gsap.set(contentRef.current, { opacity: 0, y: 24, scale: 0.96 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=120%',
          scrub: 1,
          pin: true,
        },
      })

      tl.to(topFlapRef.current, { rotateX: -150, duration: 1, ease: 'power2.inOut' }, 0)
        .to(
          leftFlapRef.current,
          { xPercent: -105, opacity: 0, duration: 1, ease: 'power2.inOut' },
          0.15,
        )
        .to(
          rightFlapRef.current,
          { xPercent: 105, opacity: 0, duration: 1, ease: 'power2.inOut' },
          0.15,
        )
        .to(contentRef.current, { opacity: 1, y: 0, scale: 1, duration: 0.7 }, 0.55)

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === sectionRef.current) trigger.kill()
        })
      }
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] },
  )

  return (
    <section
      id="invitation-unfold"
      ref={sectionRef}
      className="bg-mahogany-950 relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      <div
        ref={stageRef}
        className="relative aspect-[4/5] w-[85vw] max-w-md"
        style={{ perspective: '1400px' }}
      >
        <div
          ref={contentRef}
          className="border-gold-temple/40 bg-mahogany-900 absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 border px-8 text-center"
        >
          <MonogramBadge className="h-16 w-16" />
          <Eyebrow>{invitation.invocation}</Eyebrow>
          <p className="font-display text-gold-champagne/80 text-lg italic">
            {invitation.invitationLine}
          </p>
        </div>

        <UnfoldPanel
          ref={leftFlapRef}
          className="z-20"
          style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}
        />
        <UnfoldPanel
          ref={rightFlapRef}
          className="z-20"
          style={{ clipPath: 'polygon(100% 0, 50% 50%, 100% 100%)' }}
        />
        <UnfoldPanel
          ref={topFlapRef}
          className="z-30 flex items-end justify-center pb-6"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 55%)',
            transformOrigin: 'top center',
          }}
        >
          <MonogramBadge className="h-12 w-12" />
        </UnfoldPanel>
      </div>
    </section>
  )
}
