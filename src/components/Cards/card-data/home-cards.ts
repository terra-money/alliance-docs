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
    href: '/game-of-alliance/overview',
    lightSVG: '/img/logo.png',
    darkSVG: '/img/logo.png',
    header: 'Play the Game of Alliance',
    summary: 'Learn about the game\'s rules, missions, and prizes.'
  },
  {
    href: '/alliance',
    lightSVG: '/img/icons/station/stake.svg',
    darkSVG: '/img/icons/dark/stake.svg',
    header: 'How Alliance works',
    summary: 'Learn about Alliance staking and assets.'
  },
  {
    href: '/concepts/staking',
    lightSVG: '/img/icons/core/evidence.svg',
    darkSVG: '/img/icons/dark/evidence.svg',
    header: 'In-depth concepts',
    summary: 'Explore Alliance in detail.'
  },
  {
    href: '/guides/get-started',
    lightSVG: '/img/icons/buildanapp01.svg',
    darkSVG: '/img/icons/dark/buildanapp01.svg',
    header: 'Integration guide',
    summary: 'Learn how to add Alliance to your chain.'
  },
  {
    href: '/tech/join-the-testnet',
    lightSVG: '/img/icons/testnet.svg',
    darkSVG: '/img/icons/dark/testnet.svg',
    header: 'Join the testnet',
    summary: 'Create your own Alliance testing chain.'
  },
]

export default homeCards;
