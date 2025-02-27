
import React from "react";

const Header = ({ cartCount, toggleCart }) => {
  return (
    <header className="header">
      <img src="src\images\Online Store.png" alt="logo" className="logo1" />
      <div className="logo">Jack Mini Mart</div>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
              </div>
              <select name="" id="items">
                <option value="Categories">Categories</option>
                <option value="Categories">Stationary</option>
                <option value="Categories">Food Items</option>
                <option value="Categories">Electronics</option>
                <option value="Categories">Groceries</option>
                <option value="Categories">Toiletries</option>

              </select>
              <select name="" id="payment"><option value="Categories">Payment</option>
                <option value="Categories">Paypal</option>
                <option value="Categories">Mpesa</option>
                <option value="Categories">Master card</option>
                <option value="Categories">Equity</option>
                <option value="Categories">Co op</option>

              </select>
      <div className="cart" onClick={toggleCart}>
        <span role="img" aria-label="cart">
          🛒
        </span>
        <span className="cart-count">{cartCount}</span>
      </div>
    </header>
  );
};

export default Header;