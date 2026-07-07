import './App.css'
import home from './lib/sabina/home.json'
import about from './lib/sabina/about.json'

function App() {
  return (
    <>
      <section className="hero">
        <div className="page-width">
          <div className="hero-copy">
            <h1>
              {home.hero.heading.split(' Studying')[0]}
              <span className="accent">
                {` Studying${home.hero.heading.split(' Studying')[1]}`}
              </span>
            </h1>
            <p>{home.hero.paragraph}</p>
            <div className="hero-actions">
              {home.hero.ctas.map((cta) => (
                <a key={cta.label} className="btn btn-outline-light" href={cta.url}>
                  {cta.label} →
                </a>
              ))}
            </div>
          </div>
          <div className="hero-art">🎓</div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="page-width">
          <div className="section-row">
            <div className="section-copy">
              <h2>{about.heading}</h2>
              <p style={{ fontStyle: 'italic' }}>{about.tagline}</p>
              {about.founderStory.map((part) => (
                <p key={part.heading}>{part.paragraph}</p>
              ))}
              <div className="credential-badge">
                <span className="credential-icon">🎖️</span>
                <div>
                  <strong>{about.credential.title}</strong>
                  <p>
                    {about.credential.issuedBy} · Graduate No. {about.credential.graduateNo} ·
                    Issued {about.credential.issuedOn}
                  </p>
                </div>
              </div>
            </div>
            <div className="section-art">
              <div className="illustration">👩‍🏫</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint" id="services">
        <div className="page-width">
          <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>{home.services.heading}</h2>
          <div className="services-grid">
            {home.services.items.map((item) => (
              <div className="service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="checklist">
        <div className="page-width">
          <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>
            {home.studyAbroadChecklist.heading}
          </h2>
          <ol className="checklist">
            {home.studyAbroadChecklist.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section-tint" id="faqs">
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
    </>
  )
}

export default App
