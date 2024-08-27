import React from 'react';
import { useCart } from '../context/CartContext';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (title, value) => {
    updateQuantity(title, value);
  };

  const handleRemove = (title) => {
    console.log(`Handle remove for title: ${title}`);
    removeFromCart(title);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.newPrice * item.quantity, 0);
  };

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-center lg:text-left">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="py-[200px] text-center text-3xl lg:text-8xl">Your cart is empty {`:(`}</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.title} className="flex flex-col items-center p-4 mb-4 border border-gray-200 lg:flex-row">
              <img src={item.img} alt={item.title} className="object-cover w-24 h-32 mb-4 lg:mb-0 lg:mr-4" />
              <div className="flex-grow text-center lg:text-left">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <h4 className="mb-2 text-gray-600">{item.category}</h4>
                <div className="flex items-center justify-center mb-2 lg:justify-start">
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <AiFillStar className='text-yellow-400' />
                  <span className="ml-2 text-sm">{item.reviews}</span>
                </div>
                <div className="flex items-center justify-center mb-2 lg:justify-start">
                  <span className="mr-2 text-gray-500 line-through">{item.prevPrice}</span>
                  <span className="text-xl font-bold">{item.newPrice}</span>
                </div>
                <div className="mb-2">
                  <span className="text-gray-700">Quantity: </span>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.title, parseInt(e.target.value))}
                    className="w-16 p-2 mt-2 border border-gray-300 lg:mt-0"
                  />
                </div>
                <button onClick={() => handleRemove(item.title)} className="mt-2 text-red-500 lg:mt-0">Remove</button>
              </div>
            </div>
          ))}
          <div className="mb-4 text-xl font-bold text-center lg:text-left">Total: ${getTotalPrice()}</div>
          <div className="flex justify-center lg:justify-start">
            <button onClick={() => navigate('/checkout')} className="px-4 py-2 text-white bg-black rounded hover:bg-yellow-400">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


