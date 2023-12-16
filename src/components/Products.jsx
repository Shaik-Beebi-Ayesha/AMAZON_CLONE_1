import React, { useState, useEffect } from "react";

import SingleProduct from "./SingleProduct";


function Products() {
  const [allproducts, setProducts] = useState([]);
  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

 
  
  return (
    <>
      <div className="flex justify-center w-full flex-wrap gap-4 py-4">
      {allproducts.slice(0, 28).map((product) => (
        <SingleProduct 
        id={product.id} 
        title={product.title} 
        image={product.thumbnail} 
        description={product.description} 
        price={product.price} 
        rating={product.rating} 
        quantity = {1}
        discountPercentage={product.discountPercentage}/>
      ))}
      </div>

    </>
  );
}

export default Products;
