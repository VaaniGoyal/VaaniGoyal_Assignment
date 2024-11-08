//App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Landing_Page from "./Landing_Page";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/Landing_Page" element={<Landing_Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;