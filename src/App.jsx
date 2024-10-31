// App.js
import React, { useState } from 'react';
import './App.css';

// function App() {
//   const [showModal, setShowModal] = useState(false);

//   const handleEnrollClick = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };
//   return (
//     <div className="app">
//       <h1>Wells Fargo</h1>
//       <div className="login-container">
//         <h1>Good morning</h1>
//         <p className='log-name'>Sally</p>
//         <div className="login-form">
//           <input type="text" placeholder="Username" />
//           <input type="password" placeholder="Password" />
//           <div className="options">
//             <label>
//               <input type="checkbox" /> Save username
//             </label>
//             <label>
//               <input type="checkbox" /> Set up Face ID
//             </label>
//           </div>
//           <div className="buttons">
//             <button className="enroll-button" onClick={handleEnrollClick}>Enroll</button>
//             <button className="sign-on-button" disabled>Sign on</button>
//           </div>
//           <a href="/" className="forgot-link">Forgot username or password?</a>
//         </div>
//       </div>
//       <div className="card-section">
//         <div className="card">
//           <div className="icon">&#x1F4D6;</div>
//           <div className="card-content">
//             <h3>Explore our products</h3>
//             <p>Find your fit</p>
//           </div>
//         </div>
//         <div className="card">
//           <div className="icon">&#x1F4B3;</div>
//           <div className="card-content">
//             <h3>Earn 20K bonus points</h3>
//             <p>Learn more</p>
//           </div>
//         </div>
//       </div>
//        {/* Modal */}
//        {showModal && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <p>We're sorry. Wells Fargo Mobile Banking is temporarily not available. Please try again later or call 1-800-956-4442.</p>
//             <button onClick={handleCloseModal}>OK</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import './App.css';

function App() {
  // return (
  //   <div className="app">
  //     <header className="header">
  //       <div className="header-bar">
  //         <span className="logo">WELLS FARGO</span>
  //         <div className="menu-icon">&#9776;</div>
  //       </div>
  //     </header>
  //     <div className="login-container">
  //       <h1>Good afternoon</h1>
  //       <div className="login-form">
  //         <input type="text" placeholder="Username" />
  //         <input type="password" placeholder="Password" />
  //         <div className="save-username">
  //           <input type="checkbox" id="saveUsername" />
  //           <label htmlFor="saveUsername">Save username</label>
  //         </div>
  //         <p className="secure-text">
  //           To help keep your account secure, save your username only on devices that aren't used by other people.
  //         </p>
  //         <button className="sign-on-button" disabled>Sign on</button>
  //         <a href="/" className="forgot-link">Forgot username or password?</a>
  //       </div>
  //       <div className="investment-info">
  //         <p><strong>Investment and Insurance Products are:</strong></p>
  //         <ul>
  //           <li>Not Insured by the FDIC or Any Federal Government Agency</li>
  //           <li>Not a Deposit or Other Obligation</li>
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );
  const [showModal, setShowModal] = useState(false);

  const handleEnrollClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="login-container">
      <header className="header-bar">
        <h1>WELLS FARGO</h1>
        <div className="menu-icon">&#9776;</div>
      </header>
      <div className="login-card">
        <h2>Good afternoon</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>Username</label>
          <input type="text" placeholder="Username" />
          <label>Password</label>
          <div className="password-container">
            <input type="password" placeholder="Password" />
            <span ><svg width="24px" className="icon" height="24px" viewBox="0 0 24 24" aria-hidden="true" role="img" focusable="false"><path class="UnmaskIcon__path___EDz8b" d="M21.5543 2.52168C21.3594 2.32602 21.0428 2.32537 20.8472 2.52023L17.3398 6.01322C15.7409 5.52412 13.9228 5.24995 12 5.24995C5.68534 5.24995 0.5 8.20688 0.5 12.0227C0.5 14.4188 2.54462 16.4762 5.62958 17.6755L2.64717 20.6457L2.58918 20.7148C2.45378 20.9094 2.47251 21.1789 2.64572 21.3528C2.84058 21.5484 3.15716 21.5491 3.35283 21.3542L6.68193 18.0388C8.27554 18.5237 10.0859 18.7954 12 18.7954C18.3147 18.7954 23.5 15.8385 23.5 12.0227C23.5 9.63188 21.4644 7.57825 18.3908 6.37783L21.5528 3.22879L21.6108 3.15966C21.7462 2.96507 21.7275 2.69561 21.5543 2.52168ZM16.5283 6.82137C15.9385 6.664 15.3178 6.53612 14.6721 6.44155C15.1402 6.7022 15.5662 7.0292 15.9375 7.40984L16.5283 6.82137ZM16.571 8.19019L17.6105 7.15497C20.5572 8.19335 22.5 10.0137 22.5 12.0227C22.5 15.1355 17.8356 17.7954 12 17.7954C10.3834 17.7954 8.85666 17.5913 7.49408 17.2299L8.92152 15.8084C9.79999 16.4028 10.8595 16.75 12 16.75C15.0376 16.75 17.5 14.2875 17.5 11.25C17.5 10.1175 17.1577 9.06497 16.571 8.19019ZM15.2289 8.11554C14.4111 7.27329 13.2667 6.74995 12 6.74995C9.51472 6.74995 7.5 8.76467 7.5 11.25C7.5 12.51 8.01786 13.649 8.85236 14.4659L15.2289 8.11554ZM9.64659 15.0862L15.8459 8.9123C16.2609 9.5936 16.5 10.3939 16.5 11.25C16.5 13.7352 14.4853 15.75 12 15.75C11.1373 15.75 10.3313 15.5072 9.64659 15.0862ZM8.14376 15.1716C7.12917 14.1738 6.5 12.7854 6.5 11.25C6.5 9.1822 7.64107 7.38095 9.32787 6.44155C4.80321 7.10433 1.5 9.4031 1.5 12.0227C1.5 14.0365 3.45208 15.8606 6.41049 16.8978L8.14376 15.1716Z"></path></svg></span>
          </div>
          <div className="options">
            <input type="checkbox" id="save-username" />
            <label htmlFor="save-username">Save username</label>
          </div>
          <p className="help-text">
            To help keep your account secure, save your username only on devices that aren't used by other people.
          </p>
          <button type="button"  onClick={handleEnrollClick}>Sign on</button>
          <a href="#" className="forgot-link">Forgot username or password?</a>
        </form>
      </div>
      <footer className="disclaimer">
        <p>Investment and Insurance Products are:</p>
        <ul>
          <li>Not Insured by the FDIC or Any Federal Government Agency</li>
          <li>Not a Deposit or Other Obligation</li>
        </ul>
      </footer>

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