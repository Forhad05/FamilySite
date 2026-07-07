import '../App.css'
import services from '../lib/sabina/services.json'

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <h1>{services.heading}</h1>
          <p>{services.intro}</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          {services.sections.map((item, index) => (
            <div className="numbered-row" key={item.id}>
              <div className="row-number">{index + 1}</div>
              <div className="row-body">
                <h3>{item.heading}</h3>
                <p className="why-it-matters">{item.whyItMatters}</p>
                <p>{item.ourApproach}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
