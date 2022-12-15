import { CardProps } from '../Card';

const homeCards: CardProps[] = [
  {
    href: '/overview',
    lightSVG: '/img/icons/hackathon-1.svg',
    darkSVG: '/img/icons/dark/hackathon-1.svg',
    header: 'Overview',
    summary: 'Discover the Alliance module.'
  },
  {
    href: '/concepts/what-is',
    lightSVG: '/img/icons/core/evidence.svg',
    darkSVG: '/img/icons/dark/evidence.svg',
    header: 'How it works',
    summary: 'Learn about Alliances and assets.'
  },
  {
    href: '/concepts/staking',
    lightSVG: '/img/icons/station/stake.svg',
    darkSVG: '/img/icons/dark/stake.svg',
    header: 'Alliance staking',
    summary: 'Learn about staking and rewards.'
  },
  {
    href: '/guides/get-started',
    lightSVG: '/img/icons/buildanapp01.svg',
    darkSVG: '/img/icons/dark/buildanapp01.svg',
    header: 'Integration guide',
    summary: 'Learn how to add Alliance to your chain.'
  },
  {
    href: '/guides/join-the-testnet',
    lightSVG: '/img/icons/testnet.svg',
    darkSVG: '/img/icons/dark/testnet.svg',
    header: 'Join the testnet',
    summary: 'Create your own Alliance testing chain.'
  },
  {
    href: '/tech/parameters',
    lightSVG: '/img/icons/core/params.svg',
    darkSVG: '/img/icons/dark/params.svg',
    header: 'Module Parameters',
    summary: 'Dive deep into the Alliance module specifications.'
  },
]

export default homeCards;
