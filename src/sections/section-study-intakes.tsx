import study from '../lib/sabina/study-in-australia.json'

export default function SectionStudyIntakes() {
  return (
    <section className="section section-tint section-checklist">
      <div className="page-width">
        <div className="data-section">
          <h3>{study.intakes.heading}</h3>
          <p>{study.intakes.paragraph}</p>
          <ul className="checklist" style={{ margin: '16px 0' }}>
            {study.intakes.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="data-table-note">{study.intakes.note}</p>
        </div>

        <div className="data-section">
          <h3>{study.oshc.heading}</h3>
          <p>{study.oshc.paragraph}</p>
        </div>
      </div>
    </section>
  )
}
