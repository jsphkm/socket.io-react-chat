import React from 'react';
import "./styles.css";

const LandingPage = () => {
  return (
    <main className="landingpage-container">
      <a
      className="landingpage-header"
      href="https://github.com/jsphkm/socket.io-chat"
      rel="noopener noreferrer"
      target="_blank"
      >
        Socket.IO-Chat
      </a>
      <div className="landingpage-subcontainer">
        <div className="preview-container">
          <div className="preview-icon-container">
            <div className="preview-icon"></div>
            <div className="preview-initials">AN</div>
          </div>
          <div className="preview-fullname">Anonymous</div>
        </div>
        <form className="name-form">
          <input
          id="fullname-input"
          placeholder="Your Full Name"
          />
          <button id="fullname-button" type="submit">Enter</button>
        </form>
      </div>
    </main>
  )
}

export default LandingPage;