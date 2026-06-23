import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";

import "./App.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Paradise Nursery</h1>

        <p>
          Bringing nature into your home with beautiful and healthy plants.
        </p>

        <br />

        <button
          className="get-started-btn"
          onClick={() => navigate("/plants")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;