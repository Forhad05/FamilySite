import team from '../lib/sabina/team.json'

export default function SectionTeamNote() {
  return (
    <section className="section section-tint">
      <div className="page-width">
        <div className="section-copy" style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2>{team.extendedFamilyNote.heading}</h2>
          <p>{team.extendedFamilyNote.paragraph}</p>
        </div>
      </div>
    </section>
  )
}
