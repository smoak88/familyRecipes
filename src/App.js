import "./App.css";
import React from "react";
import HomePage from "./components/HomePage";
import RecipePage from "./components/RecipePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/recipes" element={<RecipePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
