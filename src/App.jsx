import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"; // Import the CSS file
import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewTable from "./pages/ViewTable";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Initialize state from localStorage to persist login across page refreshes
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("isLoggedIn")
  );

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", "true"); // Persist login state
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear login state
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
        />
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/table"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ViewTable />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
