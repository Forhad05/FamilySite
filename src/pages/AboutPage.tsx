import '../assets/AboutPage.scss'
import about from '../lib/sabina/about.json'
import SectionPageHero from '../sections/section-page-hero'
import SectionFounderStory from '../sections/section-founder-story'
import SectionCredential from '../sections/section-credential'
import { usePageMeta } from '../hooks/usePageMeta'

export default function AboutPage() {
  usePageMeta(
    'About Sabina Yasmin',
    "A family-run consultancy founded on one woman's journey from village veterinarian to QEAC-certified education counsellor.",
  )

  return (
    <>
      <SectionPageHero title={about.heading} lede={about.tagline} ledeItalic />
      <SectionFounderStory />
      <SectionCredential />
    </>
  )
}
