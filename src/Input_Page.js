//Input_Page.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './App.css';

function Input_Page() {
  const [url, setURL] = useState('');
  const [number, setNumber] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleURLChange = (e) => setURL(e.target.value);
  const handleNumberChange = (e) => setNumber(e.target.value);
  const handleAboutUsClick = () => {
    navigate('/Landing_Page#second-section');
  };
  const handleHomeClick = () => {
    navigate('/Landing_Page#first-section');
  };
  const handleSubmit = async () => {
    try {
      // Define the backend URL
      const backendURL = 'http://localhost:5000/api/submit-url';
      
      // Make a POST request to the backend route with `url` and `number` in the body
      const response = await fetch(backendURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, number }),
      });

      const data = await response.json();

      // Check if the backend response is successful
      if (response.ok) {
        // Redirect to the Results page and pass the data
        navigate('/Final_Page', { state: { result: data.data } });
      } else {
        alert('Error from server: ' + data.message);
      }
    } catch (error) {
      console.error('Error sending data to the backend:', error);
      alert('An error occurred while submitting the data.');
    }
  };

  return (
    <div className="Input_Page">
      <div className="image-container3">
        <img src={require('./Home.png')} alt="Illustration" className="side-image3" onClick={handleHomeClick} />
      </div>
      <div className="button-container3">
        <button className="universal-button3">Contact Us</button>
        <button className="universal-button3" onClick={handleAboutUsClick}>About Us</button>
      </div>
      <h1 className="main-heading2">Finding the frequent words</h1>
      <p className="sub-heading2">Enter the required information</p>
      <div className="input-container">
        <div className="input-group">
          <label htmlFor="url">URL:</label>
          <input
            id="url"
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={handleURLChange}
            className="input-box"
          />
        </div>
        <div className="input-group">
          <label htmlFor="number">Number:</label>
          <input
            id="number"
            type="text"
            placeholder="Enter Number"
            value={number}
            onChange={handleNumberChange}
            className="input-box"
          />
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="submit-button"
      >
      Submit
      </button>
      <div className="image-containering">
        <img src={require('./image.png')} alt="Illustration" className="side-imageing" />
      </div>
    </div>
  );
}

export default Input_Page;
