import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would add your actual form submission logic
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Pro-Dispense | Precision Sports Nutrition Technology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Elite sports nutrition technology that is precise, innovative and performance focused." />
        <style>{`
          @font-face {
            font-family: 'AEONIK';
            src: url('/fonts/aeonik-regular.woff2') format('woff2'),
                 url('/fonts/aeonik-regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          html, body {
            margin: 0; 
            padding: 0; 
            font-family: 'AEONIK', sans-serif;
            background-color: #1C262D;
            color: #F7F7F7;
            scroll-behavior: smooth;
          }
          a, button {
            font-family: 'AEONIK', sans-serif;
            cursor: pointer;
            border: none;
            border-radius: 48px;
            padding: 1.1rem 3rem;
            font-weight: 700;
            text-decoration: none;
            letter-spacing: 0.05em;
            background: linear-gradient(90deg, #293C4A, #1C262D);
            color: #F7F7F7;
            box-shadow: 0 0 12px #293C4A;
            transition: box-shadow 0.3s ease, background 0.3s ease, transform 0.3s ease;
            display: inline-block;
            user-select: none;
          }
          a:hover, button:hover {
            background: linear-gradient(90deg, #1C262D, #293C4A);
            box-shadow: 0 0 30px #1C262D;
            transform: translateY(-3px);
          }
          main {
            max-width: 1200px;
            margin: 0 auto;
          }
          section {
            position: relative;
            padding: 8rem 2rem;
            overflow: visible;
          }
          h1, h2, h3 {
            font-weight: 900;
            margin-bottom: 1rem;
            text-align: center;
          }
          h1 {
            font-size: clamp(3rem, 8vw, 5rem);
            line-height: 1.05;
          }
          h1 span {
            color: #293C4A;
            background: linear-gradient(45deg, #293C4A, #1C262D);
            padding: 0 14px;
            border-radius: 18px;
            box-shadow: 0 0 18px rgba(41, 60, 74, 0.5);
            user-select: none;
          }
          h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            color: #93a3b2;
          }
          p {
            max-width: 650px;
            margin: 0 auto 2.5rem;
            font-weight: 400;
            font-size: clamp(1rem, 2.5vw, 1.2rem);
            line-height: 1.6;
            text-align: center;
            color: #bbc6d2;
          }
          /* Hero Section */
          .hero {
            background: linear-gradient(120deg, #293C4A 0%, #1C262D 100%);
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 0 2rem;
            overflow: hidden;
          }
          .powder-man {
            position: absolute;
            bottom: -10%;
            right: -15%;
            width: 50vw;
            height: auto;
            background: url("/powder-man.png") no-repeat center / contain;
            opacity: 0.3;
            filter: drop-shadow(0 0 25px #1C262D);
            pointer-events: none;
            user-select: none;
            mix-blend-mode: screen;
          }
          .hero-content {
            position: relative;
            max-width: 900px;
            z-index: 2;
            color: #F7F7F7;
            user-select: none;
          }
          .hero-content p {
            font-weight: 600;
            font-size: clamp(1.5rem, 3vw, 2rem);
            margin-bottom: 3rem;
            letter-spacing: 0.03em;
          }
          /* Story Section */
          .story {
            background: linear-gradient(135deg, #293C4A 20%, #1C262D 90%);
            clip-path: polygon(0 5%, 100% 0%, 100% 95%, 0% 100%);
            color: #bbc6d2;
            padding-top: 6rem;
            padding-bottom: 10rem;
          }
          .story-text {
            max-width: 700px;
            margin: 0 auto;
            font-size: clamp(1.1rem, 3vw, 1.3rem);
            line-height: 1.7;
            text-align: center;
          }
          /* Infographic Section */
          .infographic {
            background: linear-gradient(120deg, #1C262D 10%, #293C4A 80%);
            padding-top: 6rem;
            padding-bottom: 10rem;
            clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
          }
          .infographic h2 {
            color: #93a3b2;
            user-select: none;
          }
          .infographic-cards {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 3rem;
            max-width: 1000px;
            margin: 4rem auto 0 auto;
          }
          .infographic-card {
            background: linear-gradient(145deg, #f4f9ff 0%, #dbe9ff 100%);
            width: 280px;
            border-radius: 20px;
            box-shadow: 0 20px 25px rgba(0,0,0,0.1);
            padding: 2.3rem 2rem;
            color: #293c4a;
            font-weight: 700;
            font-size: 4rem;
            text-align: center;
            user-select: none;
            position: relative;
            overflow: hidden;
          }
          .infographic-card p {
            color: #657a9a;
            font-size: 1.15rem;
            font-weight: 500;
            margin-top: 1rem;
            letter-spacing: 0.01em;
          }
          /* System Section */
          .system {
            background: linear-gradient(180deg, #293c4a 0%, #1c262d 100%);
            padding-top: 7rem;
            padding-bottom: 10rem;
            position: relative;
            color: #f7f7f7;
            clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 95%);
          }
          .system h2 {
            margin-bottom: 3rem;
            user-select: none;
          }
          .system-cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 3rem;
            max-width: 1100px;
            margin: 0 auto;
          }
          .card {
            backdrop-filter: blur(16px);
            background: rgba(255 255 255 / 0.08);
            border-radius: 20px;
            padding: 2rem 2.3rem;
            box-shadow: 0 6px 30px rgba(0,0,0,0.4);
            cursor: default;
            user-select: none;
            transition: transform 0.3s ease;
          }
          .card h3 {
            color: #93a3b2;
            font-weight: 700;
            margin-bottom: 0.8rem;
            letter-spacing: 0.035em;
          }
          .card p {
            color: #bbc6d2;
            font-weight: 400;
            font-size: 1.05rem;
            letter-spacing: 0.005em;
            line-height: 1.5;
          }
          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 14px 40px rgba(0,0,0,0.6);
          }
          /* Enquire Section */
          .enquire {
            background: #1c262d;
            padding: 6rem 2rem 8rem;
            text-align: center;
            color: #f7f7f7;
          }
          .enquire h2 {
            font-weight: 700;
            font-size: 2.8rem;
            margin-bottom: 3rem;
            user-select: none;
          }
          .contact-form {
            max-width: 480px;
            margin: 0 auto;
            text-align: left;
            display: flex;
            flex-direction: column;
            gap: 1.3rem;
          }
          label {
            display: block;
            font-weight: 600;
            font-size: 1.1rem;
            user-select: none;
          }
          input, textarea {
            width: 100%;
            padding: 0.7rem 1rem;
            border-radius: 10px;
            border: none;
            background: rgba(255 255 255 / 0.12);
            color: #f7f7f7;
            font-size: 1.05rem;
            font-family: 'AEONIK', sans-serif;
            resize: none;
            outline-offset: 3px;
            outline-color: #293c4a;
            transition: background-color 0.3s ease, outline-offset 0.3s ease;
          }
          input::placeholder, textarea::placeholder {
            color: rgba(247, 247, 247, 0.6);
          }
          input:focus, textarea:focus {
            background-color: rgba(255 255 255 / 0.18);
            outline-offset: 6px;
          }
          button[type="submit"] {
            margin-top: 2rem;
            font-weight: 700;
            font-size: 1.15rem;
            padding: 1.15rem 2.8rem;
            border-radius: 48px;
            background: linear-gradient(90deg, #293C4A, #1C262D);
            box-shadow: 0 0 17px #293C4A;
            border: none;
            cursor: pointer;
            color: #f7f7f7;
            letter-spacing: 0.04em;
            transition: all 0.35s ease;
            user-select: none;
          }
          button[type="submit"]:hover {
            background: linear-gradient(90deg, #1C262D, #293C4A);
            box-shadow: 0 0 28px #1C262D;
            transform: translateY(-4px);
          }
          .thankyou {
            text-align: center;
            font-size: 1.3rem;
            font-weight: 700;
            color: #7ADB8C;
            margin-top: 2rem;
            user-select: none;
          }
          /* Footer */
          footer.footer {
            background: #000000;
            padding: 1.2rem 1rem;
            font-size: 0.9rem;
            color: #5a6e82;
            text-align: center;
            user-select: none;
          }
          /* Responsive */
          @media (max-width: 768px) {
            .infographic-cards {
              flex-direction: column;
              gap: 2rem;
              max-width: 400px;
              margin: 2rem auto 0 auto;
            }
            section {
              padding: 5rem 1rem 7rem;
            }
            .system-cards {
              grid-template-columns: 1fr !important;
              gap: 2.5rem;
            }
            h1 {
              font-size: 3rem!important;
            }
            .hero-content p {
              font-size: 1.25rem!important;
            }
          }
        `}</style>
    </>
  );
}
