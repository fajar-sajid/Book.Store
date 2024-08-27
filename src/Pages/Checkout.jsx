import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { AiFillStar } from 'react-icons/ai';

const Checkout = () => {
  const { cart } = useCart(); // Access cart from CartContext
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && address) {
      setOrderConfirmed(true);
    } else {
      alert('Please fill in all fields');
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.newPrice * item.quantity, 0);
  };

  if (orderConfirmed) {
    return <div className="p-8 text-2xl text-center md:text-4xl lg:text-8xl">Your order has been confirmed! Thank you for your purchase.</div>;
  }

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold text-center md:text-left">Checkout</h1>

      <div className="mb-4">
        <h2 className="text-xl font-bold text-center md:text-left">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center">Your cart is empty</p>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-4 mb-4 border border-gray-200 md:flex-row">
                <img src={item.img} alt={item.title} className="object-cover w-24 h-32 mb-4 md:mb-0 md:mr-4" />
                <div className="flex-grow text-center md:text-left">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <h4 className="mb-2 text-gray-600">{item.category}</h4>
                  <div className="flex items-center justify-center mb-2 md:justify-start">
                    <AiFillStar className="text-yellow-400" />
                    <AiFillStar className="text-yellow-400" />
                    <AiFillStar className="text-yellow-400" />
                    <AiFillStar className="text-yellow-400" />
                    <span className="ml-2 text-sm">{item.reviews}</span>
                  </div>
                  <div className="flex items-center justify-center mb-2 md:justify-start">
                    <span className="mr-2 text-gray-500 line-through">{item.prevPrice}</span>
                    <span className="text-xl font-bold">{item.newPrice}</span>
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-700">Quantity: {item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-xl font-bold text-center md:text-left">Total: ${getTotalPrice()}</div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-bold">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block mb-2 text-sm font-bold">Phone</label>
          <input
            type="tel"
            id="phone"
            placeholder="XXXX-XXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-2 border border-gray-300"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block mb-2 text-sm font-bold">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border border-gray-300"
            rows="4"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="payment-method" className="block mb-2 text-sm font-bold">Payment Method</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2 border border-gray-300"
          >
            <option value="COD">Cash on Delivery (COD)</option>
            <option value="Card">Card Payment</option>
          </select>
        </div>

        <div className="flex justify-center md:justify-start">
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;


