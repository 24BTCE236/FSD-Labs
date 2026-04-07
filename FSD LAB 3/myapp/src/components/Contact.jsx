import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // In a real app you'd POST this data. For the lab just log it.
    console.log('Contact form submitted', form)
    alert('Message submitted — check console for values')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="form-control" required />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows="5" required />
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
