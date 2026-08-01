import type { InvitationData } from './types'

/**
 * Single source of truth for all real wedding content.
 * Every value here is transcribed directly from the couple's printed
 * invitation — nothing here is invented or placeholder text.
 */
export const invitation: InvitationData = {
  invocation: 'Sree Ganeshaya Namaha',
  couple: {
    groom: 'Vivek',
    bride: 'Gauthami',
  },
  weddingLine: 'Wedding Reception',
  hosts: {
    names: 'Mr. Vijayanunni & Mrs. Vijayasree',
    address: '"Vaishnavam", Mathur Mana Road, Thottakkara, Ottapalam, Palakkad',
    mobiles: ['9495189863', '9496569687'],
  },
  invitationLine:
    'Solicit your esteemed presence with family for a Reception in connection with the marriage of our son',
  groom: {
    name: 'Vivek',
    lineage: [
      {
        label: 'Grand S/o. Thelakkat Panchali Amma & Late Vadikkeettil Narayanan Master',
      },
      {
        label: 'and Kariveettil Malathy Teacher & Late Srambikkal Krishnankutty Nair',
      },
    ],
  },
  bride: {
    name: 'Gauthami',
    parents: 'D/o Mr. Janardhan & Mrs. Jayashree',
    address: '"Vibhuda Nilaya", Vibhuda Priya Nagar, Udupi',
  },
  events: [
    {
      id: 'marriage',
      label: 'Marriage Ceremony',
      displayDate: 'Sunday, 30th August 2026',
      malayalamDate: '1202 Chingam 14',
      venueName: 'Shamili',
      venueAddress: 'Sri Krishnanugraha Hall, Udupi',
      mapQuery: 'Sri Krishnanugraha Hall, Udupi',
    },
    {
      id: 'reception',
      label: 'Wedding Reception',
      displayDate: 'Tuesday, 1st September 2026',
      malayalamDate: '1202 Chingam 16',
      venueName: "Pisharody's Auditorium",
      venueAddress: 'Kanniyampuram, Ottappalam',
      mapQuery: "Pisharody's Auditorium, Kanniyampuram, Ottappalam",
      time: '04:30 pm to 07:30 pm',
    },
  ],
  creditLine: 'Sharing the Happiness: Vikhyath & Haritha',
  blessingLine: 'Presents in blessings only',
}
