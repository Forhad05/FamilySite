import { Link } from 'react-router-dom'
import '../assets/Footer.css'
import logo from '../assets/logo-full.png'
import { IconFacebook, IconInstagram, IconLinkedIn, IconMail } from '../lib/Icons'

export default function Footer() {
  return (
    <section>
      <footer>
        <div className="site-footer">
          <div className="page-width">
            <div className="footer-top">
              <div className="footer-brand">
                <div className="logo">
                  <img src={logo} alt="Global Pathways Education Consulting" />
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
                  <li><Link to="/services">University Selection</Link></li>
                  <li><Link to="/services">Application Support</Link></li>
                  <li><Link to="/services">Student Visa Guidance</Link></li>
                  <li><Link to="/universities">Universities & Colleges</Link></li>
                  <li><Link to="/team">Meet the Team</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <ul>
                  <li><Link to="/study-in-australia">Study in Australia Guide</Link></li>
                  <li><Link to="/study-in-australia">Costs & Intakes</Link></li>
                  <li><Link to="/study-in-australia">Visa Fee Estimates</Link></li>
                  <li><Link to="/#checklist">Visa Checklist</Link></li>
                  <li><Link to="/#faqs">FAQs</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>About</h4>
                <ul>
                  <li><Link to="/about">Meet Sabina Yasmin</Link></li>
                  <li><Link to="/about">QEAC Certification</Link></li>
                  <li><Link to="/team">Our Family Team</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <span>© Copyright Global Pathways Education Consulting 2025</span>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61555824028180" target="_blank" aria-label="Facebook">
                  <IconFacebook width={16} height={16} />
                </a>
                <a href="#" aria-label="Instagram">
                  <IconInstagram width={16} height={16} />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <IconLinkedIn width={16} height={16} />
                </a>
                <Link to="/contact" aria-label="Email">
                  <IconMail width={16} height={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}