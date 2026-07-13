import './assets/App.scss'
import SectionHero from './sections/section-hero'
import SectionContactForm from './sections/section-contact-form'
import SectionAbout from './sections/section-about'
import SectionServices from './sections/section-services'
import SectionChecklist from './sections/section-checklist'
import SectionFaqs from './sections/section-faqs'
import { usePageMeta } from './hooks/usePageMeta'

function App() {
  usePageMeta(
    '',
    'Global Educational Pathways guides students end-to-end through studying in Australia — university selection, applications, visas, and post-arrival support, led personally by Sabina Yasmin.',
  )

  return (
    <>
      <SectionHero />
      <SectionContactForm />
      <SectionAbout />
      <SectionServices />
      <SectionChecklist />
      <SectionFaqs />
    </>
  )
}

export default App
