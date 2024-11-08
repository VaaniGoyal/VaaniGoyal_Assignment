// import React, { useState } from 'react';
// import axios from 'axios';

// function Final_Page() {
//   const [url, setUrl] = useState('');
//   const [number, setNumber] = useState('');
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/submit-url', {
//         url,
//         number
//       });

//       // Store the result from the backend
//       setResult(response.data.data);
//       setError(null); // Clear any previous errors
//     } catch (error) {
//       setError('An error occurred while fetching the data.');
//       setResult(null);
//     }
//   };

//   return (
//     <div>
//       <h1>Word Frequency Analyzer</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="url">URL:</label>
//           <input
//             type="text"
//             id="url"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="number">Number of Words:</label>
//           <input
//             type="number"
//             id="number"
//             value={number}
//             onChange={(e) => setNumber(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       {/* Display error message */}
//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {/* Display the result if available */}
//       {result && (
//         <table>
//           <thead>
//             <tr>
//               <th>Word</th>
//               <th>Frequency</th>
//             </tr>
//           </thead>
//           <tbody>
//             {result.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.word}</td>
//                 <td>{item.frequency}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default Final_Page;





import React from 'react';
import { useLocation } from 'react-router-dom';
import './Final_Page.css';
function Final_Page() {
  // Get the data passed via the state from the Landing_Page
  const location = useLocation();
  const { result } = location.state || {}; // Default to empty object if no data

  if (!result || result.length === 0) {
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
