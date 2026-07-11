import '../App.css'
import team from '../lib/sabina/team.json'
import heroImg from '../lib/figma-exports/vip-service--mask-group.png'
import { usePageMeta } from '../hooks/usePageMeta'

const isPlaceholder = (value: string) => /placeholder|TODO/i.test(value)

function getInitials(text: string) {
  const words = text.replace(/[()]/g, '').split(' ').filter(Boolean)
  return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

export default function TeamPage() {
  usePageMeta(
    'Our Team',
    'Global Educational Pathways is family-run, deliberately kept small so every student is a real relationship rather than a file number.',
  )

  return (
    <>
      <section className="page-hero">
        <img className="page-hero-decoration" src={heroImg} alt="" style={{ opacity: 0.5, right: '-4%', bottom: '-55%' }} />
        <div className="page-width">
          <h1>{team.heading}</h1>
          <p>{team.paragraph}</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="team-grid">
            {team.members.map((member) => {
              const displayName = isPlaceholder(member.name) ? member.role : member.name
              return (
              <div className="team-card" key={member.name}>
                <div className="team-avatar">{getInitials(displayName)}</div>
                <h3>{displayName}</h3>
                <div className="team-role">
                  {member.role} · {member.location}
                </div>
                {'credential' in member && <p>{member.credential}</p>}
                {'education' in member && <p>{member.education}</p>}
                {'background' in member && <p>{member.background}</p>}
                <p>{member.bio}</p>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="page-width">
          <div className="section-copy" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
            <h2>{team.extendedFamilyNote.heading}</h2>
            <p>{team.extendedFamilyNote.paragraph}</p>
          </div>
        </div>
      </section>
    </>
  )
}
