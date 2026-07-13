import { Link } from 'react-router-dom'
import { IconPhone } from '../lib/Icons'
import '../assets/section-cta-strip.scss'

export default function CtaStrip() {
  return (
    <section className="cta-banner">
      <div className="page-width">
        <div>
          <h2>Need Guidance? Talk To Sabina.</h2>
          <p className="cta-lede">Free, confidential, and without obligation.</p>
        </div>
        <div className="cta-actions">
          <Link className="btn btn-outline" to="/contact">
            Book Free Consultation →
          </Link>
          <span className="cta-divider">or call directly</span>
          <a className="btn btn-outline-light" href="tel:+61000000000">
            <IconPhone width={16} height={16} />
            +61 000 000 000
          </a>
        </div>
      </div>
    </section>
  )
}
