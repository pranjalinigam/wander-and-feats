import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <header className="page-header">
        <p className="eyebrow">Let's Connect</p>
        <h1>
          <span className="script">Say Hello</span>
          <br />I'd Love to Hear From You
        </h1>
        <p>Got a story to share, a collaboration idea, or just want to say hi? Drop me a message.</p>
      </header>

      <section className="section container">
        <div className="contact-grid">
          <div className="contact-info-card">
            <h3>&#x1F4AC; Get in Touch</h3>
            <div className="contact-info-row">
              <div className="icon-circle">&#x2709;</div>
              <div>
                <div style={{ fontWeight: 600 }}>Email</div>
                <div style={{ opacity: 0.85 }}>hello@wanderandwhimsy.com</div>
              </div>
            </div>
            <div className="contact-info-row">
              <div className="icon-circle">&#x1F4CD;</div>
              <div>
                <div style={{ fontWeight: 600 }}>Location</div>
                <div style={{ opacity: 0.85 }}>Somewhere between dreams &amp; reality &#x2728;</div>
              </div>
            </div>
            <div className="contact-info-row">
              <div className="icon-circle">&#x1F4F1;</div>
              <div>
                <div style={{ fontWeight: 600 }}>Social</div>
                <div style={{ opacity: 0.85 }}>@wanderandwhimsy</div>
              </div>
            </div>

            <div style={{ marginTop: 30 }}>
              <h3>&#x1F31F; Follow the Journey</h3>
              <p style={{ opacity: 0.85, marginBottom: 16, fontSize: '0.85rem' }}>
                Daily updates, behind the scenes, and more aesthetic moments.
              </p>
              <div className="connect-icons" style={{ justifyContent: 'flex-start' }}>
                <a href="#" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff' }}>&#x1F4F8;</a>
                <a href="#" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff' }}>&#x1F4CC;</a>
                <a href="#" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff' }}>&#x1F426;</a>
                <a href="#" style={{ background: 'rgba(255,255,255,0.18)', color: '#fff' }}>&#x1F4FA;</a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div className="success-msg" style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ fontSize: '3rem', marginBottom: 16 }}>&#x2728;</div>
                <h3 style={{ marginBottom: 10 }}>Message Sent!</h3>
                <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>
                  Thank you for reaching out! I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="What's this about?" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Write something lovely..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  &#x2709; Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}