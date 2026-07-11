import '../App.css'
import about from '../lib/sabina/about.json'
import startingOverImg from '../lib/figma-exports/solutions--mask-group.png'
import qeacImg from '../lib/figma-exports/personal-branding--clip-path-group.png'
import teamImg from '../lib/figma-exports/vip-service--mask-group.png'
import { usePageMeta } from '../hooks/usePageMeta'

const founderStoryArt: Record<number, { src: string; alt: string }> = {
  1: { src: startingOverImg, alt: 'Studying and requalifying to rebuild a career in Australia' },
  2: { src: qeacImg, alt: 'Formal QEAC training and certification' },
  3: { src: teamImg, alt: 'The family team working together with students' },
}

export default function AboutPage() {
  usePageMeta(
    'About Sabina Yasmin',
    "A family-run consultancy founded on one woman's journey from village veterinarian to QEAC-certified education counsellor.",
  )

  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <h1>{about.heading}</h1>
          <p style={{ fontStyle: 'italic' }}>{about.tagline}</p>
        </div>
      </section>

      {about.founderStory.map((part, index) => {
        const art = founderStoryArt[index]
        return (
          <section
            className={`section ${index % 2 === 0 ? 'section-tint' : ''}`.trim()}
            key={part.heading}
          >
            <div className="page-width">
              {art ? (
                <div className={`section-row ${index % 2 === 1 ? 'reverse' : ''}`.trim()}>
                  <div className="section-copy">
                    <h2>{part.heading}</h2>
                    <p>{part.paragraph}</p>
                  </div>
                  <div className="section-art">
                    <div className="illustration">
                      <img src={art.src} alt={art.alt} />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="section-copy" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
                  <h2>{part.heading}</h2>
                  <p>{part.paragraph}</p>
                </div>
              )}
            </div>
          </section>
        )
      })}

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
