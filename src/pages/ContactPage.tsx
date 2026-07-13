import '../assets/ContactPage.scss'
import contact from '../lib/sabina/contact-us.json'
import SectionPageHero from '../sections/section-page-hero'
import SectionOffices from '../sections/section-offices'
import SectionContactForm from '../sections/section-contact-form'
import { usePageMeta } from '../hooks/usePageMeta'

export default function ContactPage() {
  usePageMeta(
    'Contact Us',
    'Get in touch with Global Educational Pathways for general enquiries or to start your study-in-Australia application.',
  )

  return (
    <>
      <SectionPageHero title={contact.heading} lede={contact.paragraph} />
      <SectionOffices />
      <SectionContactForm />
    </>
  )
}
