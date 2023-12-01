import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <h4>{item.title}</h4>
      <p>
        ${item.price} x {quantity}
      </p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const Cart = ({ cartItems, onUpdateCart }) => {
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <button className="cart-button" onClick={handleToggleCart}>
        {showCart ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faShoppingBasket} />
        )}
      </button>

      {showCart && (
        <div className="cart-container">
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <CartItem
                item={cartItem}
                onUpdateCart={onUpdateCart}
                key={cartItem.id}
              />
            ))
          ) : (
            <p>Add items to your cart!</p>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
