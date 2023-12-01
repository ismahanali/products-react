import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { useState } from "react";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Add logic to add product to cart, below we changed state
    setCartItems([...cartItems, product]);
    //updating cartitems array but haven't updated the state.
  };

  const handleUpdateCart = (product, quantity) => {
    // Add logic to update product quantity in cart
  };

  return (
    <div className="app-container">
      <Cart cartItems={cartItems} onUpdateCart={handleUpdateCart} />
      <ProductsList onAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
