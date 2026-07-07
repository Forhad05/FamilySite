import '../App.css'
import team from '../lib/sabina/team.json'

const isPlaceholder = (value: string) => /placeholder|TODO/i.test(value)

export default function TeamPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <h1>{team.heading}</h1>
          <p>{team.paragraph}</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="team-grid">
            {team.members.map((member) => (
              <div className="team-card" key={member.name}>
                <div className="team-avatar">🧑‍💼</div>
                <h3>{isPlaceholder(member.name) ? member.role : member.name}</h3>
                <div className="team-role">
                  {member.role} · {member.location}
                </div>
                {'credential' in member && <p>{member.credential}</p>}
                {'education' in member && <p>{member.education}</p>}
                {'background' in member && <p>{member.background}</p>}
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="page-width">
          <div className="section-row">
            <div className="section-copy">
              <h2>{team.extendedFamilyNote.heading}</h2>
              <p>{team.extendedFamilyNote.paragraph}</p>
            </div>
            <div className="section-art">
              <div className="illustration">🏡</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
