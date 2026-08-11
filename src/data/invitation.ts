import type { InvitationData } from './types'

/**
 * Single source of truth for all real wedding content.
 * Every value here is transcribed directly from the couple's printed
 * invitation — nothing here is invented or placeholder text.
 */
export const invitation: InvitationData = {
  invocation: 'Sree Ganeshaya Namaha',
  couple: {
    groom: 'Akhil',
    bride: 'Amritha',
  },
  hosts: {
    names: 'Mrs. Sujatha Suresh and Mr. Suresh Kumar (late)',
    address: 'Souparnika, Kadavil House, P.O Anthikad, Thrissur',
    mobiles: ['8891557872', '9037960750'],
  },
  invitationLine:
    'Solicit your esteemed presence with family for a Reception in connection with the marriage of our son',
  groom: {
    name: 'Akhil',
    lineage: [],
  },
  bride: {
    name: 'Amritha',
    parents: 'D/o Mrs. Sheeja C M and Mr. Chandran P G (late)',
    address: 'Kavyamritham, Poossery House, Mukkattukara, Thrissur',
  },
  events: [
    {
      id: 'reception',
      label: 'Wedding Reception',
      displayDate: 'Saturday, 5th September 2026',
      venueName: 'Ababeel Palace Auditorium',
      venueAddress: 'Thalikulam, Thrissur',
      mapQuery: 'Ababeel Palace Auditorium, Thalikulam, Thrissur',
      mapUrl: 'https://maps.app.goo.gl/d11wgVhJUdJ8XhtX8?g_st=aw',
      time: '06:00 pm to 09:00 pm',
    },
  ],
  creditLine: 'Sharing the Happiness: Nikhil, Neenu & Family',
  blessingLine: 'Presents in presence only',
}
