
import React, { useState } from "react";
import Header from "./Header.jsx";
import ProductList from "./ProductList.jsx";
import Cartalog from "./Cartalog.jsx";


function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  function onRemoveFromCart(productId){
    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== productId));
    }
  };
  
  
  // Pass it to the Cart component
  <Cartalog cart={cart} onRemoveFromCart={onRemoveFromCart} />


  function handleCart(product){
   const existingItems = cart.find((item) => item.id === product.id);
   if (existingItems) {
    setCart(
      cart.map((item) => item.id === product.id
      ? {...item, quantity: item.quantity + 1 } : item
    )
    );
   } else {
    setCart([...cart, {...product, quantity: 1 }]);
   }
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={`App ${isCartOpen ? "cart-open" : ""}`}>
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} toggleCart={toggleCart} />
      <div className="advert"><h1>Black Friday !!!  we have HOT DEALS JUST FOR YOU</h1>
      <h5>Hurry while stocks last 50% OFF</h5>
      </div>
      <ProductList handleCart={handleCart} />
      <Cartalog isOpen={isCartOpen} cart={cart} onClose={toggleCart}  onRemoveFromCart={onRemoveFromCart} />
     <footer>
      <h1 className="footertitle">&copy; {new Date().getFullYear()} Jack Mini All rights reserved // CAP ISO 80081 EE</h1>
        <figure>
          <img className="socials" src="src\images\1_Facebook_colored_svg_copy-1.webp" alt="facebook" />
          <figcaption>Facebook</figcaption>
          </figure>      
          <figure>
          <img className="socials"  src="src\images\social_media_logo_whatsapp-.webp" alt="" />
            <figcaption>WhatsApp</figcaption>
          </figure>
          <figure>
          <img className="socials"  src="src\images\Telegram-64.webp" alt="" />
            <figcaption>Telegram</figcaption>
          </figure>
          <figure>
          <img className="socials"  src="src\images\tiktok logo.png" alt="" />
            <figcaption>Tiktok</figcaption>
          </figure>
     </footer>
    </div>
    
  );
};

export default App;