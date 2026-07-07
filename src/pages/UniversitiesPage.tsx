import '../App.css'
import universities from '../lib/sabina/universities.json'

export default function UniversitiesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <h1>{universities.heading}</h1>
          <p>{universities.paragraph}</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          {universities.items.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">🎓</div>
              <p>
                Sabina reviews each student's goals individually and recommends the
                institutions that are genuinely the right fit — the full partner list
                is confirmed with you directly during your free assessment.
              </p>
              <p className="empty-state-note">Ask us during your consultation for the current list of partner institutions.</p>
            </div>
          ) : (
            <div className="services-grid">
              {universities.items.map((item: { title: string }) => (
                <div className="service-card" key={item.title}>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
