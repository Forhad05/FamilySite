import '../assets/TeamPage.scss'
import team from '../lib/sabina/team.json'
import heroImg from '../lib/figma-exports/vip-service--mask-group.png'
import SectionPageHero from '../sections/section-page-hero'
import SectionTeamGrid from '../sections/section-team-grid'
import SectionTeamNote from '../sections/section-team-note'
import { usePageMeta } from '../hooks/usePageMeta'

export default function TeamPage() {
  usePageMeta(
    'Our Team',
    'Global Educational Pathways is family-run, deliberately kept small so every student is a real relationship rather than a file number.',
  )

  return (
    <>
      <SectionPageHero
        title={team.heading}
        lede={team.paragraph}
        decoration={{ src: heroImg, style: { opacity: 0.5, right: '-4%', bottom: '-55%' } }}
      />
      <SectionTeamGrid />
      <SectionTeamNote />
    </>
  )
}
