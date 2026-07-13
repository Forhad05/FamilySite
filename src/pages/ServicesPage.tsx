import '../assets/ServicesPage.scss'
import services from '../lib/sabina/services.json'
import SectionPageHero from '../sections/section-page-hero'
import SectionServiceList from '../sections/section-service-list'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ServicesPage() {
  usePageMeta(
    'Services',
    'Sabina personally leads every application, supported by a small family team handling communication and post-arrival help — not a rotating cast of junior staff.',
  )

  return (
    <>
      <SectionPageHero title={services.heading} lede={services.intro} />
      <SectionServiceList />
    </>
  )
}
