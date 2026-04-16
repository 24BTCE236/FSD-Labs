import { useState } from 'react';

function App() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((current) => ({
      ...current,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    setError('');
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        <p role="alert" aria-live="assertive" className="error-message">
          {error}
        </p>

        <div className="field-group">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="field-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-describedby="email-help"
          />
          <small id="email-help">We will never share your email.</small>
        </div>

        <div className="field-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Send</button>
      </form>
    </main>
  );
}

export default App;
