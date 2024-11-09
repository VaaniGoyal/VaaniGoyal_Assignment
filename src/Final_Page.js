//Final_Page.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

function Final_Page() {
  const navigate = useNavigate();
  const handleSearch = async () => {
    navigate('/Input_Page');
  };
  const location = useLocation();
  const { result } = location.state || {};  // Destructure data from state
  console.log(result);
  if (!Array.isArray(result) || result.length === 0) {
    return <div>No data available to display.</div>;  
  }
  return (
    <div className="Final_Page">
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
