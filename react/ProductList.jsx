import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
    // Air Purifying (6)
    {
      id: 1,
      name: "Snake Plant",
      price: 20,
      image: "./snake.jpg",
      category: "Air Purifying"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 25,
      image: "./peace-lily.jpg",
      category: "Air Purifying"
    },
    {
      id: 3,
      name: "Spider Plant",
      price: 18,
      image: "./spider.jpg",
      category: "Air Purifying"
    },
    {
      id: 4,
      name: "Chinese Evergreen",
      price: 22,
      image: "./evergreen.jpg",
      category: "Air Purifying"
    },
    {
      id: 5,
      name: "Areca Palm",
      price: 30,
      image: "./areca.jpg",
      category: "Air Purifying"
    },
    {
      id: 6,
      name: "Boston Fern",
      price: 24,
      image: "./fern.jpg",
      category: "Air Purifying"
    },
  
    // Tropical (6)
    {
      id: 7,
      name: "Monstera",
      price: 35,
      image: "./monstera.jpg",
      category: "Tropical"
    },
    {
      id: 8,
      name: "Bird of Paradise",
      price: 40,
      image: "./bird.jpg",
      category: "Tropical"
    },
    {
      id: 9,
      name: "Rubber Plant",
      price: 28,
      image: "./rubber.jpg",
      category: "Tropical"
    },
    {
      id: 10,
      name: "Fiddle Leaf Fig",
      price: 45,
      image: "./fiddle.jpg",
      category: "Tropical"
    },
    {
      id: 11,
      name: "Croton",
      price: 27,
      image: "./croton.jpg",
      category: "Tropical"
    },
    {
      id: 12,
      name: "Philodendron",
      price: 26,
      image: "./philo.jpg",
      category: "Tropical"
    },
  
    // Succulents (6)
    {
      id: 13,
      name: "Aloe Vera",
      price: 15,
      image: "./aloe.jpg",
      category: "Succulents"
    },
    {
      id: 14,
      name: "Jade Plant",
      price: 17,
      image: "./jade.jpg",
      category: "Succulents"
    },
    {
      id: 15,
      name: "Echeveria",
      price: 12,
      image: "./echeveria.jpg",
      category: "Succulents"
    },
    {
      id: 16,
      name: "Burro's Tail",
      price: 18,
      image: "./burro.jpg",
      category: "Succulents"
    },
    {
      id: 17,
      name: "Haworthia",
      price: 14,
      image: "./haworthia.jpg",
      category: "Succulents"
    },
    {
      id: 18,
      name: "Zebra Plant",
      price: 16,
      image: "./zebra.jpg",
      category: "Succulents"
    }
  ];

const ProductList = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.items);

  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = plant => {
    dispatch(addToCart(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const totalCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart ({totalCount})</Link>
      </nav>

      <h1>Plants</h1>

      {["Air Purifying", "Tropical", "Succulents"].map(category => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id}>
                  <img
                    src={plant.image}
                    alt={plant.name}
                    width="150"
                  />

                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    disabled={addedItems.includes(plant.id)}
                    onClick={() => handleAdd(plant)}
                  >
                    {addedItems.includes(plant.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductList;