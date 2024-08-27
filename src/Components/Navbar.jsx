import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../assets/goods.png';
import Close from '../assets/Close.png';
import { useCart } from '../context/CartContext';
import { IoCartOutline } from 'react-icons/io5';

const Navbar = ({ menuOpen, closeMenu }) => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav 
      className={`absolute top-0 right-0 flex flex-col md:flex-row items-center gap-4 p-2 md:p-4 text-white 
        ${menuOpen ? 'block':'hidden'} md:block bg-black md:bg-transparent`}
    >
      <ul className='flex flex-col space-x-[30px]  gap-2 p-0 m-0 md:flex-row md:gap-4'>
        <li><NavLink to='/' className='text-lg' onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to='/about' className='text-lg' onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to='/products' className='text-lg' onClick={closeMenu}>Books</NavLink></li>
        <li><NavLink to='/contact' className='text-lg' onClick={closeMenu}>Contact Us</NavLink></li>
        <li><NavLink to='/login' className='text-lg'>Login</NavLink></li>
        <li><NavLink to='/privacypolicy' className='text-lg'>Privacy</NavLink></li>
        <li>
          <NavLink to='/cart' className='relative flex items-center' onClick={closeMenu}>
          <IoCartOutline className='size-9'/>
      
            {totalItems > 0 && (
              <p className='absolute top-[-10%] left-[70%] w-6 h-auto text-white border-r rounded-2xl font-bold text-center'>
                {totalItems}
              </p>
            )}
          </NavLink>
        </li>
      </ul>
      <button 
        className='flex items-center md:hidden'
        onClick={closeMenu}
      >
        <img src={Close} className='w-8 h-8' alt="Close Menu" />
      </button>
    </nav>
  );
}

export default Navbar;
