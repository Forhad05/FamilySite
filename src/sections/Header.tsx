import { useLayoutEffect, useRef, useState, type RefObject } from 'react'
import '../assets/Header.css'
import logo from '../assets/logo-full.png'
import { IconClose, IconFacebook, IconHamburger, IconWhatsapp } from '../lib/Icons'

function SiteLogo({ innerRef }: { innerRef: RefObject<HTMLDivElement | null> }) {
  return (
    <div className="header-logo" ref={innerRef}>
      <img className='site-logo' src={logo} alt="Global Pathways Education Consulting" />
    </div>
  )
}

const NavLinks = [
  { label: "Home", url: '#', active: true },
  { label: "Study in Australia", url: '#study-in-australia', active: false },
  { label: "Services", url: '#services', active: false },
  { label: "About Sabina", url: '#about', active: false },
  { label: "Contact", url: '#contact', active: false }
]

function HeaderMenu() {
  return (
    <nav className="header-navigation large-down-hide">
      <ul className="list-unstyled nav-links">
        {NavLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url} className={`nav-link--item ${link.active ? 'active' : ''}`.trim()}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const HeaderActionIcons = [
  { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61555824028180", targetBlank: true, icon: <IconFacebook width={20} height={20} /> },
  { label: "WhatsApp", url: "https://wa.me/61402967483", targetBlank: true, icon: <IconWhatsapp width={20} height={20} /> }
]

function HeaderActions({ innerRef }: { innerRef: RefObject<HTMLDivElement | null> }) {
  return (
    <div className="header-actions" ref={innerRef}>
      {HeaderActionIcons.map((action) => (
        <a
          key={action.url}
          className='header-action--item header-action--social'
          href={action.url}
          {...(action.targetBlank ? { target: '_blank' } : {})}
        >
          <span className='visually-hidden'>{action.label}</span>
          <span className='svg-wrapper'>
            {action.icon}
          </span>
        </a>
      ))}
    </div>
  )
}

function HeaderDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <div className={`header-drawer ${isOpen ? 'is-open' : ''}`.trim()}>
      <div className='header-drawer--backdrop' onClick={onClose}></div>
      <div className='header-drawer--panel'>
        <button
          type='button'
          className='header-drawer--close'
          onClick={onClose}
          aria-label='Close menu'
        >
          <IconClose width={16} height={16} />
        </button>
        <nav className='header-drawer--navigation'>
          <ul className='list-unstyled header-drawer--links'>
            {NavLinks.map((link) => (
              <li key={link.url}>
                <a
                  href={link.url}
                  className={`header-drawer--link ${link.active ? 'active' : ''}`.trim()}
                  onClick={onClose}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default function Header() {
  const logoRef = useRef<HTMLDivElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)
  const mobileDrawerRef = useRef<HTMLButtonElement>(null)
  const [inlineActionsSize, setInlineActionsSize] = useState<number | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useLayoutEffect(() => {
    const logoEl = logoRef.current
    const actionsEl = actionsRef.current
    const mobileDrawerEl = mobileDrawerRef.current
    if (!logoEl || !actionsEl || !mobileDrawerEl) return

    // Desktop (>= 1024px) compares the site logo against header actions;
    // mobile (< 1024px) compares the drawer toggle against header actions instead.
    const desktopQuery = window.matchMedia('(width >= 1024px)')

    const updateSize = () => {
      const compareEl = desktopQuery.matches ? logoEl : mobileDrawerEl
      setInlineActionsSize(Math.max(compareEl.offsetWidth, actionsEl.offsetWidth))
    }

    updateSize()

    const observer = new ResizeObserver(updateSize)
    observer.observe(logoEl)
    observer.observe(actionsEl)
    observer.observe(mobileDrawerEl)

    desktopQuery.addEventListener('change', updateSize)

    return () => {
      observer.disconnect()
      desktopQuery.removeEventListener('change', updateSize)
    }
  }, [])

  return (
    <>
      <section
        className='section-header'
        id='SectionHeader'
        style={{ '--section-inline-actions-size': inlineActionsSize ? `${inlineActionsSize}px` : 'auto' }}
      >
        <header className='header-wrapper page-width'>
          <div className="header-grid">
            <div className='mobile-drawer large-up-hide'>
              <button
                ref={mobileDrawerRef}
                type='button'
                className='mobile-drawer--button large-up-hide'
                onClick={() => setIsDrawerOpen(true)}
                aria-label='Open menu'
              >
                <IconHamburger width={20} height={20} />
              </button>
            </div>
            <SiteLogo innerRef={logoRef} />
            <HeaderMenu />
            <HeaderActions innerRef={actionsRef} />
          </div>
        </header>
      </section>

      <HeaderDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}