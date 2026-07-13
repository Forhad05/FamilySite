import services from '../lib/sabina/services.json'
import waveArt from '../lib/figma-exports/who-we-serve--clip-path-group.png'

export default function SectionServiceList() {
  return (
    <section className="section section--decorated">
      <img className="section-decoration" src={waveArt} alt="" />
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
  )
}
