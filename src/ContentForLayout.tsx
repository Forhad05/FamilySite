import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'

export default function ContentForLayout() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </main>
  )
}