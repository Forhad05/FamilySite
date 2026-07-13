import about from '../lib/sabina/about.json'
import aboutIllustration from '../lib/figma-exports/personal-branding--clip-path-group.png'
import '../assets/section-about.scss'

export default function SectionAbout() {
  return (
    <section className="section section-about" id="about">
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
            <div className="illustration">
              <img src={aboutIllustration} alt="Sabina Yasmin working through a student's study plan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
