import { lazy, Suspense } from 'react'
import { Hero } from '@/sections/Hero/Hero'
import { InvitationUnfold } from '@/sections/InvitationUnfold/InvitationUnfold'
import { CustomCursor } from '@/components/cursor/CustomCursor'

const FormalInvitationCard = lazy(() =>
  import('@/sections/FormalInvitation/FormalInvitationCard').then((m) => ({
    default: m.FormalInvitationCard,
  })),
)
const FamilyBlessings = lazy(() =>
  import('@/sections/FamilyBlessings/FamilyBlessings').then((m) => ({
    default: m.FamilyBlessings,
  })),
)
const EventTimeline = lazy(() =>
  import('@/sections/EventTimeline/EventTimeline').then((m) => ({
    default: m.EventTimeline,
  })),
)
const VenueShowcase = lazy(() =>
  import('@/sections/VenueShowcase/VenueShowcase').then((m) => ({
    default: m.VenueShowcase,
  })),
)
const RSVP = lazy(() => import('@/sections/RSVP/RSVP').then((m) => ({ default: m.RSVP })))
const Footer = lazy(() => import('@/sections/Footer/Footer').then((m) => ({ default: m.Footer })))

function SectionFallback() {
  return <div className="bg-mahogany-900 min-h-[40vh] w-full" aria-hidden="true" />
}

function App() {
  return (
    <>
      <CustomCursor />
      <main>
        <Hero />
        <InvitationUnfold />
        <Suspense fallback={<SectionFallback />}>
          <FormalInvitationCard />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FamilyBlessings />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <EventTimeline />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <VenueShowcase />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <RSVP />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>
    </>
  )
}

export default App
