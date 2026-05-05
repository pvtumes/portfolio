import { useState } from 'react';
import toast from 'react-hot-toast';
import { personal } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Contact.css';

export default function Contact() {
  const ref = useScrollAnimation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Web3Forms Integration - Free and requires no backend
    // 1. Go to https://web3forms.com/
    // 2. Enter your email to get a free Access Key
    // 3. Paste the key below:
    const accessKey = '97043ffc-f5b4-426d-b8e8-7da6461f08a3';

    if (accessKey === 'YOUR_ACCESS_KEY_HERE') {
      alert("Please get your free Access Key from web3forms.com and add it to Contact.jsx");
      setStatus('idle');
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        toast.success("Message sent successfully!");
        // Reset button after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="section contact" aria-label="Contact">
      <div className="container">
        <div className="fade-up" ref={ref}>
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle">
            Open to full-time roles, freelance projects, and collaboration.
            Feel free to reach out — I respond within 24 hours.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info fade-up">
            <div className="contact__info-card card">
              <h3 className="contact__info-title">Get in touch</h3>
              <p className="contact__info-desc">
                Whether you have a project in mind, want to discuss an opportunity,
                or just want to say hello — I'd love to hear from you.
              </p>

              <div className="contact__links">
                <a
                  href={`mailto:${personal.email}`}
                  className="contact__link"
                  aria-label="Email"
                >
                  <span className="contact__link-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                  <span>
                    <span className="contact__link-label">Email</span>
                    <span className="contact__link-value">{personal.email}</span>
                  </span>
                </a>

                {personal.phone && (
                  <a
                    href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                    className="contact__link"
                    aria-label="Phone"
                  >
                    <span className="contact__link-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    <span>
                      <span className="contact__link-label">Phone</span>
                      <span className="contact__link-value">{personal.phone}</span>
                    </span>
                  </a>
                )}

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                  aria-label="GitHub"
                >
                  <span className="contact__link-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </span>
                  <span>
                    <span className="contact__link-label">GitHub</span>
                    <span className="contact__link-value">{personal.github.replace('https://', '').replace('www.', '')}</span>
                  </span>
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                  aria-label="LinkedIn"
                >
                  <span className="contact__link-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </span>
                  <span>
                    <span className="contact__link-label">LinkedIn</span>
                    <span className="contact__link-value">{personal.linkedin.replace('https://', '').replace('www.', '')}</span>
                  </span>
                </a>

                {personal.leetcode && (
                  <a
                    href={personal.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__link"
                    aria-label="LeetCode"
                  >
                    <span className="contact__link-icon">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.099l2.396-2.393a.52.52 0 0 0-.371-.888H9.868c-.647 0-1.18-.504-1.217-1.144-.041-.703.506-1.284 1.201-1.284h9.12c.319 0 .584-.25.584-.555v-2.128c0-.31-.258-.553-.568-.553H9.191a.547.547 0 0 1-.557-.545.544.544 0 0 1 .533-.553h10.37a.544.544 0 0 0 .546-.546V9.82a.544.544 0 0 0-.546-.546H9.191a.544.544 0 0 1-.533-.553.547.547 0 0 1 .557-.545h9.168c.287 0 .524-.22.545-.503.032-.423-.3-.787-.714-.787H9.868a1.208 1.208 0 0 1-1.201-1.284c.037-.64.57-1.144 1.217-1.144h7.525a.52.52 0 0 0 .371-.888l-2.396-2.393A5.674 5.674 0 0 0 13.483 0zm-2.866 12.815a1.272 1.272 0 1 0 0 2.544 1.272 1.272 0 0 0 0-2.544z"/>
                      </svg>
                    </span>
                    <span>
                      <span className="contact__link-label">LeetCode</span>
                      <span className="contact__link-value">{personal.leetcode.replace('https://', '').replace('www.', '')}</span>
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            className="contact__form card fade-up"
            onSubmit={handleSubmit}
            id="contact-form"
            aria-label="Contact form"
          >
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="contact__input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                className="contact__textarea"
                placeholder="Tell me about your project or opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary contact__submit"
              id="contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sent' ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Message sent!
                </>
              ) : (
                <>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
