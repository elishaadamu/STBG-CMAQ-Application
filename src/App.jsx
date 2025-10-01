import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"; // Import the CSS file
import Form from "./components/Form";
import GettingStarted from "./components/Intro";
import CostEstimate from "./components/Cost";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1 className="text-3xl font-bold mb-4 text-center">
                  STBG/CMAQ Application
                </h1>
                <GettingStarted />
                <CostEstimate />
                <Form />
              </>
            }
          />
          {/* You can add more routes here as your application grows */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
