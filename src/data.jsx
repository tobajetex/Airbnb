import katie from './assets/images/katie-zaferes.png'
import wedding from './assets/images/wedding-photography.png'
import mountain from './assets/images/mountain-bike.png'
import AmericaWildlife from './assets/images/America-wildlife.png'
import northAmericanIcons from './assets/images/north-american-icons.png'
import europeanCulinary from './assets/images/european-culinary.png'
import europeanCastles from './assets/images/european-castles.png'
import africanSafari from './assets/images/african-safari.png'
import mediterraneanCoast from './assets/images/mediterranean-coast.png'
import africanCulture from './assets/images/african-culture.png'
import europeanMuseums from './assets/images/european-museums.png'
import europeanWine from './assets/images/european-wine.png'
import serengetiWildlife from './assets/images/serengeti-wildlife.png'
import africanDrumming from './assets/images/african-drumming.png'
import saharaDesert from './assets/images/sahara-desert.png'

export default [
  {
    id: 1,
    title: 'Life Lessons with Katie Zaferes',
    description:
      'I will share with you what I call "Positively Impactful Moments of Disappointment." Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.',
    price: 136,
    coverImg: katie,
    stats: {
      rating: 5.0,
      reviewCount: 6,
    },
    location: 'Online',
    openSpots: 0,
    Region: 'North America',
  },
  {
    id: 2,
    title: 'Learn Wedding Photography',
    description:
      "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
    price: 125,
    coverImg: wedding,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: 'Online',
    openSpots: 27,
    Region: 'North America',
  },
  {
    id: 3,
    title: 'Group Mountain Biking',
    description:
      'Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)',
    price: 50,
    coverImg: mountain,
    stats: {
      rating: 4.8,
      reviewCount: 2,
    },
    location: 'Norway',
    openSpots: 3,
    Region: 'North America',
  },
  {
    id: 4,
    title: 'North American Wildlife Adventure',
    description:
      'Explore the diverse wildlife of North America in its natural habitat. Witness incredible species and learn from experienced guides.',
    price: 110,
    coverImg: AmericaWildlife,
    stats: { rating: 4.7, reviewCount: 15 },
    location: 'Online',
    openSpots: 5,
    Region: 'North America',
  },
  {
    id: 5,
    title: 'City Tour: Exploring North American Icons',
    description:
      "Discover the iconic landmarks and cultural gems of North America's cities. Join us for a comprehensive tour led by local experts.",
    price: 85,
    coverImg: northAmericanIcons,
    stats: { rating: 4.5, reviewCount: 28 },
    location: 'Canada',
    openSpots: 10,
    Region: 'North America',
  },
  {
    id: 6,
    title: 'European Culinary Expedition',
    description:
      'Embark on a culinary journey across Europe, exploring the rich flavors and traditional dishes of various European countries.',
    price: 180,
    coverImg: europeanCulinary,
    stats: { rating: 4.9, reviewCount: 22 },
    location: 'Online',
    openSpots: 6,
    Region: 'Europe',
  },
  {
    id: 7,
    title: 'Castles & Palaces Tour',
    description:
      "Experience the grandeur of Europe's castles and palaces. Dive into the history and architecture of these remarkable landmarks.",
    price: 140,
    coverImg: europeanCastles,
    stats: { rating: 4.6, reviewCount: 35 },
    location: 'Germany',
    openSpots: 12,
    Region: 'Europe',
  },
  {
    id: 8,
    title: 'African Safari Adventure',
    description:
      'Embark on an unforgettable safari expedition in the heart of Africa. Witness the "Big Five" and marvel at the natural beauty.',
    price: 250,
    coverImg: africanSafari,
    stats: { rating: 4.8, reviewCount: 18 },
    location: 'Nigeria',
    openSpots: 4,
    Region: 'Africa',
  },
  {
    id: 9,
    title: 'Cultural Discoveries in Africa',
    description:
      'Immerse yourself in the rich cultures of Africa through traditional rituals, music, and art. Connect with local communities.',
    price: 120,
    coverImg: africanCulture,
    stats: { rating: 4.7, reviewCount: 26 },
    location: 'Online',
    openSpots: 8,
    Region: 'Africa',
  },
  {
    id: 10,
    title: 'Mediterranean Coast Adventure',
    description:
      'Experience the charm of the Mediterranean coast as you explore picturesque villages, indulge in local cuisine, and relax on stunning beaches.',
    price: 160,
    coverImg: mediterraneanCoast,
    stats: { rating: 4.6, reviewCount: 14 },
    location: 'Europe',
    openSpots: 8,
    Region: 'Europe',
  },
  {
    id: 11,
    title: "Art and Architecture Tour: Europe's Museums",
    description:
      'Dive into the world of art and architecture by visiting renowned museums and galleries across Europe. Learn from expert curators and historians.',
    price: 130,
    coverImg: europeanMuseums,
    stats: { rating: 4.9, reviewCount: 31 },
    location: 'Online',
    openSpots: 15,
    Region: 'Europe',
  },
  {
    id: 12,
    title: 'European Wine Tasting Journey',
    description:
      "Embark on a wine tasting journey through Europe's most famous vineyards. Sample a variety of exquisite wines and learn about winemaking.",
    price: 175,
    coverImg: europeanWine,
    stats: { rating: 4.8, reviewCount: 20 },
    location: 'France',
    openSpots: 6,
    Region: 'Europe',
  },
  {
    id: 13,
    title: 'Serengeti Wildlife Expedition',
    description:
      "Witness the incredible migration of wildebeests and zebras across the Serengeti plains. Experience Africa's iconic wildlife in its natural habitat.",
    price: 280,
    coverImg: serengetiWildlife,
    stats: { rating: 4.9, reviewCount: 25 },
    location: 'Africa',
    openSpots: 3,
    Region: 'Africa',
  },
  {
    id: 14,
    title: 'African Drumming and Dance Workshop',
    description:
      'Engage with the rhythms of Africa through interactive drumming and dance workshops. Immerse yourself in the vibrant cultural traditions.',
    price: 90,
    coverImg: africanDrumming,
    stats: { rating: 4.7, reviewCount: 12 },
    location: 'Africa',
    openSpots: 10,
    Region: 'Africa',
  },
  {
    id: 15,
    title: 'Desert Safari: Sahara Adventure',
    description:
      'Embark on a captivating desert safari through the Sahara. Marvel at the golden dunes, experience traditional nomadic culture, and stargaze at night.',
    price: 210,
    coverImg: saharaDesert,
    stats: { rating: 4.5, reviewCount: 19 },
    location: 'Africa',
    openSpots: 7,
    Region: 'Africa',
  },
]
