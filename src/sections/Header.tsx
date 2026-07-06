import '../assets/Header.css'
import HeaderActions from '../components/HeaderActions'
import HeaderMenu from '../components/HeaderMenu'
import SiteLogo from '../components/SiteLogo'

export default function Header() {
  return (
    <section className='section-header' id='SectionHeader'>
      <header className='header-wrapper page-width'>
        <div className="header-grid">
          <SiteLogo />
          <HeaderMenu />
          <HeaderActions />
        </div>
      </header>
    </section>
  )
}