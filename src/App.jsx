import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 py-8 text-center text-gray-500 text-sm">
        <p>© 2026 William Jonathan. Built with React &amp; Tailwind CSS.</p>
      </footer>
    </div>
  )
}
