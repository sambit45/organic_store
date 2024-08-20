
import React, { useState } from 'react';

const ShippingInfo = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    pinCode: '',
    country: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
          <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700">City</label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="pinCode" className="block text-gray-700">Pin Code</label>
            <input type="text" id="pinCode" name="pinCode" value={formData.pinCode} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700">Country</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Continue to Payment</button>
      </form>
    </div>
  );
};

export default ShippingInfo;
