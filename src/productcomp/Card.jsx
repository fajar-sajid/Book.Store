import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 

export default function Card({ img, title, star, reviews, newPrice, prevPrice, category }) {
  const { addToCart } = useCart(); // Access the addToCart function from the CartContext

  const handleAddToCart = () => {
    const product = { img, title, star, reviews, newPrice, prevPrice, category };
    addToCart(product);
  };

  return (
    <div className="p-4 m-4 border border-gray-100 shadow-lg cursor-pointer sm:flex sm:flex-col">
      <div className="flex items-center justify-center mb-4">
        <img src={img} className="object-cover w-44 h-60" alt="Book" />
      </div>
      <div>
        <h3 className="text-xl font-bold sm:text-lg">{title}</h3>
        <h3 className="mb-2 text-gray-600 sm:mb-3">{category}</h3>
        <section className="flex items-center mb-2 sm:mb-3">
          {[...Array(4)].map((_, i) => (
            <AiFillStar key={i} className='text-yellow-400' />
          ))}
          <span className="ml-2 text-sm">{reviews}</span>
        </section>
        <section className="flex items-center">
          <div className="mr-4 price">
            <del className="text-gray-500">{prevPrice}</del> 
            <span className="text-lg font-semibold text-black">{newPrice}</span>
          </div>
          <button 
            onClick={handleAddToCart} 
            className="justify-end px-2 py-1 text-sm text-white bg-black rounded hover:bg-yellow-400 sm:ml-auto"
          >
            Add to Cart
          </button>
          <Link 
            to={`/singleproduct/${title}`} 
            className="ml-4 text-blue-500 hover:text-yellow-400 sm:ml-2 sm:text-sm"
          >
            View Details
          </Link>
        </section>
      </div>
    </div>
  );
}



