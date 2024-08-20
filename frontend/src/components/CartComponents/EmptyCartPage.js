import React from 'react'
import { Link } from 'react-router-dom'

function EmptyCartPage() {
  return (
    <div>
      <h1 className='text-3xl'>Cart</h1>
      <p className='mt-4'>Your cart is currently empty...</p>
      <button className='bg-green-500 mt-4'>
        <Link className='m-4'  to="/">RETURN TO SHOP</Link>
      </button>
      
    </div>
  )
}

export default EmptyCartPage
