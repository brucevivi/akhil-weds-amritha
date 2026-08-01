import { SectionContainer } from '@/components/layout/SectionContainer'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { RSVPForm } from './RSVPForm'

export function RSVP() {
  return (
    <SectionContainer id="rsvp" className="bg-mahogany-900" innerClassName="max-w-xl">
      <div className="mb-12 text-center">
        <Eyebrow>Kindly Respond</Eyebrow>
        <p className="font-display text-ivory mt-3 text-3xl sm:text-4xl">Will You Join Us?</p>
      </div>
      <RSVPForm />
    </SectionContainer>
  )
}
