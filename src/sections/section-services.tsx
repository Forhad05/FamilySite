import home from '../lib/sabina/home.json'
import '../assets/section-services.scss'

export default function SectionServices() {
  return (
    <section className="section section-tint section-services" id="services">
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
  )
}
