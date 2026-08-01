import { SectionContainer } from '@/components/layout/SectionContainer'
import { AmbientParticles } from '@/components/background/AmbientParticles'
import { PatternBackground } from '@/components/background/PatternBackground'
import { RSVPForm } from './RSVPForm'

export function RSVP() {
  return (
    <SectionContainer
      id="rsvp"
      className="bg-cream"
      background={
        <>
          <PatternBackground color="#C9A227" opacity={0.07} />
          <AmbientParticles count={40} color="107, 52, 16" className="opacity-60" />
        </>
      }
    >
      <RSVPForm />
    </SectionContainer>
  )
}
