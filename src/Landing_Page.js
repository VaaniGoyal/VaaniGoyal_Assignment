//Landing_Page.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';

function Landing_Page() {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate('/Input_Page');
  };
  // Function to scroll to the second section
  const scrollToSection = () => {
    document.getElementById('second-section').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="Landing_Page">
      <div className="button-container">
        <button className="universal-button">Contact Us</button>
        <button className="universal-button" onClick={scrollToSection}>About Us</button>
      </div>
      {/* First Section */}
      <section className="first-section">
        <h1 className="main-heading">Welcome to my website</h1>
        <p className="sub-heading">Let's find the most frequent words</p>
        <button 
          onClick={handleClick}
          className="try-now"
        >
          Try Now
        </button>
      </section>

      {/* Second Section */}
      <section id="second-section" className="second-section">
        <h2 className="second-heading">About This Tool</h2>
        <p className="second-subheading">
          This tool helps you find the most frequent words on a webpage. Simply enter a URL, 
          and let our tool analyze the content for the most commonly occurring terms.
        </p>
      </section>
    </div>
  );
}

export default Landing_Page;
