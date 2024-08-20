import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = [
    { name: 'Fresh fruits', image: 'https://d2tpjuzrrka29p.cloudfront.net/fcce9aa7-a0f0-4fe1-9ff8-51a66dc24dfe/img/check-success.png' },
    { name: 'Dry fruits', image: 'https://d2tpjuzrrka29p.cloudfront.net/fcce9aa7-a0f0-4fe1-9ff8-51a66dc24dfe/img/check-success.png' },
    { name: 'Fresh vegetables', image: 'https://d2tpjuzrrka29p.cloudfront.net/fcce9aa7-a0f0-4fe1-9ff8-51a66dc24dfe/img/check-success.png' },
    { name: 'Dried vegetables', image: 'https://d2tpjuzrrka29p.cloudfront.net/fcce9aa7-a0f0-4fe1-9ff8-51a66dc24dfe/img/check-success.png' },
    { name: 'Beauty products', image: 'https://d2tpjuzrrka29p.cloudfront.net/fcce9aa7-a0f0-4fe1-9ff8-51a66dc24dfe/img/check-success.png', categories: ['Organic Products', 'Beauty products'] },
    { name: 'Milk products', image: 'https://d2tpjuzrrka29p.cloudfront.net/fcce9aa7-a0f0-4fe1-9ff8-51a66dc24dfe/img/check-success.png' },
    { name: 'Organic honey', image: 'https://d2tpjuzrrka29p.cloudfront.net/fcce9aa7-a0f0-4fe1-9ff8-51a66dc24dfe/img/check-success.png' },
    { name: 'Organic tea', image: 'https://d2tpjuzrrka29p.cloudfront.net/fcce9aa7-a0f0-4fe1-9ff8-51a66dc24dfe/img/check-success.png' },
  ];

  return (
    <div className="py-16 bg-green-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Certified Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.name} className="p-4">
              <div className="text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover mb-4 rounded-lg mx-auto"
                />
                <h3 className="text-xl font-bold mb-2 text-green-500">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to='/'>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              START SHOPPING
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
