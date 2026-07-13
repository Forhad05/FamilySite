import { Link } from 'react-router-dom'
import home from '../lib/sabina/home.json'
import heroBg from '../lib/figma-exports/home-page--mask-group.png'

export default function SectionHero() {
  return (
    <section className="hero">
      <img className="hero-bg" src={heroBg} alt="" />
      <div className="page-width">
        <div className="hero-copy">
          <h1>
            {home.hero.heading.split(' Studying')[0]}
            <span className="accent">
              {` Studying${home.hero.heading.split(' Studying')[1]}`}
            </span>
          </h1>
          <p>{home.hero.paragraph}</p>
          <div className="hero-actions">
            {home.hero.ctas.map((cta) => (
              <Link key={cta.label} className="btn btn-outline-light" to={cta.url}>
                {cta.label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
