import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for actual form submit logic
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Pro-Dispense | Precision Performance Nutrition</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Elite sports nutrition technology for precision, performance and progress." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>

      <main>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>Introducing <span>FLO</span></h1>
            <p>Next-level precision dispensing for elite sports nutrition</p>
            <a href="#enquire" className="btn">Enquire Now</a>
          </div>
          <div className="hero-gradient-overlay" />
          <div className="powder-man" aria-hidden="true" />
        </section>

        {/* Story */}
        <section className="section story">
          <div className="text-container">
            <h2>The Story</h2>
            <p>
              Cameron Foy’s professional football career was cut short following two ACL reconstructions and multiple surgeries on his right knee. His journey of resilience led him to partner with Andrew Davison, a master product designer and engineer, driven to redefine performance nutrition technology.
            </p>
          </div>
          <div className="gradient-bridge" />
        </section>

        {/* Infographic */}
        <section className="section infographic">
          <h2>Precision Meets Impact</h2>
          <div className="infographic-content">
            <div className="infographic-card">
              <h3>70%</h3>
              <p>Time saved preparing supplements manually</p>
            </div>
            <div className="infographic-card">
              <h3>30%</h3>
              <p>More time allocated to player performance analysis</p>
            </div>
            <div className="infographic-card">
              <h3>100%</h3>
              <p>Optimised supplementation tailored to individual athletes</p>
            </div>
          </div>
          <div className="gradient-bridge" />
        </section>

        {/* System */}
        <section className="section system">
          <h2>Our System</h2>
          <div className="system-cards">
            <article className="card glass-card">
              <h3>Patent-Pending Smart Dispenser</h3>
              <p>Consistency meets automation, precision dispensed every time.</p>
            </article>
            <article className="card glass-card">
              <h3>Custom Formulated Drinks</h3>
              <p>Nutrition tailored to unique physiology and goals.</p>
            </article>
            <article className="card glass-card">
              <h3>Real-Time Data & Tracking</h3>
              <p>Monitor every intake; actionable insights for progress.</p>
            </article>
            <article className="card glass-card">
              <h3>Integrated Software Ecosystem</h3>
              <p>Seamless control from formulation to consumption.</p>
            </article>
          </div>
          <div className="gradient-bridge" />
        </section>

        {/* Enquire */}
        <section id="enquire" className="section enquire">
          <h2>Get In Touch</h2>
          {submitted ? (
            <p className="thankyou">Thank you! We’ll be in touch soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <label htmlFor="name">Name*</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleInput} />

              <label htmlFor="email">Email*</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleInput} />

              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" value={form.company} onChange={handleInput} />

              <label htmlFor="message">Message*</label>
              <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleInput}></textarea>

              <button type="submit" className="btn">Submit</button>
            </form>
          )}
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>© 2024 Pro-Dispense</p>
        </footer>

      </main>

      <style jsx>{`
        @property --gradient-x {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 0%;
        }
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Open Sans', sans-serif;
          background: #F7F7F7;
          color: #293C4A;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
        }
        a, button {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          cursor: pointer;
          border-radius: 6px;
          text-decoration: none;
          border: none;
          transition: all 0.3s ease;
          user-select: none;
        }
        h1, h2, h3 {
          font-family: 'Montserrat', sans-serif;
          margin-bottom: 0.5em;
          letter-spacing: -0.01em;
          line-height: 1.1;
          text-align: center;
        }
        h1 {
          font-size: clamp(2rem, 6vw, 4.5rem);
          font-weight: 900;
          color: #F7F7F7;
          margin-bottom: 0.5rem;
        }
        h1 span {
          color: #1C262D;
          background: linear-gradient(45deg, #293C4A, #1C262D);
          padding: 0 12px;
          border-radius: 8px;
          box-shadow: 0 0 12px rgba(255 255 255 / 0.2);
        }
        h2 {
          font-size: clamp(1.7rem, 4vw, 2.7rem);
          font-weight: 800;
          color: #1C262D;
          margin-bottom: 1rem;
        }
        h3 {
          font-size: 1.3rem;
          font-weight: 700;
          color: #293C4A;
          margin-bottom: 0.7rem;
        }
        p {
          font-weight: 400;
          font-size: clamp(1rem, 2.6vw, 1.2rem);
          max-width: 720px;
          line-height: 1.6;
          margin: 0 auto 2em;
          color: #293C4A;
          text-align: center;
          user-select: text;
        }
        main {
          overflow-x: hidden;
        }

        /* Buttons */
        .btn {
          background: linear-gradient(90deg, #293C4A, #1C262D);
          color: #F7F7F7;
          padding: 0.95em 2.5em;
          border-radius: 48px;
          font-weight: 700;
          box-shadow:
            0 0 10px rgba(41,60,74,.6),
            0 4px 16px rgba(28,38,45,.3);
          user-select: none;
        }
        .btn:hover {
          background: linear-gradient(90deg, #1C262D, #293C4A);
          box-shadow:
            0 0 16px rgba(28,38,45,0.9),
            0 6px 24px rgba(41,60,74,0.4);
          transform: translateY(-3px);
        }

        /* Hero Section */
        .hero {
          position: relative;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #293C4A 0%, #1C262D 100%);
          overflow: hidden;
          padding: 0 1.5rem;
          text-align: center;
          z-index: 1;
        }
        .hero-gradient-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(45deg, rgba(41, 60, 74, 0.5), rgba(28, 38, 45, 0.3));
          mix-blend-mode: multiply;
          z-index: 0;
        }
        .powder-man {
          position: absolute;
          bottom: -20%;
          right: -10%;
          width: 50vw;
          max-width: 600px;
          height: auto;
          background: url('/powder-man.png') no-repeat center center / contain;
          filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.5));
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
          mix-blend-mode: screen;
          transform: translateZ(0);
        }
        .hero-content {
          position: relative;
          max-width: 700px;
          z-index: 2;
          color: white;
          user-select: none;
          text-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
        }
        .hero-content p {
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          margin-bottom: 2rem;
          user-select: text;
        }

        /* Sections */
        section.section {
          padding: 6rem 1.5rem 8rem;
          position: relative;
          background: linear-gradient(135deg, #F7F7F7 0%, #E9EBE8 100%);
          overflow: visible;
        }
        .section.story,
        .section.system,
        .section.enquire {
          background: #1C262D;
          color: #F7F7F7;
          text-align: center;
        }
        .section.story p {
          max-width: 640px;
          margin: 1rem auto 0;
          font-weight: 400;
          font-size: 1.1rem;
          line-height: 1.5;
          user-select: text;
        }

        /* Gradient bridge */
        .gradient-bridge {
          position: relative;
          height: 80px;
          background: linear-gradient(135deg, #1C262D 0%, #293C4A 100%);
          clip-path: polygon(0 0, 100% 100%, 100% 0, 0 100%);
          margin-top: -8rem;
          margin-bottom: -5rem;
          z-index: 1;
        }

        /* Infographic */
        .infographic h2 {
          margin-bottom: 0.8rem;
        }
        .infographic-content {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
          margin-top: 3rem;
          z-index: 2;
        }
        .infographic-card {
          background: linear-gradient(135deg, #293C4A, #1C262D);
          padding: 2rem 3.5rem;
          border-radius: 16px;
          box-shadow: 0 14px 40px rgba(28, 38, 45, 0.6);
          width: 220px;
          color: #F7F7F7;
          user-select: none;
          text-align: center;
          font-weight: 700;
          font-size: clamp(2rem, 6vw, 3.5rem);
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 180px;
          gap: 0.75rem;
        }
        .infographic-card p {
          font-weight: 400;
          line-height: 1.3;
          font-size: 1rem;
        }

        /* System Cards */
        .system-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
          gap: 2.5rem;
          margin-top: 3rem;
          z-index: 2;
        }
        .glass-card {
          background: rgba(255 255 255 / 0.12);
          backdrop-filter: blur(18px);
          border: 1.5px solid rgba(255 255 255 / 0.25);
          border-radius: 18px;
          padding: 2rem;
          box-shadow:
            0 15px 30px rgba(0 0 0 / 0.1),
            0 2px 10px rgba(0 0 0 / 0.08);
          color: #F7F7F7;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: default;
          user-select: none;
        }
        .glass-card:hover {
          transform: translateY(-10px);
          box-shadow:
            0 25px 45px rgba(0 0 0 / 0.2),
            0 4px 20px rgba(0 0 0 / 0.12);
        }
        .glass-card h3 {
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .glass-card p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.4;
        }

        /* Enquire Form */
        .enquire h2 {
          margin-bottom: 2rem;
          font-size: 2.2rem;
          font-weight: 700;
        }
        .contact-form {
          max-width: 420px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          color: #F7F7F7;
        }
        label {
          font-weight: 600;
          font-size: 1rem;
          user-select: none;
        }
        input, textarea {
          border-radius: 6px;
          border: none;
          background: rgba(255 255 255 / 0.15);
          color: #F7F7F7;
          padding: 0.8rem 1rem;
          font-size: 1rem;
          resize: none;
          outline-offset: 3px;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255 255 255 / 0.6);
        }
        input:focus, textarea:focus {
          background-color: rgba(255 255 255 / 0.25);
          box-shadow: 0 0 14px #1C262D;
        }
        button.btn {
          margin-top: 1rem;
          padding: 1.15rem 2.5rem;
          border-radius: 48px;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          box-shadow:
            0 0 10px rgba(41, 60, 74, 0.6),
            0 4px 20px rgba(28, 38, 45, 0.3);
          text-align: center;
          user-select: none;
          transition: all 0.3s ease;
          background: linear-gradient(90deg, #293C4A, #1C262D);
          color: #F7F7F7;
          border: none;
          cursor: pointer;
        }
        button.btn:hover {
          background: linear-gradient(90deg, #1C262D, #293C4A);
          box-shadow:
            0 0 18px rgba(28, 38, 45, 0.9),
            0 8px 28px rgba(41, 60, 74, 0.5);
          transform: translateY(-3px);
        }
        .thankyou {
          font-weight: 700;
          font-size: 1.3rem;
          color: #7adb8c;
          margin-top: 2rem;
          text-align: center;
          user-select: none;
        }

        /* Footer */
        .footer {
          background: #000000;
          padding: 1rem 1.5rem;
          text-align: center;
          color: #5a6e82;
          font-size: 0.9rem;
          user-select: none;
        }

        /* Responsive */
        @media (max-width: 720px) {
          .hero-content h1 {
            font-size: 2.8rem;
          }
          .hero-content p {
            font-size: 1.1rem;
          }
          .infographic-content {
            flex-direction: column;
            gap: 1.5rem;
          }
          .infographic-card {
            width: 100%;
            max-width: 320px;
          }
          .system-cards {
            grid-template-columns: 1fr !important;
          }
          section.section {
            padding: 4rem 1em 6rem;
          }
        }
      `}</style>
    </>
  );
}
