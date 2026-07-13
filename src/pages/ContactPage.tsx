import '../assets/section-offices.scss'
import '../assets/section-contact-form.scss'
import contact from '../lib/sabina/contact-us.json'
import { usePageMeta } from '../hooks/usePageMeta'

const isPlaceholder = (value: string) => /^TODO/i.test(value)

export default function ContactPage() {
  usePageMeta(
    'Contact Us',
    'Get in touch with Global Educational Pathways for general enquiries or to start your study-in-Australia application.',
  )

  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <h1>{contact.heading}</h1>
          <p>{contact.paragraph}</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="office-grid">
            {contact.offices.map((office) => (
              <div className="office-card" key={office.city}>
                <h3>{isPlaceholder(office.city) ? office.country : office.city}</h3>
                <div className="office-country">{office.country} · {office.note}</div>
                <dl>
                  {!isPlaceholder(office.address) && (
                    <>
                      <dt>Address</dt>
                      <dd>{office.address}</dd>
                    </>
                  )}
                  {!isPlaceholder(office.phone) && (
                    <>
                      <dt>Phone</dt>
                      <dd>
                        <a href={`tel:${office.phone.replace(/\s+/g, '')}`}>{office.phone}</a>
                      </dd>
                    </>
                  )}
                  {!isPlaceholder(office.email) && (
                    <>
                      <dt>Email</dt>
                      <dd>
                        <a href={`mailto:${office.email}`}>{office.email}</a>
                      </dd>
                    </>
                  )}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="page-width">
          <h2 style={{ textAlign: 'center', marginBottom: '32px' }}>Schedule a Free Consultation</h2>
          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
            {contact.contactForm.fields.map((field) =>
              field === 'What would you like help with?' ? (
                <label key={field}>
                  {field}
                  <textarea name={field} />
                </label>
              ) : (
                <label key={field}>
                  {field}
                  <input
                    type={field === 'Your Email' ? 'email' : field === 'Phone Number' ? 'tel' : 'text'}
                    name={field}
                  />
                </label>
              )
            )}
            <button type="submit" className="btn btn-primary">
              Send Message →
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
