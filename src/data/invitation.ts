export const invitation = {
  bismillah: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
  bismillahTranslation: 'In the name of Allah, the Most Gracious, the Most Merciful',
  hosts: 'Mr. and Mrs. M. Rana Waseem',
  invitationIntro: 'cordially invite you to the',
  ceremony: 'Nikah Ceremony of Their Son',
  groom: 'M. Abdurehman Waseem',
  bride: 'Zainab Babar',
  date: '13 November 2026',
  dateUpper: '13 NOVEMBER 2026',
  day: 'Friday',
  venueName: 'Sitara Marquee by Taj Mahal',
  venueAddress: 'Civic Centre, West Canal Road, Faisalabad',
  closing: 'We look forward to celebrating this special occasion with you.',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Sitara Marquee by Taj Mahal, Civic Centre, West Canal Road, Faisalabad'),
} as const

export type Scene = 'cover' | 1 | 2 | 3 | 4 | 5 | 6

export const SCENE_LABELS: Record<Exclude<Scene, 'cover'>, string> = {
  1: 'Bismillah',
  2: 'The invitation',
  3: 'The couple',
  4: 'The date',
  5: 'The venue',
  6: 'Complete invitation',
}

export const SCENE_DURATION: Record<1 | 2 | 3 | 4 | 5, number> = {
  1: 4600,
  2: 5400,
  3: 5800,
  4: 5000,
  5: 5800,
}
