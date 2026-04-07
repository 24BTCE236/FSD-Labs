import React from 'react'

export default function Navigation() {
  return (
    <nav className="container py-3">
      <div className="d-flex flex-row gap-3 justify-content-between align-items-center">
        <a className="h5 mb-0 text-decoration-none text-dark" href="#">My Portfolio</a>
        <div className="d-flex flex-row gap-2">
          <a className="nav-link px-2 text-muted" href="#projects">Projects</a>
          <a className="nav-link px-2 text-muted" href="#contact">Contact</a>
          <a className="nav-link px-2 text-muted" href="#about">About</a>
        </div>
      </div>
    </nav>
  )
}
