import './App.css'

function StatBanner() {
  return (
    <div className="stat-banner">
      <div className="stat-number">80%</div>
      <div className="stat-text">
        <p>
          Over 80% of reputation damage risks come from a mismatch between
          the buzz and the reality.
        </p>
        <strong>— Digimind</strong>
      </div>
    </div>
  )
}

function CtaStrip() {
  return (
    <section className="cta-banner section-tint" style={{ background: '#4f74b5' }}>
      <div className="container">
        <div>
          <h2 style={{ color: '#fff' }}>Need Assistance? Talk To An Expert.</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)' }}>
            Free, confidential, and without obligation.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-outline" href="#contact">
            Get Free Consultation →
          </a>
          <span style={{ color: '#fff' }}>or Talk to an Expert</span>
          <a className="btn btn-outline-light" href="tel:+10124567890">
            📞 +1 012 456-7890
          </a>
        </div>
        <div className="cta-emoji">📣</div>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-copy">
            <h1>
              Solutions As Unique As
              <span className="accent">Your Reputation</span>
            </h1>
            <p>
              We've been serving a diverse range of people and businesses
              worldwide for over a decade.
            </p>
            <div className="hero-actions">
              <a className="btn btn-outline-light" href="#contact">
                Get Free Consultation →
              </a>
              <span>or Talk to an Expert</span>
              <a className="btn btn-outline-light" href="tel:+10124567890">
                📞 +1 012 456-7890
              </a>
            </div>
          </div>
          <div className="hero-art">💡</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-row">
            <div className="section-copy">
              <h2>Individuals &amp; Professionals</h2>
              <p>
                Stedo Reputation offers valuable services to help individuals
                manage and influence the news and articles that appear in
                their Google search results. This service is particularly
                crucial since the first page of search results for your name
                can essentially serve as your online curriculum vitae (CV).
                It showcases your digital reputation to potential employers,
                clients, and anyone who might be searching for you.
              </p>
              <p>
                By ensuring that the information presented on Page 1 is
                accurate and positive, Stedo Reputation helps you put your
                best digital foot forward. This not only enhances your
                professional image but also maintains a favorable online
                presence. With Stedo Reputation's expertise, you can
                confidently manage your digital reputation, ensuring that
                what people find online reflects the best version of you.
              </p>
              <a className="btn btn-primary" href="#learn-more">
                Learn More
              </a>
            </div>
            <div className="section-art">
              <div className="illustration">🧑‍💻</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-row reverse">
            <div className="section-copy">
              <h2>Small Businesses</h2>
              <p>
                Stedo Reputation offers valuable services to help individuals
                manage and influence the news and articles that appear in
                their Google search results. This service is particularly
                crucial since the first page of search results for your name
                can essentially serve as your online curriculum vitae (CV).
                It showcases your digital reputation to potential employers,
                clients, and anyone who might be searching for you.
              </p>
              <p>
                By ensuring that the information presented on Page 1 is
                accurate and positive, Stedo Reputation helps you put your
                best digital foot forward. This not only enhances your
                professional image but also maintains a favorable online
                presence. With Stedo Reputation's expertise, you can
                confidently manage your digital reputation, ensuring that
                what people find online reflects the best version of you.
              </p>
              <a className="btn btn-primary" href="#learn-more">
                Learn More
              </a>
            </div>
            <div className="section-art">
              <div className="illustration">🏢</div>
            </div>
          </div>

          <div style={{ marginTop: '64px' }}>
            <StatBanner />
          </div>
        </div>
      </section>

      <CtaStrip />

      <section className="section">
        <div className="container">
          <div className="section-row">
            <div className="section-copy">
              <h2>Executives &amp; VIPs</h2>
              <p>
                Stedo Reputation offers valuable services to help individuals
                manage and influence the news and articles that appear in
                their Google search results. This service is particularly
                crucial since the first page of search results for your name
                can essentially serve as your online curriculum vitae (CV).
                It showcases your digital reputation to potential employers,
                clients, and anyone who might be searching for you.
              </p>
              <p>
                By ensuring that the information presented on Page 1 is
                accurate and positive, Stedo Reputation helps you put your
                best digital foot forward. This not only enhances your
                professional image but also maintains a favorable online
                presence. With Stedo Reputation's expertise, you can
                confidently manage your digital reputation, ensuring that
                what people find online reflects the best version of you.
              </p>
              <a className="btn btn-primary" href="#learn-more">
                Learn More
              </a>
            </div>
            <div className="section-art">
              <div className="illustration">🕴️</div>
            </div>
          </div>

          <div style={{ marginTop: '64px' }}>
            <StatBanner />
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-row reverse">
            <div className="section-copy">
              <h2>Large Companies</h2>
              <p>
                Stedo Reputation offers valuable services to help individuals
                manage and influence the news and articles that appear in
                their Google search results. This service is particularly
                crucial since the first page of search results for your name
                can essentially serve as your online curriculum vitae (CV).
                It showcases your digital reputation to potential employers,
                clients, and anyone who might be searching for you.
              </p>
              <p>
                By ensuring that the information presented on Page 1 is
                accurate and positive, Stedo Reputation helps you put your
                best digital foot forward. This not only enhances your
                professional image but also maintains a favorable online
                presence. With Stedo Reputation's expertise, you can
                confidently manage your digital reputation, ensuring that
                what people find online reflects the best version of you.
              </p>
              <a className="btn btn-primary" href="#learn-more">
                Learn More
              </a>
            </div>
            <div className="section-art">
              <div className="illustration">👥</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App