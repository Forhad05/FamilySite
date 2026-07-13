import home from '../lib/sabina/home.json'
import '../assets/section-faqs.scss'

export default function SectionFaqs() {
  return (
    <section className="section section-tint section-faqs" id="faqs">
      <div className="page-width">
        <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>{home.faqs.heading}</h2>
        <div className="faq-list">
          {home.faqs.items.map((faq) => (
            <div className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
