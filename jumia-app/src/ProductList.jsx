import React from "react";
import ProductCard from "./ProductCard.jsx";

import product1 from "./images/product1.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";
import product4 from "./images/product4.jpg";
import product5 from "./images/product5.jpg";
import product6 from "./images/product6.jpg";
import product7 from "./images/product7.jpg";
import product8 from "./images/product8.jpg";
import product9 from "./images/product9.jpg";
import product10 from "./images/product10.jpg";
import product11 from "./images/product11.jpg";
import product12 from "./images/product12.jpg";
import product13 from "./images/product13.jpg";
import product14 from "./images/product14.jpg";
import product15 from "./images/product15.jpg";
import product16 from "./images/product16.jpg";
import product17 from "./images/product17.jpg";
import product18 from "./images/product18.jpg";
import product19 from "./images/product19.jpg";
import product20 from "./images/product20.jpg";
import product21 from "./images/product21.jpg";
import product22 from "./images/product22.jpg";
import product23 from "./images/product23.jpg";
import product24 from "./images/product24.jpg";
import product25 from "./images/product25.jpg";

const products = [
  
  { id: 1, name: "Turky Essence", price: 1000, image: product1 },
  { id: 2, name: "Australian Bungalow suite", price: 200000, image: product2 },
  { id: 3, name: "Kenyan special", price: 13000, image: product3 },
  { id: 4, name: "Turkey leather", price: 64000, image: product4 },
  { id: 5, name: "Kenyan cream", price: 111000, image: product5 },
  { id: 6, name: "Kenyan grey", price: 52000, image: product6 },
  { id: 7, name: "Ladies Collection", price: 3000, image: product7 },
  { id: 8, name: "Bluetooth Speaker \\400cc", price: 4000, image: product8 },
  { id: 9, name: "Bluetooth Speaker \\200cc", price: 1000, image: product9 },
  { id: 10, name: "Samsung RR182", price: 42000, image: product10 },
  { id: 11, name: "Dubai special leather", price: 223000, image: product11 },
  { id: 12, name: "Ramtons r23AA", price: 114000, image: product12 },
  { id: 13, name: "Bluetooth r32", price: 1000, image: product13 },
  { id: 14, name: "Teens Collection", price: 2000, image: product14 },
  { id: 15, name: "King's Collection Aroma", price: 3000, image: product15 },
  { id: 16, name: "Ramtons white 8800E", price: 54000, image: product16 },
  { id: 17, name: "The lady", price: 1000, image: product17 },
  { id: 18, name: "Best friend", price: 2000, image: product18 },
  { id: 19, name: "Germany 34AA white fridge", price: 113000, image: product19 },
  { id: 20, name: "Women's Collection", price: 4000, image: product20 },
  { id: 21, name: "Cotton winter", price: 1000, image: product21 },
  { id: 22, name: "Vintage Red", price: 2000, image: product22 },
  { id: 23, name: "Dollar", price: 3000, image: product23 },
  { id: 24, name: "Sleek lady", price: 4000, image: product24 },
  { id: 25, name: "Chanel N'5", price: 4000, image: product25 }

];

function ProductList({ handleCart }){
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} handleCart={handleCart} />
      ))}
      
    </div>
  );
};

export default ProductList;