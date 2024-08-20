import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShimmerUi from '../Constants/ShimmerUi';
import AddToCart from '../BodyComponents/AddToCart' 

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 15;

  useEffect(() => {
    fetch(`http://localhost:8080/products/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  const increaseQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <ShimmerUi />;
  }

  return (
    <div className="container mx-auto my-8">
      <div className="flex flex-col md:flex-row">
        <img src={product.imgURL} alt={product.name} className="w-full md:w-1/2 object-cover" />
        <div className="md:ml-8 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-2">{product.category}</p>
          <p>{product.description}</p>
          <p className="text-lg font-bold">${product.price}</p>
          <p>+Free Shipping</p>
          <div className="flex items-center mt-4">
            <button
              onClick={decreaseQuantity}
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded-l"
            >
              -
            </button>
            <span className="px-3">{quantity}</span>
            <button
              onClick={increaseQuantity}
              className="bg-gray-300 text-gray-700 px-3 py-1 rounded-r"
            >
              +
            </button>
          </div>
          
          <AddToCart
            productId={productId}
            quantity={quantity}
            imgURL={product.imgURL}
            category={product.category}
            productName={product.name}
            description={product.description}
            price={product.price}

          />
          <ToastContainer position="bottom-center" autoClose={3000} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
