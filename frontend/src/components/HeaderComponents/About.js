import React from 'react';
import ProductList from './ProductList';


function About() {
  
  return (
    <>
    <div className='text-center '>
      <h1 className='font-bold text-4xl m-16'>About Us</h1>
      <img className='mx-auto block' src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png' alt='leaf' />
    </div>
    <div className='flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-8 py-16 m-10'>
      <div className='w-full max-w-xl lg:max-w-2xl text-center lg:text-left'>
        <h1 className='text-4xl lg:text-5xl font-bold mb-4'>We Are Your Favourite Store.</h1>
        <div className='text-gray-700'>
          <p className='mb-4'>
            Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.
          </p>
          <p className='mb-4'>
            Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.
          </p>
        </div>
      </div>
      <div className='w-full max-w-xl lg:max-w-2xl mt-20'>
        <img className='w-full h-auto rounded-lg' src='https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2020/01/banner-01.jpg' alt='grapes' />
      </div>
      
    </div>
    <div className='bg-black text-white flex font-bold justify-between text-3xl'>
          <div className='m-16'>
            <h1>Numbers Speak For</h1>
            <h1>Themselves!</h1>
          </div>
          
          <div className='m-16'>
            <h1>5,000+</h1>
            <h1>Curated Products</h1>
          </div>
          <div className='m-16'>
            <h1>40+</h1>
            <h1>Product Categories</h1>
          </div>
      </div>
      <div>
        <ProductList />
      </div>
      
    </>
  );
}

export default About;





