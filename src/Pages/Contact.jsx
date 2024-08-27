import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4 md:p-8'>
      <h1 className='mb-6 text-4xl font-bold text-center md:text-6xl'>Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871284.4346833769!2d73.01842728194482!3d31.456672473239408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1723540905816!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='mb-8'
      ></iframe>
      <div className='flex flex-col items-center w-full md:w-1/2'>
        <form action="https://formspree.io/f/manwjvzp" method='POST' className='flex flex-col items-center w-full max-w-md space-y-5'>
          <input
            type="text"
            placeholder='Username'
            name='username'
            required
            autoComplete='off'
            className='w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
          />
          <input
            type="email"
            placeholder='Email'
            name='email'
            required
            autoComplete='off'
            className='w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
          />
          <textarea
            name="message"
            required
            autoComplete='off'
            placeholder='Enter your message'
            className='w-full p-2 border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
          ></textarea>
          <button
            type="submit"
            className='w-[100px] p-2 text-lg text-white bg-green-500 rounded-md hover:bg-green-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-green-500 mt-4'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


