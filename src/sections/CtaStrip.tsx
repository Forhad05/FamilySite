import { Link } from 'react-router-dom'

export default function CtaStrip() {
  return (
    <section className="cta-banner section-tint" style={{ background: '#4f74b5' }}>
      <div className="page-width">
        <div>
          <h2 style={{ color: '#fff' }}>Need Guidance? Talk To Sabina.</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)' }}>
            Free, confidential, and without obligation.
          </p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-outline" to="/contact">
            Book Free Consultation →
          </Link>
          <span style={{ color: '#fff' }}>or call directly</span>
          <a className="btn btn-outline-light" href="tel:+61000000000">
            📞 +61 000 000 000
          </a>
        </div>
        <div className="cta-emoji">🎓</div>
      </div>
    </section>
  )
}
