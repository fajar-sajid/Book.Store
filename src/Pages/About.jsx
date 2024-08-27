import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen text-black bg-white">

      <section className="py-16 text-white bg-yellow-500">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-4xl font-bold transition-transform duration-300 transform hover:scale-105">Welcome to Book.Store</h1>
          <p className="mb-8 text-xl transition-opacity duration-300 opacity-75 hover:opacity-100">Welcome to Book.Store, your ultimate destination for discovering and indulging in the world of books. At Book.Store, we offer a diverse selection of titles, from beloved classics and contemporary hits to rare finds and thought-provoking reads. Our inviting atmosphere and passionate staff create the perfect environment for book enthusiasts and casual readers alike. Whether you're searching for your next great read or a special gift, Book.Store is dedicated to making your literary journey enjoyable and memorable.</p>
          <button className="px-4 py-2 text-yellow-500 transition-colors duration-300 bg-black rounded hover:bg-gray-800">Explore Now</button>
        </div>
      </section>

      <section className="py-16 ">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold transition-transform duration-300 transform hover:scale-105">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="p-4 transition-transform duration-300 transform bg-white rounded-lg shadow-lg w-60 hover:scale-105">
              <img src="https://i.pinimg.com/564x/ab/b6/da/abb6dabbb16393b35f230a0a0ca93a1c.jpg" alt="Team Member" className="object-cover w-full h-40 rounded-t-lg"/>
              <h3 className="mt-4 text-xl font-semibold">Member</h3>
              <p className="text-gray-700">Founder</p>
            </div>
            <div className="p-4 transition-transform duration-300 transform bg-white rounded-lg shadow-lg w-60 hover:scale-105">
              <img src="https://i.pinimg.com/564x/14/ec/80/14ec80b1b9b5d87d11373fafa78e781e.jpg" alt="Team Member" className="object-cover w-full h-40 rounded-t-lg"/>
              <h3 className="mt-4 text-xl font-semibold">Member</h3>
              <p className="text-gray-700">Chief Editor</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-8 text-3xl font-bold transition-transform duration-300 transform hover:scale-105">Our Promise</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 text-white transition-transform duration-300 transform bg-yellow-500 rounded-lg shadow-lg hover:scale-105">
              <h3 className="mb-4 text-2xl font-semibold">Quality Books</h3>
              <p>We ensure all our books are of the highest quality and authenticity.</p>
            </div>
            <div className="p-8 text-yellow-500 transition-transform duration-300 transform bg-black rounded-lg shadow-lg hover:scale-105">
              <h3 className="mb-4 text-2xl font-semibold">Free Delivery</h3>
              <p>Enjoy free delivery on all orders over $50, right to your doorstep.</p>
            </div>
            <div className="p-8 text-white transition-transform duration-300 transform bg-yellow-500 rounded-lg shadow-lg hover:scale-105">
              <h3 className="mb-4 text-2xl font-semibold">Excellent Service</h3>
              <p>Our customer service team is here to assist you with any inquiries.</p>
            </div>
          </div>
        </div>
      </section>

   
      
    </div>
  );
};

export default AboutUs;
