import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../db/data.js'; 
import { AiFillStar } from 'react-icons/ai';
import { useCart } from '../context/CartContext'; 

const SingleProduct = () => {
  const {id}=useParams();
  console.log("Product ID from URL:", id); 

  // Find product by title, which is used as the ID in the URL
  const product = data.find((item)=>item.title===id);
  console.log("Product found:", product); 

  if (!product) {
    return <div className='p-[400px] text-white'>Data not found</div>;
  }

  const {img,title,star,reviews,prevPrice,newPrice,company,category,pages}=product;
  const {addToCart}=useCart(); //addToCart function from the CartContext

  const handleAddToCart = () => {
    const productDetails = {img,title,star,reviews,newPrice,prevPrice,category};
    addToCart(productDetails);
  };

  return (
    <div className="flex flex-col items-center mt-12 mb-12 lg:flex-row lg:items-start lg:space-x-8">
      <div className="w-full px-4 lg:w-1/2 lg:px-0">
        <img src={img} alt={title} className="object-cover w-auto xl:ml-[30%] lg:ml-[30%] sm:ml-[20%] ml-[20%]  h-auto" />
      </div>
      <div className="w-full px-4 mt-8 lg:w-1/2 lg:px-0 lg:mt-0">
        <h1 className="mb-4 text-3xl font-bold lg:text-5xl">{title}</h1>
        <div className="flex items-center mb-3">
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
          <AiFillStar className="text-yellow-400" />
        </div>
        <p className="mb-6 text-lg text-gray-700 lg:text-xl">{reviews}</p>
        <div className="p-5 border-2 border-gray-100 rounded-lg shadow">
          <p className="text-lg lg:text-xl"><b>Previous Price:</b> {prevPrice}</p>
          <p className="text-lg lg:text-xl"><b>New Price:</b> $ {newPrice}</p>
          <p className="text-lg lg:text-xl"><b>Author:</b> {company}</p>
          <p className="text-lg lg:text-xl"><b>Category:</b> {category}</p>
          <p className="text-lg lg:text-xl"><b>Pages:</b> {pages}</p>
          <button onClick={handleAddToCart} className="w-full px-4 py-2 mt-4 text-lg text-white bg-black lg:w-auto rounded-xl hover:bg-yellow-300 hover:text-black">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;


