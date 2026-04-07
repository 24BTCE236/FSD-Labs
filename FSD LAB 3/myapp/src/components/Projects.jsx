import React from 'react'

const sampleProjects = [
  { id: 1, title: 'Project One', desc: 'Responsive layout and UI', img: 'https://via.placeholder.com/600x400?text=Project+1' },
  { id: 2, title: 'Project Two', desc: 'API integration example', img: 'https://via.placeholder.com/600x400?text=Project+2' },
  { id: 3, title: 'Project Three', desc: 'Interactive components', img: 'https://via.placeholder.com/600x400?text=Project+3' },
  { id: 4, title: 'Project Four', desc: 'Performance optimizations', img: 'https://via.placeholder.com/600x400?text=Project+4' },
  { id: 5, title: 'Project Five', desc: 'Accessibility improvements', img: 'https://via.placeholder.com/600x400?text=Project+5' },
  { id: 6, title: 'Project Six', desc: 'End-to-end tests', img: 'https://via.placeholder.com/600x400?text=Project+6' }
]

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2 className="mb-4">Projects</h2>
      <div className="row">
        {sampleProjects.map((p) => (
          <div key={p.id} className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="card h-100 shadow-sm project-card">
              <img src={p.img} className="card-img-top" alt={p.title} />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
