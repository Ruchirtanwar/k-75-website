import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'
import Agence from './pages/agence'
import Navbar from './components/Navbar/Navbar'
import FullScreenNav from './components/Navbar/FullScreenNav'

function App() {

  return (
  <div>
  <Navbar />
  <FullScreenNav  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
  
  </div>
  )
}

export default App
