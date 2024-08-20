import React, { useState, useEffect } from 'react';
import EmptyCartPage from './EmptyCartPage';
import ShippingInfo from '../HeaderComponents/ShippingInfo';

const CartPage = () => {
  const [data, setData] = useState([]);
  const [showShippingInfo, setShowShippingInfo] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/cartItems');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowShippingInfo = () => {
    setShowShippingInfo(true);
  };

  const handleQuantityUpdate = async (id, newQuantity) => {
    try {
      const response = await fetch('http://localhost:8080/cart/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, quantity: newQuantity })
      });

      if (!response.ok) {
        throw new Error('Failed to update quantity');
      }

      const updatedData = data.map(item => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setData(updatedData);
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const handleRemoveItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/cart/${id}`, {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to remove item');
      }

      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  return (
    <div className='m-10'>
      {showShippingInfo ? (
        <ShippingInfo />
      ) : (
        <>
          {data.length === 0 ? (
            <EmptyCartPage />
          ) : (
            <div className='m-5'>
              <div className='ml-28 flex flex-col font-bold text-lg md:text-xl md:flex-row justify-between items-center  p-3'>
                <p className="w-full md:w-1/5">Product</p>
                <p className="w-full md:w-2/5">Name</p>
                <p className="w-full md:w-1/5">Quantity</p>
                <p className="w-full md:w-1/5">Total</p>
              </div>
              <ul className='m-0 p-0'>
                {data.map(item => (
                  <li key={item.id} className='flex flex-col md:flex-row justify-between items-center border-b border-gray-200 py-3'>
                    <button className="text-red-500" onClick={() => handleRemoveItem(item.id)}>X</button>
                    <img src={item.imgURL} alt={item.description} className='w-16 h-16 object-cover rounded-full mb-2 md:mb-0 md:mr-4' />
                    <div className='flex flex-col md:flex-row items-center w-full md:w-2/5'>
                      <p className='w-full md:w-1/2 text-center md:text-left'>{item.name}</p>
                      <div className="flex items-center w-full md:w-1/2 space-x-2 mt-2 md:mt-0">
                        <button 
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-full"
                          onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}>
                          +
                        </button>
                        <p className='mr-2 ml-2'>{item.quantity}</p>
                        <button 
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-full"
                          onClick={() => handleQuantityUpdate(item.id, Math.max(1, item.quantity - 1))}>
                          -
                        </button>
                      </div>
                    </div>
                    <p className='w-full md:w-1/5 text-center'>${item.price * item.quantity}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button onClick={handleShowShippingInfo} className='bg-green-400 py-2 px-4 mt-4 text-white rounded-md'>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
