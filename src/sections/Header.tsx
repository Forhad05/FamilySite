import '../assets/Header.css'

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            GLOBAL PATHWAYS
            <span>EDUCATION CONSULTING</span>
          </div>
          <ul className="nav-links">
            <li>
              <a href="#" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#study-in-australia">Study in Australia</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Sabina</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="nav-icons">
            <button aria-label="Search">🔍</button>
            <div className="nav-avatar">👩‍🏫</div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header