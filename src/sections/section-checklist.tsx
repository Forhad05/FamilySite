import home from '../lib/sabina/home.json'
import '../assets/section-checklist.scss'

export default function SectionChecklist() {
  return (
    <section className="section section-checklist" id="checklist">
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
  )
}
