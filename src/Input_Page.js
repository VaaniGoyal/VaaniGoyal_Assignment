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
      <div className="button-container1">
        <button className="universal-button1">Contact Us</button>
        <button className="universal-button1">About Us</button>
      </div>
      <h1 className="main-heading1">Finding the frequent words</h1>
      <p className="sub-heading1">Enter the required information</p>
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
      <div className="image-container">
        <img src={require('./image.png')} alt="Illustration" className="side-image" />
      </div>
    </div>
  );
}

export default Input_Page;
