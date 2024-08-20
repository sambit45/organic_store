import React from 'react'

function Contact() {
  return (
    <div className='text-center'>
      <h1 className='text-5xl font-bold m-10'>Get In Touch</h1>
      <img className='mx-auto block' src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png' alt='leaf'></img>
      <div className='flex m-8 justify-between'>
        <div className='container outline outline-gray-300 m-4 p-8'>
          <h1 className='text-2xl font-bold'>You can call us..</h1>
            <p>+919937331585</p>
            <p>+919937331985</p>
        </div>
        <div className='container outline outline-gray-300 m-4 p-8'>
          <h1 className='text-2xl font-bold'>Email here..</h1>
            <p>info@example.com</p>
            <p>support@example.com</p>
        </div>
        <div className='container outline outline-gray-300 m-4 p-8'>
            <h1 className='text-2xl font-bold'>We Are Here..!</h1>
            <p>1569 Ave, New York,</p>
            <p>NY 10028, USA</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
