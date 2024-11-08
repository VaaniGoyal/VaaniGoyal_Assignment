//App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import { Header, Footer } from "./template";
import Landing_Page from "./Landing_Page";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Footer />
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