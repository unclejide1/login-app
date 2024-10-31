// src/LoginPage.jsx
import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="app">
      <div className="login-container">
        <h1>Good morning</h1>
        <div className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <div className="options">
            <label>
              <input type="checkbox" /> Save username
            </label>
            <label>
              <input type="checkbox" /> Set up Face ID
            </label>
          </div>
          <div className="buttons">
            <button className="enroll-button">Enroll</button>
            <button className="sign-on-button" disabled>Sign on</button>
          </div>
          <a href="/" className="forgot-link">Forgot username or password?</a>
        </div>
      </div>
      {/* <header className="header">
        <h1>WELLS FARGO</h1>
        <h2>Good morning</h2>
      </header>
    

      <div className="login-form">
        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />
        
        <div className="options">
          <label>
            <input type="checkbox" /> Save username
          </label>
          <label>
            <input type="checkbox" /> Set up Face ID®
          </label>
        </div>
        
        <div className="buttons">
          <button className="enroll-button">Enroll</button>
          <button className="sign-on-button" disabled>Sign on</button>
        </div>
        
        <a href="#" className="forgot-link">Forgot username or password?</a>
      </div> */}
{/* 
      <footer className="footer">
        <div className="footer-option">
          <span>Explore our products</span>
          <small>Find your fit</small>
        </div>
        <div className="footer-option">
          <span>Earn 20K bonus points</span>
          <small>Learn more</small>
        </div>
      </footer> */}

    <div className="card-section">
        <div className="card">
          <div className="icon">&#x1F4D6;</div>
          <div className="card-content">
            <h3>Explore our products</h3>
            <p>Find your fit</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">&#x1F4B3;</div>
          <div className="card-content">
            <h3>Earn 20K bonus points</h3>
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
