
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="kids-can-read-landing">
      <style jsx>{`
        /* Base styles */
        body {
          margin: 0;
          padding: 0;
          font-family: 'Comic Neue', 'Nunito', sans-serif;
          background-color: #FFFFFF;
          color: #444;
        }
        
        * {
          box-sizing: border-box;
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        /* Multi-color theme */
        .gradient-text {
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #F2FCE2 0%, #E5DEFF 50%, #D3E4FD 100%);
        }
        
        .green-accent {
          color: #7CB77C;
        }
        
        .purple-accent {
          color: #9F7AEA;
        }
        
        .blue-accent {
          color: #1EAEDB;
        }
        
        /* Header styles */
        header {
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 15px 0;
          box-shadow: 0 2px 15px rgba(0,0,0,0.1);
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          display: flex;
          align-items: center;
        }
        
        .logo span {
          font-size: 24px;
          font-weight: bold;
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-left: 10px;
        }
        
        .logo-icon {
          display: flex;
          width: 40px;
          height: 40px;
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          border-radius: 8px;
          justify-content: center;
          align-items: center;
          color: white;
        }
        
        nav ul {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        nav li {
          margin-left: 30px;
        }
        
        nav a {
          color: #444;
          font-weight: 600;
          text-decoration: none;
          position: relative;
          transition: all 0.3s ease;
        }
        
        nav a:after {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          bottom: -5px;
          left: 0;
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          transition: width 0.3s ease;
        }
        
        nav a:hover:after {
          width: 100%;
        }
        
        .btn {
          display: inline-block;
          padding: 12px 24px;
          border-radius: 50px;
          font-weight: bold;
          text-decoration: none;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .btn-primary {
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          color: white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }
        
        .btn-secondary {
          background: white;
          color: #9F7AEA;
          border: 2px solid #9F7AEA;
        }
        
        .btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }
        
        .mobile-menu-btn div {
          width: 25px;
          height: 3px;
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          margin: 5px 0;
          transition: all 0.3s;
        }
        
        /* Hero section */
        .hero {
          padding: 160px 0 100px;
          text-align: center;
          background: linear-gradient(135deg, #F2FCE2 0%, #E5DEFF 50%, #D3E4FD 100%);
        }
        
        .hero h1 {
          font-size: 48px;
          margin-bottom: 20px;
          line-height: 1.2;
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .hero p {
          font-size: 20px;
          color: #444;
          max-width: 600px;
          margin: 0 auto 30px;
        }
        
        .cta-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 30px;
        }
        
        .hero-image {
          max-width: 600px;
          margin: 40px auto 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          transition: transform 0.3s;
          border: 5px solid white;
        }
        
        .hero-image:hover {
          transform: translateY(-10px);
        }
        
        /* Features section */
        .features {
          padding: 100px 0;
          background-color: white;
        }
        
        .section-title {
          text-align: center;
          font-size: 36px;
          margin-bottom: 60px;
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }
        
        .feature-item {
          background-color: white;
          border-radius: 15px;
          padding: 30px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .feature-item:nth-child(1) {
          border-top: 5px solid #7CB77C;
        }
        
        .feature-item:nth-child(2) {
          border-top: 5px solid #9F7AEA;
        }
        
        .feature-item:nth-child(3) {
          border-top: 5px solid #1EAEDB;
        }
        
        .feature-item:nth-child(4) {
          border-top: 5px solid #7CB77C;
        }
        
        .feature-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        
        .feature-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: white;
          font-size: 32px;
        }
        
        .feature-item:nth-child(1) .feature-icon {
          background: linear-gradient(135deg, #7CB77C 0%, #92D192 100%);
        }
        
        .feature-item:nth-child(2) .feature-icon {
          background: linear-gradient(135deg, #9F7AEA 0%, #BCA5F6 100%);
        }
        
        .feature-item:nth-child(3) .feature-icon {
          background: linear-gradient(135deg, #1EAEDB 0%, #60CCF8 100%);
        }
        
        .feature-item:nth-child(4) .feature-icon {
          background: linear-gradient(135deg, #7CB77C 0%, #92D192 100%);
        }
        
        .feature-item h3 {
          font-size: 22px;
          margin-bottom: 15px;
        }
        
        .feature-item p {
          color: #666;
        }
        
        /* Benefits section */
        .benefits {
          padding: 100px 0;
          background: linear-gradient(135deg, #E5DEFF 0%, #F2FCE2 100%);
        }
        
        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        
        .benefit-card {
          background-color: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }
        
        .benefit-card:nth-child(1) {
          border-top: 5px solid #9F7AEA;
        }
        
        .benefit-card:nth-child(2) {
          border-top: 5px solid #1EAEDB;
        }
        
        .benefit-card h3 {
          font-size: 24px;
          margin-bottom: 15px;
          text-align: center;
          color: #444;
        }
        
        .benefit-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        
        .benefit-list li {
          margin-bottom: 12px;
          padding-left: 30px;
          position: relative;
        }
        
        .benefit-list li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #7CB77C;
          font-weight: bold;
        }
        
        /* How it works section */
        .how-it-works {
          padding: 100px 0;
          background-color: white;
        }
        
        .steps {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .step {
          display: flex;
          margin-bottom: 40px;
          align-items: flex-start;
        }
        
        .step:last-child {
          margin-bottom: 0;
        }
        
        .step-number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 24px;
          margin-right: 20px;
          flex-shrink: 0;
          color: white;
        }
        
        .step:nth-child(1) .step-number {
          background-color: #7CB77C;
        }
        
        .step:nth-child(2) .step-number {
          background-color: #9F7AEA;
        }
        
        .step:nth-child(3) .step-number {
          background-color: #1EAEDB;
        }
        
        .step:nth-child(4) .step-number {
          background-color: #7CB77C;
        }
        
        .step-content {
          flex: 1;
        }
        
        .step-content h3 {
          font-size: 24px;
          margin-bottom: 10px;
          color: #444;
        }
        
        /* Screenshots section */
        .screenshots {
          padding: 100px 0;
          background: linear-gradient(135deg, #D3E4FD 0%, #E5DEFF 100%);
        }
        
        .screenshot-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .screenshot-item {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          border: 5px solid white;
        }
        
        .screenshot-item:nth-child(1) {
          border-color: #7CB77C;
        }
        
        .screenshot-item:nth-child(2) {
          border-color: #9F7AEA;
        }
        
        .screenshot-item:nth-child(3) {
          border-color: #1EAEDB;
        }
        
        .screenshot-item:nth-child(4) {
          border-color: #7CB77C;
        }
        
        .screenshot-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }
        
        /* Testimonials section */
        .testimonials {
          padding: 100px 0;
          background-color: white;
        }
        
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .testimonial-item {
          background-color: white;
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          border-left: 5px solid transparent;
        }
        
        .testimonial-item:nth-child(1) {
          border-left-color: #7CB77C;
        }
        
        .testimonial-item:nth-child(2) {
          border-left-color: #9F7AEA;
        }
        
        .testimonial-item:nth-child(3) {
          border-left-color: #1EAEDB;
        }
        
        .testimonial-text {
          font-style: italic;
          margin-bottom: 15px;
          color: #444;
        }
        
        .testimonial-author {
          font-weight: bold;
          color: #9F7AEA;
        }
        
        /* CTA section */
        .cta {
          padding: 100px 0;
          background: linear-gradient(135deg, #F2FCE2 0%, #D3E4FD 100%);
          text-align: center;
        }
        
        .cta h2 {
          font-size: 36px;
          margin-bottom: 20px;
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .cta p {
          font-size: 20px;
          color: #444;
          max-width: 600px;
          margin: 0 auto 30px;
        }
        
        /* Footer */
        footer {
          background: linear-gradient(90deg, #7CB77C, #9F7AEA, #1EAEDB);
          color: white;
          padding: 50px 0 20px;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        
        .footer-col h3 {
          margin-bottom: 20px;
          font-size: 20px;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 10px;
        }
        
        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.2s;
          text-decoration: none;
        }
        
        .footer-links a:hover {
          color: white;
        }
        
        .copyright {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.8);
          font-size: 14px;
        }
        
        /* Media queries */
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          
          nav ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 5px 10px rgba(0,0,0,0.1);
          }
          
          nav ul.show {
            display: flex;
          }
          
          nav li {
            margin: 10px 0;
          }
          
          .hero h1 {
            font-size: 36px;
          }
          
          .cta-buttons {
            flex-direction: column;
            gap: 10px;
          }
          
          .benefit-grid {
            grid-template-columns: 1fr;
          }
          
          .step {
            flex-direction: column;
          }
          
          .step-number {
            margin-bottom: 10px;
          }
        }
      `}</style>

      <header>
        <div className="container nav-container">
          <div className="logo">
            <div className="logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H0v-2.5a2.5 2.5 0 0 1 2.5-2.5H19"/>
                <path d="M10 2.5v9l3-5 3 5v-9"/>
              </svg>
            </div>
            <span>Kids Can Read</span>
          </div>
          
          <button className="mobile-menu-btn" id="mobile-menu-btn">
            <div></div>
            <div></div>
            <div></div>
          </button>
          
          <nav>
            <ul id="menu">
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#benefits" className="nav-link">Benefits</a></li>
              <li><a href="#how-it-works" className="nav-link">How It Works</a></li>
              <li><a href="#screenshots" className="nav-link">Sneak Peek</a></li>
              <li><a href="#get-started" className="btn btn-primary">Get Started</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Read the story.<br/>Play the game.<br/>Master words.</h1>
          <p>A visual novel-based learning app that makes spelling, reading, and writing fun for children in grades 5-10.</p>
          <div className="cta-buttons">
            <a href="#get-started" className="btn btn-primary">Start Your Child's Learning Adventure</a>
            <a href="#how-it-works" className="btn btn-secondary">See How It Works</a>
          </div>
          <div className="hero-image">
            <img src="https://via.placeholder.com/800x450/E5F6FF/444?text=Interactive+Learning+Story" alt="Interactive learning story screenshot" />
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H0v-2.5a2.5 2.5 0 0 1 2.5-2.5H19"/>
                  <path d="M10 2.5v9l3-5 3 5v-9"/>
                </svg>
              </div>
              <h3 className="green-accent">Interactive Stories</h3>
              <p>Progress through engaging stories by reading dialogues and making choices that affect the narrative.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <h3 className="purple-accent">Spelling Activities</h3>
              <p>Embedded spelling correction activities within the story to improve vocabulary and writing skills.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
              <h3 className="blue-accent">Vocabulary Learning</h3>
              <p>Learn new words through context and interactive exercises designed to improve reading comprehension.</p>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </div>
              <h3 className="green-accent">Diary Writing</h3>
              <p>Reinforce learning and reflect after each story segment through guided diary entries.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits" id="benefits">
        <div className="container">
          <h2 className="section-title">Benefits</h2>
          <div className="benefit-grid">
            <div className="benefit-card">
              <h3 className="purple-accent">For Kids</h3>
              <ul className="benefit-list">
                <li>Improved reading comprehension through interactive storytelling</li>
                <li>Enhanced vocabulary through contextual learning</li>
                <li>Increased writing skills with guided practice</li>
                <li>Boosted confidence in language abilities</li>
                <li>Learning that feels like fun, not work</li>
              </ul>
            </div>
            
            <div className="benefit-card">
              <h3 className="blue-accent">For Parents</h3>
              <ul className="benefit-list">
                <li>Track your child's progress in reading and writing</li>
                <li>Gain insights into areas that need additional support</li>
                <li>Peace of mind knowing your child is learning while having fun</li>
                <li>Supports school curriculum for grades 5-10</li>
                <li>Easy to monitor and encourage continued learning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3 className="green-accent">Choose a Story</h3>
                <p>Select from a variety of engaging visual novels tailored to different reading levels and interests.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3 className="purple-accent">Read and Play</h3>
                <p>Progress through the story, making choices and completing spelling activities that affect the narrative.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3 className="blue-accent">Practice Spelling</h3>
                <p>Encounter challenging words and practice spelling them correctly to advance in the story.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3 className="green-accent">Write in Your Diary</h3>
                <p>Reflect on the story and practice writing skills through guided diary entries after each chapter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="screenshots" id="screenshots">
        <div className="container">
          <h2 className="section-title">Sneak Peek</h2>
          <div className="screenshot-grid">
            <div className="screenshot-item">
              <img src="https://via.placeholder.com/600x400/F2FCE2/444?text=Story+Selection" alt="Story selection screen" />
            </div>
            <div className="screenshot-item">
              <img src="https://via.placeholder.com/600x400/E5DEFF/444?text=Interactive+Dialogue" alt="Interactive dialogue screen" />
            </div>
            <div className="screenshot-item">
              <img src="https://via.placeholder.com/600x400/D3E4FD/444?text=Spelling+Challenge" alt="Spelling challenge screen" />
            </div>
            <div className="screenshot-item">
              <img src="https://via.placeholder.com/600x400/FFFFFF/444?text=Diary+Writing" alt="Diary writing screen" />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What People Are Saying</h2>
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <p className="testimonial-text">"My daughter used to struggle with spelling and writing. After using Kids Can Read for just two months, her confidence has skyrocketed. She now looks forward to writing assignments at school!"</p>
              <p className="testimonial-author">- Sarah M., Parent of 5th Grader</p>
            </div>
            
            <div className="testimonial-item">
              <p className="testimonial-text">"As a teacher, I've recommended this app to many parents. The way it integrates reading, spelling, and writing in a story-based format keeps kids engaged while they're learning."</p>
              <p className="testimonial-author">- James T., 6th Grade Teacher</p>
            </div>
            
            <div className="testimonial-item">
              <p className="testimonial-text">"I love the detective stories! I didn't even realize I was practicing spelling while solving mysteries. This is way better than flashcards."</p>
              <p className="testimonial-author">- Alex, 7th Grade Student</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="get-started">
        <div className="container">
          <h2>Start Your Child's Learning Adventure Today</h2>
          <p>Give your child the gift of improved reading and writing skills through fun, interactive storytelling.</p>
          <a href="#" className="btn btn-primary">Get Started Now</a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Kids Can Read</h3>
              <p>Making learning fun through interactive storytelling.</p>
            </div>
            
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#screenshots">Sneak Peek</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Resources</h3>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; 2025 Kids Can Read. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{
        __html: `
          // Mobile menu toggle
          document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            document.getElementById('menu').classList.toggle('show');
          });
          
          // Smooth scrolling for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
              e.preventDefault();
              
              const targetId = this.getAttribute('href');
              if(targetId === '#') return;
              
              const targetElement = document.querySelector(targetId);
              if(targetElement) {
                window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.getElementById('menu').classList.remove('show');
              }
            });
          });
        `
      }} />
    </div>
  );
};

export default Index;
