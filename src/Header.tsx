import './Header.css'

function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="container">
          <span className="topbar-message">
            ↗ Limited time offer! Get 10% off on your first order ↗ Shop now!
          </span>
          <a className="topbar-phone" href="tel:+10124567890">
            📞 +1 012 456-7890
          </a>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            STEDO
            <span>REPUTATION</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Who We Serve</a>
            </li>
            <li>
              <a href="#">Self-Help</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
          <div className="nav-icons">
            <button aria-label="Search">🔍</button>
            <button aria-label="Account">👤</button>
            <div className="nav-avatar">🧑</div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header