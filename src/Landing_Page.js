// import React, { useState } from 'react';
// import './App.css';

// function Landing_Page() {
//   const [url, setURL] = useState('');
//   const [number, setNumber] = useState('');

//   const handleURLChange = (e) => setURL(e.target.value);
//   const handleNumberChange = (e) => setNumber(e.target.value);

//   const handleSubmit = async () => {
//     try {
//       // Define the backend URL
//       const backendURL = 'http://localhost:5000/api/submit-url';
      
//       // Make a POST request to the backend route with `url` and `number` in the body
//       const response = await fetch(backendURL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ url, number }),
//       });

//       const data = await response.json();
      
//       // Handle the response data as needed
//       alert(`Response from server: ${data.message}`);
//     } catch (error) {
//       console.error('Error sending data to the backend:', error);
//       alert('An error occurred while submitting the data.');
//     }
//   };

//   return (
//     <div className="Landing_Page">
//       <header className="Landing-Page">
//         <h1>Welcome to Our Landing Page</h1>
//         <p>Please enter your information below:</p>
        
//         <div className="input-container">
//           <input
//             type="text"
//             placeholder="Enter URL"
//             value={url}
//             onChange={handleURLChange}
//             className="input-box"
//           />
//           <input
//             type="text"
//             placeholder="Enter Number"
//             value={number}
//             onChange={handleNumberChange}
//             className="input-box"
//           />
//         </div>
        
//         <button
//           onClick={handleSubmit}
//           className="submit-button"
//         >
//           Submit
//         </button>
//       </header>
//     </div>
//   );
// }

// export default Landing_Page;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './App.css';

function Landing_Page() {
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
    <div className="Landing_Page">
      <header className="Landing-Page">
        <h1>Welcome to Our Landing Page</h1>
        <p>Please enter your information below:</p>
        
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter URL"
            value={url}
            onChange={handleURLChange}
            className="input-box"
          />
          <input
            type="text"
            placeholder="Enter Number"
            value={number}
            onChange={handleNumberChange}
            className="input-box"
          />
        </div>
        
        <button
          onClick={handleSubmit}
          className="submit-button"
        >
          Submit
        </button>
      </header>
    </div>
  );
}

export default Landing_Page;
