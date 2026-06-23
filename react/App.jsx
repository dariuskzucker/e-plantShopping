import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  if (showProductList) {
    return <ProductList />;
  }

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Paradise Nursery</h1>

        <p>
          Bringing nature into your home with beautiful and healthy plants.
        </p>

        <button
          className="get-started-btn"
          onClick={() => setShowProductList(true)}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;