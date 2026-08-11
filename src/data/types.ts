export interface HostDetails {
  names: string
  address: string
  mobiles: string[]
}

export interface LineageEntry {
  label: string
}

export interface EventDetail {
  id: 'marriage' | 'reception'
  label: string
  displayDate: string
  venueName: string
  venueAddress: string
  mapQuery: string
  mapUrl?: string
  time?: string
}

export interface InvitationData {
  invocation: string
  couple: {
    groom: string
    bride: string
  }
  hosts: HostDetails
  invitationLine: string
  groom: {
    name: string
    lineage: LineageEntry[]
  }
  bride: {
    name: string
    parents: string
    address: string
  }
  events: EventDetail[]
  creditLine: string
  blessingLine: string
}
