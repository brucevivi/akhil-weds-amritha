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
    mobiles: ['8075803336', '8138889694'],
  },
  invitationLine: 'Solicit your esteemed presence with family for the Marriage of our son',
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
      id: 'marriage',
      label: 'Marriage Ceremony',
      displayDate: 'Saturday, 5th September 2026',
      malayalamDate: '',
      venueName: 'Chaldean Center',
      venueAddress: 'Pallikkulam, Thrissur',
      mapQuery: 'Chaldean Center, Pallikkulam, Thrissur',
      mapUrl: 'https://share.google/tIU65fVl6VJOzjxzz',
      time: '10:30 am to 11:30 am',
    },
  ],
  creditLine: 'Sharing the Happiness: Shaju, Kavya, Rishan, & Ishan',
  blessingLine: 'Presents in presence only',
}
