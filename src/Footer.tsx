import './Footer.css'

function Footer() {
  return (
    <footer>
      <section className="cta-banner">
        <div className="container">
          <div>
            <h2>Need Assistance? Talk To An Expert.</h2>
            <p>Free, confidential, and without obligation.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-outline" href="#contact">
              Get Free Consultation →
            </a>
            <span>or Talk to an Expert</span>
            <a className="btn btn-outline-light" href="tel:+10124567890">
              📞 +1 012 456-7890
            </a>
          </div>
          <div className="cta-emoji">📣</div>
        </div>
      </section>

      <div className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                STEDO
                <span>REPUTATION</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>
            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Damaged Search Results</a></li>
                <li><a href="#">Personal Branding</a></li>
                <li><a href="#">VIP Services</a></li>
                <li><a href="#">Digital Privacy</a></li>
                <li><a href="#">Individuals</a></li>
                <li><a href="#">Small Business</a></li>
                <li><a href="#">Executives</a></li>
                <li><a href="#">Large Companies</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Resource Centre</a></li>
                <li><a href="#">Guide to Online Reputation Management</a></li>
                <li><a href="#">What is Online Reputation Management</a></li>
                <li><a href="#">Online Privacy Tips</a></li>
                <li><a href="#">People-Search FAQs</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Press Room</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Patents</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© Copyright Stedo Reputation 2025</span>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer