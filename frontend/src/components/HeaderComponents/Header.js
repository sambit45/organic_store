import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";

const NavigationLinksLeft = [
  { to: "/", text: "", image: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg" },
  { to: "/everything", text: "Everything" }
];

const Header = () => {
  const [nav, setNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };
  
  
    handleResize(); 
    window.addEventListener('resize', handleResize);
    

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='flex justify-between items-center px-10 py-6 bg-gray-300 '>
        <div className='flex items-center space-x-4'>
          {NavigationLinksLeft.map((link, index) => (
            <NavLink key={index} to={link.to} activeClassName="font-bold" className="hover:text-green-500">
              {link.image && <img src={link.image} alt='Home' className='w-14 h-14 md:w-16 md:h-16 mr-2' />}
              <div className='cursor-pointer'>{link.text}</div>
            </NavLink>
          ))}
        </div>

        <div className={`hidden md:flex space-x-4 ${isMobile ? 'hidden' : 'flex'}`}>
          <NavLink to="/about" activeClassName="font-bold" className=' hover:text-green-500'>About</NavLink>
          <NavLink to="/contact" activeClassName="font-bold" className='hover:text-green-500'>Contact</NavLink>
          <div className='cursor-pointer flex items-center'>
            <Link to="/cartPage" className='cursor-pointer flex items-center'>
              <FaShoppingCart className='mr-1' />
                £0.00
            </Link>
            <FaUser className='ml-4' />
          </div>
        </div>

        <div className={`md:hidden ${isMobile ? 'flex' : 'hidden'}`} onClick={handleClick}>
          {nav ? <FaTimes /> : <RxHamburgerMenu />}
          {nav && (
            <div className='flex flex-col space-y-2'>
              <NavLink to="/about" activeClassName="font-bold" className='cursor-pointer'>About</NavLink>
              <NavLink to="/contact" activeClassName="font-bold" className='cursor-pointer'>Contact</NavLink>
              <div className='cursor-pointer flex items-center'>
                <FaShoppingCart className='mr-1' />
                £0.00
              </div>
              <div className='ml-3'>
                <FaUser />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
