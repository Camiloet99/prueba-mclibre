import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductDetail from "./components/templates/ProductDetail/ProductDetail";
import "./App.scss";

function App() {
  return (
    <Router>
      <main className="app__container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="items" exact element={<Home />} />
          <Route path="/items/:id" exact element={<ProductDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
