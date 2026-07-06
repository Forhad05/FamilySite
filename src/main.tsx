import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import Header from './Header.tsx'
import Content from './Content.tsx'
import Footer from './Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/FamilySite/">
      <Header />
      <Content />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
