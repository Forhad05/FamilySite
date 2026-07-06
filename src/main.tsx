import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import HeaderGroup from './HeaderGroup.tsx'
import ContentForLayout from './ContentForLayout.tsx'
import FooterGroup from './FooterGroup.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/FamilySite/">
      <HeaderGroup />
      <ContentForLayout />
      <FooterGroup />
    </BrowserRouter>
  </StrictMode>,
)
