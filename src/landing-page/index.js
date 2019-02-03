import React from 'react';
import "./styles.css";

const LandingPage = () => {
  return (
    <div className="landingpage-container">
      <h1 className="landingpage-header">
        Welcome to Socket.IO-Chat
      </h1>
      <form className="name-form">
        <label htmlFor="firstname-input">First name</label>
        <input
        id="firstname-input"
        placeholder="Your firstname"
        />
        <label htmlFor="lastname-input">Last name</label>
        <input
        id="lastname-input"
        placeholder="Your lastname"
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}

export default LandingPage;