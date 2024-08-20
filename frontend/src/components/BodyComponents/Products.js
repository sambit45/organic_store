import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function Products() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/products");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      setAllProducts(result.slice(0,4));
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  return (
    <div className="flex justify-between p-10 text-center">
      {allProducts.map((product) => (
        <Link to={`/ProductDetails/${product.id}`} key={product.id}>
            <img src={product.imgURL} alt={product.name}></img>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>${product.price}</p>
        </Link>
      ))}
    </div>
  )
  
}

export default Products