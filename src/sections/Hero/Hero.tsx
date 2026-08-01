import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, SplitText } from '@/animations/gsapConfig'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { invitation } from '@/data/invitation'
import { AmbientParticles } from '@/components/background/AmbientParticles'
import { MagneticButton } from '@/components/buttons/MagneticButton'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { MandalaMotif } from '@/assets/motifs/MandalaMotif'
import { TempleLampMotif } from '@/assets/motifs/TempleLampMotif'
import { ScrollCue } from './ScrollCue'

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const lampRef = useRef<HTMLDivElement>(null)
  const mandalaRef = useRef<HTMLDivElement>(null)
  const blessingRef = useRef<HTMLParagraphElement>(null)
  const namesRef = useRef<HTMLDivElement>(null)
  const groomRef = useRef<HTMLSpanElement>(null)
  const andRef = useRef<HTMLSpanElement>(null)
  const brideRef = useRef<HTMLSpanElement>(null)
  const detailsRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      const revealTargets = [
        lampRef.current,
        mandalaRef.current,
        blessingRef.current,
        detailsRef.current,
        ctaRef.current,
      ]

      if (prefersReducedMotion) {
        gsap.set(revealTargets, { opacity: 1, y: 0, scale: 1, rotate: 0 })
        return
      }

      if (!groomRef.current || !brideRef.current) return

      // `.text-gold-gradient` relies on `background-clip: text` clipping to
      // the element's own text node, with `color: transparent` letting the
      // gradient show through. SplitText replaces that text node with child
      // <div> chars, which would inherit `color: transparent` but have no
      // background of their own to clip against — rendering invisibly. So
      // chars animate in as solid gold (`text-gold-temple`), and the split
      // is reverted back to a plain text node before the gradient shimmer
      // runs on the parent.
      const splitGroom = new SplitText(groomRef.current, { type: 'chars' })
      const splitBride = new SplitText(brideRef.current, { type: 'chars' })

      gsap.set(revealTargets, { opacity: 0 })
      gsap.set(andRef.current, { opacity: 0 })
      gsap.set(detailsRef.current, { y: 20 })
      gsap.set(ctaRef.current, { y: 16, scale: 0.96 })
      gsap.set(mandalaRef.current, { scale: 0.82, rotate: -8 })
      gsap.set([splitGroom.chars, splitBride.chars], {
        opacity: 0,
        y: 40,
        rotateX: -70,
      })

      const revertToGradient = () => {
        splitGroom.revert()
        splitBride.revert()
        for (const el of [groomRef.current, brideRef.current]) {
          el?.classList.remove('text-gold-temple')
          el?.classList.add('text-gold-gradient')
        }
        gsap.set([groomRef.current, brideRef.current], {
          backgroundPositionX: '0%',
        })
      }

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to(lampRef.current, { opacity: 1, duration: 1.2 }, 0.2)
        .to(mandalaRef.current, { opacity: 0.5, scale: 1, rotate: 0, duration: 2 }, 0.4)
        .to(blessingRef.current, { opacity: 1, duration: 1 }, 1.1)
        .to(splitGroom.chars, { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.06 }, 2.1)
        .to(andRef.current, { opacity: 0.7, duration: 0.6 }, '-=0.3')
        .to(
          splitBride.chars,
          { opacity: 1, y: 0, rotateX: 0, duration: 0.9, stagger: 0.06 },
          '-=0.2',
        )
        .call(revertToGradient)
        .to(
          [groomRef.current, brideRef.current],
          { backgroundPositionX: '100%', duration: 2.2, ease: 'sine.inOut' },
          '<',
        )
        .to(detailsRef.current, { opacity: 1, y: 0, duration: 1 }, '+=0.2')
        .to(
          ctaRef.current,
          { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'back.out(1.7)' },
          '-=0.4',
        )

      return () => {
        splitGroom.revert()
        splitBride.revert()
      }
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  )

  const handleOpenInvitation = () => {
    document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="bg-mahogany-900 relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="from-mahogany-800 via-mahogany-900 to-mahogany-950 absolute inset-0 bg-radial"
      />
      <div className="absolute inset-0">
        <AmbientParticles />
      </div>

      <div
        aria-hidden="true"
        className="text-gold-temple pointer-events-none absolute top-1/2 left-1/2 h-[140vmin] w-[140vmin] -translate-x-1/2 -translate-y-1/2"
      >
        <div ref={mandalaRef} className="h-full w-full">
          <MandalaMotif className="h-full w-full animate-[spin_140s_linear_infinite]" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div ref={lampRef} className="text-gold-temple mb-6 h-16 w-10 sm:h-20 sm:w-12">
          <TempleLampMotif className="h-full w-full drop-shadow-[0_0_18px_rgba(212,175,55,0.55)]" />
        </div>

        <Eyebrow ref={blessingRef}>With the blessings of God &amp; family</Eyebrow>

        <div ref={namesRef} className="mt-6 flex flex-col items-center gap-1 sm:flex-row sm:gap-6">
          <span
            ref={groomRef}
            className="text-gold-temple font-display inline-block text-6xl leading-none font-medium sm:text-8xl"
            style={{
              backgroundSize: '220% auto',
              perspective: '900px',
              transformStyle: 'preserve-3d',
            }}
          >
            {invitation.couple.groom}
          </span>
          <span ref={andRef} className="font-label text-gold-champagne/70 text-lg sm:text-2xl">
            &amp;
          </span>
          <span
            ref={brideRef}
            className="text-gold-temple font-display inline-block text-6xl leading-none font-medium sm:text-8xl"
            style={{
              backgroundSize: '220% auto',
              perspective: '900px',
              transformStyle: 'preserve-3d',
            }}
          >
            {invitation.couple.bride}
          </span>
        </div>

        <div ref={detailsRef} className="mt-10 flex flex-col items-center gap-5">
          <Eyebrow>You&apos;re Invited To</Eyebrow>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-12">
            {invitation.events.map((event) => (
              <div key={event.id} className="flex flex-col items-center gap-1">
                <p className="font-label text-gold-champagne/60 text-[11px] tracking-[0.3em] uppercase">
                  {event.label}
                </p>
                <p className="font-display text-ivory text-xl sm:text-2xl">{event.displayDate}</p>
              </div>
            ))}
          </div>
        </div>

        <div ref={ctaRef} className="mt-12">
          <MagneticButton onClick={handleOpenInvitation}>Open Invitation</MagneticButton>
        </div>
      </div>

      <ScrollCue />
    </section>
  )
}
