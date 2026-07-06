import './App.css'

function StatBanner({ stat, text, source }: { stat: string; text: string; source: string }) {
  return (
    <div className="stat-banner">
      <div className="stat-number">{stat}</div>
      <div className="stat-text">
        <p>{text}</p>
        <strong>— {source}</strong>
      </div>
    </div>
  )
}

function CtaStrip() {
  return (
    <section className="cta-banner section-tint" style={{ background: '#4f74b5' }}>
      <div className="container">
        <div>
          <h2 style={{ color: '#fff' }}>Need Guidance? Talk To Sabina.</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)' }}>
            Free, confidential, and without obligation.
          </p>
        </div>
        <div className="cta-actions">
          <a className="btn btn-outline" href="#contact">
            Book Free Consultation →
          </a>
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

function App() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-copy">
            <h1>
              Your Trusted Guide To
              <span className="accent">Studying in Australia</span>
            </h1>
            <p>
              Personalised, QEAC-certified education counselling from
              application to arrival — guided by Sabina Yasmin, Professor at
              Sydney Imperial Institute.
            </p>
            <div className="hero-actions">
              <a className="btn btn-outline-light" href="#contact">
                Book Free Consultation →
              </a>
              <span>or call directly</span>
              <a className="btn btn-outline-light" href="tel:+61000000000">
                📞 +61 000 000 000
              </a>
            </div>
          </div>
          <div className="hero-art">🎓</div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-row">
            <div className="section-copy">
              <h2>Meet Sabina Yasmin</h2>
              <p>
                Sabina Yasmin is a Professor at Sydney Imperial Institute and
                a Qualified Education Agent Counsellor (QEAC), certified by
                ICEF Academy's Education Agent Training Course (EATC) on 20
                October 2024 (Graduate No. #13556). She has spent years
                guiding students through every stage of the journey to study
                in Australia — from choosing the right course to settling in
                after arrival.
              </p>
              <p>
                Her training and academic background mean students get
                advice that is both credentialed and grounded in real
                classroom experience — not just paperwork, but an honest
                sense of what studying and living in Australia is actually
                like.
              </p>
              <div className="credential-badge">
                <span className="credential-icon">🎖️</span>
                <div>
                  <strong>Qualified Education Agent Counsellor (QEAC)</strong>
                  <p>ICEF Academy · Graduate No. #13556 · Issued 20 Oct 2024</p>
                </div>
              </div>
            </div>
            <div className="section-art">
              <div className="illustration">👩‍🏫</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint" id="services">
        <div className="container">
          <div className="section-row reverse">
            <div className="section-copy">
              <h2>Undergraduate &amp; Foundation Pathways</h2>
              <p>
                For high school graduates exploring their first step into
                Australian higher education, we help map out foundation
                programs, diplomas, and bachelor degrees suited to your
                grades, budget, and career goals.
              </p>
              <p>
                From shortlisting universities to preparing a strong
                application, we make sure every document — transcripts,
                statements of purpose, English test scores — is ready before
                a deadline ever becomes a problem.
              </p>
              <a className="btn btn-primary" href="#contact">
                Learn More
              </a>
            </div>
            <div className="section-art">
              <div className="illustration">🎒</div>
            </div>
          </div>

          <div style={{ marginTop: '64px' }}>
            <StatBanner
              stat="700k+"
              text="International students choose Australia every year, making it one of the world's top three study destinations."
              source="Australian Government, Department of Education"
            />
          </div>
        </div>
      </section>

      <CtaStrip />

      <section className="section">
        <div className="container">
          <div className="section-row">
            <div className="section-copy">
              <h2>Postgraduate &amp; Research Students</h2>
              <p>
                Planning a Master's, MBA, or PhD? We help you identify
                supervisors, research groups, and scholarship opportunities
                that match your academic interests, and guide you through
                university-specific application requirements.
              </p>
              <p>
                Sabina's own academic experience as a professor gives
                candidates a rare, insider perspective on what admissions
                committees are actually looking for.
              </p>
              <a className="btn btn-primary" href="#contact">
                Learn More
              </a>
            </div>
            <div className="section-art">
              <div className="illustration">🔬</div>
            </div>
          </div>

          <div style={{ marginTop: '64px' }}>
            <StatBanner
              stat="200+"
              text="Students and families guided through university shortlisting, applications, and visa preparation to date."
              source="Global Pathways Education Consulting"
            />
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-row reverse">
            <div className="section-copy">
              <h2>Student Visa &amp; Migration Support</h2>
              <p>
                Visa applications are where most study plans stall. We walk
                you through the Subclass 500 student visa process — GTE
                statements, financial evidence, health cover, and interview
                preparation — so nothing is left to guesswork.
              </p>
              <p>
                We also advise on post-study work rights and long-term
                pathways for students who plan to build a career in
                Australia after graduation.
              </p>
              <a className="btn btn-primary" href="#contact">
                Learn More
              </a>
            </div>
            <div className="section-art">
              <div className="illustration">🛂</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-row">
            <div className="section-copy">
              <h2>Parents &amp; Families</h2>
              <p>
                Sending a child abroad is as much an emotional decision as a
                practical one. We work directly with families to answer
                questions about cost of living, safety, accommodation, and
                staying connected — so the whole family feels confident
                about the move, not just the student.
              </p>
              <a className="btn btn-primary" href="#contact">
                Learn More
              </a>
            </div>
            <div className="section-art">
              <div className="illustration">👨‍👩‍👧</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App