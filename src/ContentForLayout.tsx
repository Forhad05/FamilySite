import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import StudyInAustraliaPage from './pages/StudyInAustraliaPage.tsx'
import UniversitiesPage from './pages/UniversitiesPage.tsx'
import TeamPage from './pages/TeamPage.tsx'
import ContactPage from './pages/ContactPage.tsx'

export default function ContentForLayout() {
  return (
    <div className='main' id='content_for_layout'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/study-in-australia" element={<StudyInAustraliaPage />} />
        <Route path="/universities" element={<UniversitiesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}