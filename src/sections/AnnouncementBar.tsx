import '../assets/AnnouncementBar.css'

export default function AnnouncementBar() {
  return (
    <section>
      <div className="topbar">
        <div className="page-width">
          <span className="topbar-message">
            ↗ Free 30-minute consultation for new students ↗ Book today!
          </span>
          <a className="topbar-phone" href="tel:+61000000000">
            📞 +61 000 000 000
          </a>
        </div>
      </div>
    </section>
  )
}