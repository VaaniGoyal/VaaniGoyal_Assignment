//Landing_Page.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';

function Landing_Page() {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate('/Input_Page');
  };
  return (
    <div className="Landing_Page">
      <h1 className="main-heading">Welcome to my website</h1>
      <p className="sub-heading">Let's find the most frequent words</p>
      <button 
        onClick={handleClick}
        className="try-now"
      >Try Now</button>
    </div>
  );
}

export default Landing_Page;
