import contact from '../lib/sabina/contact-us.json'

const isPlaceholder = (value: string) => /^TODO/i.test(value)

export default function SectionOffices() {
  return (
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
  )
}
