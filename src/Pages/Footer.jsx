import React from 'react';
import Logo from '../assets/open-book.png';
import Call from '../assets/call.png';
import Insta from '../assets/insta.png';
import Fb from '../assets/fb.png';
import T from '../assets/twitter.png';

const Footer = () => {
  return (
    <div className="text-white bg-black">
      <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center justify-center md:justify-start">
          <img src={Logo} className="w-12 h-12" alt="Book.Store Logo" />
          <h1 className="ml-2 text-3xl font-bold">
            Book<span className="text-yellow-500">.Store</span>
          </h1>
        </div>

        <div className="text-center md:text-left">
          <h1 className="pt-4 text-xl">Book.Store</h1>
          <p className="pt-3">
            <u>
              <a href="/about">About Us</a>
            </u>
          </p>
          <p>
            <u>
              <a href="/contact">Contact Us</a>
            </u>
          </p>
        </div>

        <div className="text-center md:text-left">
          <h1 className="pt-4 text-xl">Books</h1>
          <p className="pt-3">
            <u>
              <a href="/products">All Books</a>
            </u>
          </p>
        </div>

        <div className="text-center md:text-left">
          <h1 className="pt-4 text-xl">Social Media</h1>
          <div className="flex items-center justify-center pt-3 md:justify-start">
            <img src={Call} alt="Call" className="w-7 h-7" />
            <p className="pl-2">XXXX-XXXXXXX</p>
          </div>

          <div className="flex items-center justify-center pt-3 md:justify-start">
            <img src={Insta} className="w-7 h-7" alt="Instagram" />
            <p className="pl-2">
              <a href="#">book.store</a>
            </p>
          </div>

          <div className="flex items-center justify-center pt-3 md:justify-start">
            <img src={Fb} className="w-7 h-7" alt="Facebook" />
            <p className="pl-2">
              <a href="#">book.store</a>
            </p>
          </div>

          <div className="flex items-center justify-center pt-3 md:justify-start">
            <img src={T} className="w-7 h-7" alt="Twitter" />
            <p className="pl-2">
              <a href="#">book.store</a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 border-t-2 border-white border-solid"></div>

      <div className="flex justify-center mt-8 space-x-4">
        <img src={T} className="w-7 h-7" alt="Twitter" />
        <img src={Fb} className="w-7 h-7" alt="Facebook" />
        <img src={Insta} className="w-7 h-7" alt="Instagram" />
        <img src={Call} className="w-7 h-7" alt="Call" />
      </div>

      <p className="pt-4 text-center">&copy; 2024 Book.Store. All rights reserved.</p>
    </div>
  );
};

export default Footer;


