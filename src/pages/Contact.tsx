
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { toast } from 'sonner';

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast.error('Please fill out all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        phone,
        message,
        createdAt: new Date()
      });
      
      toast.success('Message sent successfully! We will get back to you soon.');
      // Reset form
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <style>{`
        /* Contact Page Styles */
        body {
          font-family: 'Nunito', sans-serif;
          background-color: #FFFFFF;
          color: #444;
          margin: 0;
        }
        
        .contact-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .contact-header {
          background-color: #9F7AEA;
          padding: 15px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .contact-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        
        .contact-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        
        .contact-logo-icon {
          background-color: white;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9F7AEA;
        }
        
        .contact-logo-text {
          margin-left: 10px;
          font-size: 20px;
          font-weight: bold;
          color: white;
          font-family: 'Comic Neue', cursive;
        }
        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
          flex: 1;
        }
        
        .contact-title {
          text-align: center;
          color: #7C3AED;
          font-size: 36px;
          margin-bottom: 20px;
          font-family: 'Comic Neue', cursive;
        }
        
        .contact-subtitle {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 40px;
          color: #444;
          font-size: 18px;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        
        .contact-form {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 600;
          color: #555;
        }
        
        .form-control {
          width: 100%;
          padding: 12px;
          border: 2px solid #E5E7EB;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s;
          font-family: 'Nunito', sans-serif;
        }
        
        .form-control:focus {
          outline: none;
          border-color: #9F7AEA;
          box-shadow: 0 0 0 3px rgba(159, 122, 234, 0.2);
        }
        
        textarea.form-control {
          min-height: 150px;
          resize: vertical;
        }
        
        .submit-btn {
          background-color: #9F7AEA;
          color: white;
          border: none;
          border-radius: 50px;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: block;
          width: 100%;
          font-family: 'Nunito', sans-serif;
        }
        
        .submit-btn:hover {
          background-color: #7C3AED;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(159, 122, 234, 0.4);
        }
        
        .submit-btn:disabled {
          background-color: #D1D5DB;
          cursor: not-allowed;
          transform: none;
        }
        
        .contact-info {
          background: linear-gradient(135deg, #EBE5FF 0%, #D6BCFA 100%);
          border-radius: 16px;
          padding: 30px;
          display: flex;
          flex-direction: column;
        }
        
        .contact-info-item {
          display: flex;
          margin-bottom: 25px;
          align-items: flex-start;
        }
        
        .contact-icon {
          width: 50px;
          height: 50px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
          color: #9F7AEA;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        
        .contact-text h3 {
          margin: 0 0 5px;
          color: #7C3AED;
          font-size: 18px;
          font-weight: bold;
        }
        
        .contact-text p {
          margin: 0;
          color: #444;
        }
        
        .contact-footer {
          background-color: #9F7AEA;
          color: white;
          text-align: center;
          padding: 20px;
          margin-top: auto;
        }
        
        .back-to-home {
          display: inline-flex;
          align-items: center;
          color: white;
          text-decoration: none;
          font-weight: 600;
          margin-top: 20px;
          transition: transform 0.3s;
        }
        
        .back-to-home:hover {
          transform: translateX(-5px);
        }
        
        .back-icon {
          margin-right: 8px;
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-info {
            order: -1;
            margin-bottom: 30px;
          }
        }
      `}</style>

      <header className="contact-header">
        <div className="contact-nav">
          <Link to="/" className="contact-logo">
            <div className="contact-logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H0v-2.5a2.5 2.5 0 0 1 2.5-2.5H19"/>
                <path d="M10 2.5v9l3-5 3 5v-9"/>
              </svg>
            </div>
            <span className="contact-logo-text">Kids Can Read</span>
          </Link>
          <Link to="/" className="back-to-home">
            <svg className="back-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-subtitle">
          Have questions about our learning program? Want to learn more about how we can help your child? 
          Send us a message and we'll get back to you as soon as possible.
        </p>

        <div className="contact-grid">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input 
                  id="name"
                  type="text" 
                  className="form-control" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  id="email"
                  type="email" 
                  className="form-control" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input 
                  id="phone"
                  type="tel" 
                  className="form-control" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea 
                  id="message"
                  className="form-control" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact-text">
                <h3>Call Us</h3>
                <p>(123) 456-7890</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact-text">
                <h3>Email Us</h3>
                <p>hello@kidscanread.com</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact-text">
                <h3>Visit Us</h3>
                <p>123 Learning Lane<br />Education City, CA 90210</p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="contact-text">
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9am - 5pm<br />Saturday: 10am - 2pm<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <p>&copy; 2025 Kids Can Read. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
