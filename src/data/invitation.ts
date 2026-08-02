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
  hosts: {
    names: 'Mrs. Vijayasree & Mr. Vijayanunni',
    address: '"Vaishnavam", Mathur Mana Road, Thottakkara, Ottapalam, Palakkad',
    mobiles: ['9447561911', '9964246500'],
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
    parents: 'D/o Mrs. Jayashree & Mr. Janardhan',
    address: '"Vibhuda Nilaya", Vibhuda Priya Nagar, Udupi',
  },
  events: [
    {
      id: 'marriage',
      label: 'Marriage Ceremony',
      displayDate: 'Sunday, 30th August 2026',
      malayalamDate: '1202 Chingam 14',
      venueName: 'Shamili',
      venueAddress: 'NH 66, Near Ambalpadi Highway Junction, Brahmagiri, Udupi, Karnataka - 576103',
      mapQuery:
        'Shamili, NH 66, Near Ambalpadi Highway Junction, Brahmagiri, Udupi, Karnataka - 576103',
      time: '10:20 am',
    },
  ],
  creditLine: 'Sharing the Happiness: Vikhyath, Haritha and Vaishnavi',
  blessingLine: 'Presents in presence only',
}
