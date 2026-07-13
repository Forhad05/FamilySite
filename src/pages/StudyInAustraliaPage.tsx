import '../assets/StudyInAustraliaPage.scss'
import study from '../lib/sabina/study-in-australia.json'
import SectionPageHero from '../sections/section-page-hero'
import SectionStudyCosts from '../sections/section-study-costs'
import SectionStudyIntakes from '../sections/section-study-intakes'
import SectionStudyVisa from '../sections/section-study-visa'
import { usePageMeta } from '../hooks/usePageMeta'

export default function StudyInAustraliaPage() {
  usePageMeta(
    'Study in Australia',
    'Programs, costs, intakes, and what to prepare for studying in Australia — explained plainly.',
  )

  return (
    <>
      <SectionPageHero title={study.heading} lede={study.tagline} />
      <SectionStudyCosts />
      <SectionStudyIntakes />
      <SectionStudyVisa />
    </>
  )
}
