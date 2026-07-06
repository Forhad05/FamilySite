import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'

export default function ContentForLayout() {
  return (
    <div className='main' id='content_for_layout'>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </div>
  )
}