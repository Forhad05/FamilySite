import team from '../lib/sabina/team.json'

const isPlaceholder = (value: string) => /placeholder|TODO/i.test(value)

function getInitials(text: string) {
  const words = text.replace(/[()]/g, '').split(' ').filter(Boolean)
  return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

export default function SectionTeamGrid() {
  return (
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
  )
}
