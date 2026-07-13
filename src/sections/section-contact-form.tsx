import contact from '../lib/sabina/contact-us.json'
import formTeamImg from '../lib/figma-exports/home-page--mask-group-5.png'

export default function SectionContactForm() {
  return (
    <section className="section section-contact-form" id="consultation">
      <div className="page-width">
        <div className="form-card">
          <h2>Schedule a Free Consultation</h2>
          <p className="form-lede">
            Get advice tailored to your situation — free, confidential, and without obligation.
          </p>
          <div className="form-columns">
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              {contact.contactForm.fields.map((field) =>
                field === 'What would you like help with?' ? (
                  <textarea key={field} name={field} placeholder={field} aria-label={field} />
                ) : (
                  <input
                    key={field}
                    type={field === 'Your Email' ? 'email' : field === 'Phone Number' ? 'tel' : 'text'}
                    name={field}
                    placeholder={field}
                    aria-label={field}
                  />
                )
              )}
              <button type="submit">Send Message →</button>
            </form>
            <div className="form-illustration">
              <img
                src={formTeamImg}
                alt="The Global Educational Pathways team ready to take your call"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
