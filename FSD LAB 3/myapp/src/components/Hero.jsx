import React from 'react'

export default function Hero() {
  return (
    <header className="py-5 bg-light">
      <div className="container text-center">
        <span className="badge bg-primary mb-3">Available for hire</span>
        <h1 className="display-5 fw-bold">Hi, I'm Jane Doe</h1>
        <p className="lead mb-4">I build responsive web apps using React and Bootstrap.</p>
        <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>
      </div>
    </header>
  )
}
