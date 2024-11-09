//Final_Page.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

function Final_Page() {
  const navigate = useNavigate();
  const handleSearch = async () => {
    navigate('/Input_Page');
  };
  const handleAboutUsClick = () => {
    navigate('/Landing_Page#second-section');
  };
  const handleHomeClick = () => {
    navigate('/Landing_Page#first-section');
  };
  const handleContactUsClick = () => {
    navigate('/Landing_Page#third-section');
  };
  const location = useLocation();
  const { result } = location.state || {};  // Destructure data from state
  console.log(result);
  if (!Array.isArray(result) || result.length === 0) {
    return <div>No data available to display.</div>;  
  }
  return (
    <div className="Final_Page">
      <div className="image-container4">
        <img src={require('./Home.png')} alt="Illustration" className="side-image4" onClick={handleHomeClick} />
      </div>
      <div className="button-container4">
        <button className="universal-button4" onClick={handleContactUsClick}>Contact Us</button>
        <button className="universal-button4" onClick={handleAboutUsClick}>About Us</button>
      </div>
      <h1 className="heading">Most Frequent Words</h1>
      <table>
        <thead>
          <tr>
            <th>Word</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => (
            <tr key={index}>
              <td>{item.word}</td>
              <td>{item.frequency}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="button-container">
        <button onClick={handleSearch} className="submit-button1">
          Back to search
        </button>
      </div>
    </div>
  );
}
export default Final_Page;
