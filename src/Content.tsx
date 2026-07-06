import { Routes, Route } from 'react-router-dom'
import App from './App.tsx'

function Content() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </main>
  )
}

export default Content