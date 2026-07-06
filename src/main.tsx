import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import HeaderGroup from './HeaderGroup.tsx'
import Content from './Content.tsx'
import Footer from './Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/FamilySite/">
      <HeaderGroup />
      <Content />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
