// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleEnrollClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="app">
      <h1>Wells Fargo</h1>
      <div className="login-container">
        <h1>Good morning</h1>
        <p className='log-name'>Sally</p>
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
            <button className="enroll-button" onClick={handleEnrollClick}>Enroll</button>
            <button className="sign-on-button" disabled>Sign on</button>
          </div>
          <a href="/" className="forgot-link">Forgot username or password?</a>
        </div>
      </div>
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
       {/* Modal */}
       {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>We're sorry. Wells Fargo Mobile Banking is temporarily not available. Please try again later or call 1-800-956-4442.</p>
            <button onClick={handleCloseModal}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
