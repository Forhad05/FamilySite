import contact from '../lib/sabina/contact-us.json'

export default function SectionContactForm() {
  return (
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
  )
}
