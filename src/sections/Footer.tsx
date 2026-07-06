import '../assets/Footer.css'

export default function Footer() {
  return (
    <section>
      <footer>
        <div className="site-footer">
          <div className="page-width">
            <div className="footer-top">
              <div className="footer-brand">
                <div className="logo">
                  GLOBAL PATHWAYS
                  <span>EDUCATION CONSULTING</span>
                </div>
                <p>
                  Independent, QEAC-certified education counselling helping
                  students plan, apply, and settle into study in Australia —
                  led by Sabina Yasmin, Professor at Sydney Imperial Institute.
                </p>
              </div>
              <div className="footer-col">
                <h4>Services</h4>
                <ul>
                  <li><a href="#services">University Selection</a></li>
                  <li><a href="#services">Application Support</a></li>
                  <li><a href="#services">Student Visa Guidance</a></li>
                  <li><a href="#services">Scholarship Advice</a></li>
                  <li><a href="#services">Pre-Departure Briefing</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Study in Australia Guide</a></li>
                  <li><a href="#">English Test Requirements</a></li>
                  <li><a href="#">Cost of Living Estimator</a></li>
                  <li><a href="#">Visa Checklist</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>About</h4>
                <ul>
                  <li><a href="#about">Meet Sabina Yasmin</a></li>
                  <li><a href="#about">QEAC Certification</a></li>
                  <li><a href="#">Sydney Imperial Institute</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© Copyright Global Pathways Education Consulting 2025</span>
              <div className="social-icons">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="Email">✉️</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}