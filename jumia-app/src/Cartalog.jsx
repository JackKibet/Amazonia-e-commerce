import React from "react";

function Cartalog({ isOpen, cart, onClose, onRemoveFromCart }) {

  return (
    <div className={`cart-modal ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-title">Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item" > {/* Ensure key is unique */}
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>KSh {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button className="remove" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button className="pay">Check out</button>
      <button className="cancel">Cancel purchase</button>
    </div>
  );
}

export default Cartalog;