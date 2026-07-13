import home from '../lib/sabina/home.json'
import Accordion from '../components/Accordion'

export default function SectionFaqs() {
  return (
    <section className="section section-tint section-faqs" id="faqs">
      <div className="page-width">
        <h2>{home.faqs.heading}</h2>
        <Accordion
          defaultOpen={0}
          items={home.faqs.items.map((faq) => ({ header: faq.question, body: faq.answer }))}
        />
      </div>
    </section>
  )
}
