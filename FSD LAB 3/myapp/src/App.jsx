import React, { useEffect } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    const css = `
      .project-card{ transition: transform .25s ease, box-shadow .25s ease; }
      .project-card:hover{ transform: translateY(-8px); box-shadow: 0 12px 24px rgba(0,0,0,0.12); }
    `
    const style = document.createElement('style')
    style.setAttribute('data-injected', 'card-hover')
    style.innerHTML = css
    document.head.appendChild(style)
    return () => style.remove()
  }, [])

  return (
    <>
      <Navigation />
      <Hero />
      <main>
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
