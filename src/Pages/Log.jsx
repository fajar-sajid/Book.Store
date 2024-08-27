import React from 'react';

const Log = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 mx-auto text-white bg-black rounded-lg shadow-lg animate-fade-in">
        <h2 className="mb-6 text-3xl font-bold text-center text-yellow-400">Login</h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 text-white transition-all duration-300 ease-in-out bg-black border-b-2 border-yellow-400 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 text-white transition-all duration-300 ease-in-out bg-black border-b-2 border-yellow-400 focus:outline-none focus:border-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 font-bold text-black transition-all duration-300 ease-in-out bg-yellow-400 rounded hover:bg-yellow-500"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center text-gray-500">
          Don't have an account? <a href="#" className="text-yellow-400 transition-all duration-300 ease-in-out hover:text-yellow-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Log;
