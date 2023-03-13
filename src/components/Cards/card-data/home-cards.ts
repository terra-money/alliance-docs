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
    href: '/tech/parameters',
    lightSVG: '/img/icons/core/params.svg',
    darkSVG: '/img/icons/dark/params.svg',
    header: 'Module Parameters',
    summary: 'Dive deep into the Alliance module specifications.'
  },
  {
    href: '/alliance-audit.pdf',
    lightSVG: '/img/icons/validator.svg',
    darkSVG: '/img/icons/dark/validator.svg',
    header: 'Code Audit',
    summary: 'Review Alliance\'s secure code audit.'
  },
]

export default homeCards;
