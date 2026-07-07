import '../App.css'
import about from '../lib/sabina/about.json'

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <h1>{about.heading}</h1>
          <p style={{ fontStyle: 'italic' }}>{about.tagline}</p>
        </div>
      </section>

      {about.founderStory.map((part, index) => (
        <section
          className={`section ${index % 2 === 0 ? 'section-tint' : ''}`.trim()}
          key={part.heading}
        >
          <div className="page-width">
            <div className={`section-row ${index % 2 === 1 ? 'reverse' : ''}`.trim()}>
              <div className="section-copy">
                <h2>{part.heading}</h2>
                <p>{part.paragraph}</p>
              </div>
              <div className="section-art">
                <div className="illustration">👩‍🏫</div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="page-width">
          <div className="credential-badge">
            <span className="credential-icon">🎖️</span>
            <div>
              <strong>{about.credential.title}</strong>
              <p>
                {about.credential.issuedBy} · Graduate No. {about.credential.graduateNo} ·
                Issued {about.credential.issuedOn}
              </p>
              <p>{about.credential.note}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
