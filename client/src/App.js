import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <main className="app__container">
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
