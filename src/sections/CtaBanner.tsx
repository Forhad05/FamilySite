import '../assets/CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container">
        <div>
          <h2>Ready To Start Your Australian Journey?</h2>
          <p>Free, confidential guidance — no obligation.</p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-outline" href="#contact">
            Book Free Consultation →
          </a>
          <span>or call Sabina directly</span>
          <a className="btn btn-outline-light" href="tel:+61000000000">
            📞 +61 000 000 000
          </a>
        </div>
        <div className="cta-emoji">🎓</div>
      </div>
    </section>
  )
}