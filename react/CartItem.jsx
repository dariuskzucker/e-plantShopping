import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem
} from "../redux/CartSlice";

import { Link } from "react-router-dom";

const CartItem = () => {
  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.items);

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Shopping Cart</h1>

      <h2>Total Amount: ${totalAmount}</h2>

      {items.map(item => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            margin: "10px",
            padding: "10px"
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            width="100"
          />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>
            Total Cost: $
            {item.price * item.quantity}
          </p>

          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() =>
              dispatch(increaseQuantity(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(decreaseQuantity(item.id))
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={() =>
          alert("Checkout Coming Soon")
        }
      >
        Checkout
      </button>

      <br />
      <br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default CartItem;