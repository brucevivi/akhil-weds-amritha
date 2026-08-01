import { lazy, Suspense } from 'react'
import { Hero } from '@/sections/Hero/Hero'
import { AudioToggle } from '@/components/audio/AudioToggle'

const FormalInvitationCard = lazy(() =>
  import('@/sections/FormalInvitation/FormalInvitationCard').then((m) => ({
    default: m.FormalInvitationCard,
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
      <AudioToggle className="fixed right-5 bottom-5 z-50 sm:right-8 sm:bottom-8" />
      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <FormalInvitationCard />
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
