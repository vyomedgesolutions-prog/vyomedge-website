import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Resources from './pages/Resources'
import Tools from './pages/Tools'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogDetail from './pages/BlogDetail'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen bg-t-bg transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/"            element={<Home />} />
              <Route path="/portfolio"   element={<Portfolio />} />
              <Route path="/services"    element={<Services />} />
              <Route path="/resources"   element={<Resources />} />
              <Route path="/blog/:uid"   element={<BlogDetail />} />
              <Route path="/tools"       element={<Tools />} />
              <Route path="/about"       element={<About />} />
              <Route path="/contact"     element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
