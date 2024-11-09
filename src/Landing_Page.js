//Landing_Page.js
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import './App.css';

function Landing_Page() {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate('/Input_Page');
  };
  const location = useLocation();
  useEffect(() => {
    if (location.hash === '#second-section') {
      const scrollToSection = () => {
        const section = document.getElementById('second-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      setTimeout(scrollToSection, 10); // Delay to allow component rendering
    }else if (location.hash === '#first-section') {
      const scrollToSection = () => {
        const section = document.getElementById('first-section');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };
      setTimeout(scrollToSection, 10); // Delay to allow component rendering
    }
  }, [location]);
  // Function to scroll to the second section
  const scrollToSection1 = () => {
    document.getElementById('first-section').scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToSection2 = () => {
    document.getElementById('second-section').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      {/* First Section */}
      <section id="first-section" className="first-section">
      <div className="image-container1">
        <img src={require('./Home.png')} alt="Illustration" className="side-image1" onClick={scrollToSection1} />
      </div>
      <div className="button-container1">
        <button className="universal-button1">Contact Us</button>
        <button className="universal-button1" onClick={scrollToSection2}>About Us</button>
      </div>
        <h1 className="main-heading1">Welcome to my website</h1>
        <p className="sub-heading1">Let's find the most frequent words</p>
        <button 
          onClick={handleClick}
          className="try-now"
        >
          Try Now
        </button>
      </section>

      {/* Second Section */}
      <section id="second-section" className="second-section">
      <div className="image-container2">
        <img src={require('./Home.png')} alt="Illustration" className="side-image2" onClick={scrollToSection1} />
      </div>
      <div className="button-container2">
        <button className="universal-button2">Contact Us</button>
        <button className="universal-button2" onClick={scrollToSection2}>About Us</button>
      </div>
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
