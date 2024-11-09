// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing_Page from "./Landing_Page";
import Input_Page from "./Input_Page";
import Final_Page from "./Final_Page";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Landing_Page />} />
          <Route path="/Input_Page" element={<Input_Page />} />
          <Route path="/Final_Page" element={<Final_Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
