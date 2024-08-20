import React from 'react';
import { toast } from 'react-toastify';

const AddToCart = ({ productId, quantity, imgURL,category, productName, description,price }) => {
  const handleAddToCart = () => {
    const addToCartData = {
      id: productId,
      quantity: quantity,
      imgURL: imgURL,
      category: category,
      name: productName,
      description: description,
      price: price
    };

    fetch('http://localhost:8080/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addToCartData)
    })
    .then(response => {
      console.log(addToCartData);
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
      toast.success(`Added ${quantity} item(s) to the cart`);
    })
    .catch(error => {
      console.error('Error adding item to cart:', error);
      toast.error('Failed to add item to cart. Please try again later.');
    });
  };

  return (
    <div>
      <button
        onClick={handleAddToCart}
        className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-green-600 focus:outline-none"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
