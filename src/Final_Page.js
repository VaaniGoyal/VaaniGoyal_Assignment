//Final_Page.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Final_Page.css';

function Final_Page() {
  const location = useLocation();
  const { result } = location.state || {};  // Destructure data from state
  console.log(result);
  if (!Array.isArray(result) || result.length === 0) {
    return <div>No data available to display.</div>;  
  }

  return (
    <div className="ResultsPage">
      <h1>Most Frequent Words</h1>
      
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
    </div>
  );
}

export default Final_Page;
