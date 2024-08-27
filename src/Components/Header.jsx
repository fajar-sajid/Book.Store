import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/open-book.png';
import Navbar from './Navbar';
import Close from '../assets/Close.png';
import Option from '../assets/justify.png';

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu=()=>setMenuOpen(!menuOpen)
    const closeMenu=()=>setMenuOpen(false)
  return (
    <header className="relative flex flex-col items-center justify-between h-16 p-4 bg-black md:flex-row">
        <div className='flex flex-row items-center justify-between w-full'>
        <NavLink to='/' className='flex flex-row items-center'>
        <img src={Logo} className='w-12 h-12 pl-2' alt="Logo" />
        <h1 className='ml-2 text-2xl font-bold text-white'>
          Book<span className='text-yellow-200'>.Store</span>
        </h1>
      </NavLink>

      <button className='flex items-center text-white md:hidden' onClick={toggleMenu}><img src={menuOpen?Close:Option} className='w-8 h-8' alt="" /></button>
        </div>
    
      <Navbar  menuOpen={menuOpen} closeMenu={closeMenu}/>
    </header>
  );
}

export default Header;

