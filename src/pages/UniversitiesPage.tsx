import '../assets/UniversitiesPage.scss'
import universities from '../lib/sabina/universities.json'
import SectionPageHero from '../sections/section-page-hero'
import SectionUniversities from '../sections/section-universities'
import { usePageMeta } from '../hooks/usePageMeta'

export default function UniversitiesPage() {
  usePageMeta(
    'Universities & Colleges',
    'Sabina works with a range of Australian universities and colleges to help students find the right institutional fit.',
  )

  return (
    <>
      <SectionPageHero title={universities.heading} lede={universities.paragraph} />
      <SectionUniversities />
    </>
  )
}
