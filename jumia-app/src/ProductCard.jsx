import React from "react";

function ProductCard({ product, handleCart }){
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>KSh {product.price}</p>
      <button onClick={() => handleCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;