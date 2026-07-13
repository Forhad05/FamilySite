import about from '../lib/sabina/about.json'
import aboutIllustration from '../lib/figma-exports/personal-branding--clip-path-group.png'
import counsellorImg from '../lib/figma-exports/vip-service--mask-group-2.png'

export default function SectionAbout() {
  const story = about.founderStory

  return (
    <>
      <section className="section section-about" id="about">
        <div className="page-width">
          <div className="section-row">
            <div className="section-copy">
              <h2>{about.heading}</h2>
              <p style={{ fontStyle: 'italic' }}>{about.tagline}</p>
              {story.slice(0, 3).map((part) => (
                <p key={part.heading}>{part.paragraph}</p>
              ))}
            </div>
            <div className="section-art">
              <div className="illustration">
                <img src={aboutIllustration} alt="Sabina Yasmin working through a student's study plan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-about">
        <div className="page-width">
          <div className="section-row reverse">
            <div className="section-copy">
              {story.slice(3).map((part) => (
                <div key={part.heading}>
                  <h2>{part.heading}</h2>
                  <p>{part.paragraph}</p>
                </div>
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
                <img src={counsellorImg} alt="Sabina Yasmin, QEAC-certified education counsellor, at work" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
