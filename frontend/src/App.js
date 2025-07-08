import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PetPage from "./pages/PetPage";
import InfoPage from "./pages/InfoPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/auth/user/", { withCredentials: true })
      .then(() => setIsLoggedIn(true))
      .catch(() => setIsLoggedIn(false));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={() => setIsLoggedIn(true)} />} />
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/pet" element={isLoggedIn ? <PetPage /> : <Navigate to="/login" />} />
        <Route path="/info" element={isLoggedIn ? <InfoPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;