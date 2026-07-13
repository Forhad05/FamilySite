import type { CSSProperties } from 'react'

type SectionPageHeroProps = {
  title: string
  lede?: string
  ledeItalic?: boolean
  decoration?: { src: string; style?: CSSProperties }
}

export default function SectionPageHero({ title, lede, ledeItalic, decoration }: SectionPageHeroProps) {
  return (
    <section className="page-hero">
      {decoration && (
        <img className="page-hero-decoration" src={decoration.src} alt="" style={decoration.style} />
      )}
      <div className="page-width">
        <h1>{title}</h1>
        {lede && <p style={ledeItalic ? { fontStyle: 'italic' } : undefined}>{lede}</p>}
      </div>
    </section>
  )
}
