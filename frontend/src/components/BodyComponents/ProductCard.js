import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, imageUrl, altText }) => {
  const handleShopNowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white p-4 sm:p-10 m-4 sm:m-10">
      <p className="font-bold text-2xl">{title}</p>
      <p>{description}</p>
      <Link to="/">
        <button
          className="p-2 sm:p-4 mt-2 bg-green-500 hover:bg-green-600"
          onClick={handleShopNowClick}
        >
          SHOP NOW
        </button>
      </Link>
      <img className="ml-4 sm:ml-16" src={imageUrl} alt={altText} />
    </div>
  );
};

export default ProductCard;
