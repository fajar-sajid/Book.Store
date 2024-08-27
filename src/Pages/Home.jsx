// import React from 'react';

// import OpenBook from '../assets/ticket.png'; 

// import Good from '../assets/goodgirl.png'
// import G from '../assets/guide.png'
// import P from '../assets/pride.png'
// import H from '../assets/maid.png'
// import Q from '../assets/quote.png'
// import F from '../assets/frame.png'
// import M from '../assets/moon.jpeg'
// import S from '../assets/sun.jpeg'
// import P1 from '../assets/pride1.png'

// import St from '../assets/stars.jpeg'

// const Home = () => {
//   return (
//    <div>

//     <div className='grid grid-cols-1 grid-rows-1 '
   
    
    
//      >

//       <div className='relative'>
// <img src={St} className='pl-[300px] pt-[70px] pb-[70px] ' alt="" />
// <div className='absolute top-[195px] left-[380px] right-[380px]'>
//   <p className='text-5xl font-bold text-center'>"Unlock a Universe of Stories 
//   – Find Your Perfect Book Now!"</p>
//   <a href="http://localhost:5173/products" className='relative inline-block'><img src={OpenBook} className=' ml-[150px] h-[150px] hover:h-[160px] w-[250px] hover:w-[255px] relative' alt="" />
//         <p className='absolute inset-0 flex items-center justify-center text-xl font-bold text-black  bg-opacity-50 rounded h-[20px] w-[100px] top-[60px]  left-[220px]'>Buy Now</p>
//         </a>
// </div>
//       </div>
 
//     </div>



// <div className='text-white bg-black'>
// <h1 className='pt-[50px]  mb-[50px] text-5xl font-bold text-center'><u>New Release Books</u></h1>

// <div className='grid grid-cols-5 pb-[50px]'>
//   <div>
//     <img src="https://readings.com.pk/images/books/9780571364640.jpg" className='ml-[50px] h-[280px] hover:h-[300px]' alt="" />
//   <a href="http://localhost:5173/singleproduct/No%20One%20Prayed%20Over%20Their%20Graves"><b><p className='text-center'>No One Prayed Over </p>
//   <p className='text-center'>Their Graves</p></b> </a> 
//   </div>

// <div>
//   <img src="https://readings.com.pk/images/books/9789699903649.jpg" className='h-[280px] hover:h-[300px] ml-[50px]' alt="" />
//   <a href="http://localhost:5173/singleproduct/The%20Metamorphosis"><b><p className='text-center'>The Metamorphosis</p></b></a>
  
// </div>

// <div>
//   <img src="https://readings.com.pk/images/books/9789699903038.jpg" className='ml-[50px] hover:h-[300px] h-[280px]' alt="" />
//   <a href="http://localhost:5173/singleproduct/The%20Art%20of%20War">
//   <b><p className='text-center'>The Art of War</p></b>
//   </a>
// </div>

// <div>
//   <img src="https://readings.com.pk/images/books/9781481497619.jpg" className='ml-[50px] h-[280px] hover:h-[300px]' alt="" />
//   <a href="http://localhost:5173/singleproduct/Sorcery%20Of%20Thorns"><b><p className='text-center'>Sorcery Of Thorns</p></b></a>
// </div>

// <div>
//   <img src="https://readings.com.pk/images/books/9789699903915.jpg" className='ml-[50px] h-[280px] hover:h-[300px]' alt="" />
//   <a href="http://localhost:5173/singleproduct/Notes%20From%20Underground">
//   <p className='text-center'><b>Notes From Underground
//   </b></p>
//   </a>
// </div>

// </div>



// </div>
// <h1 className='pb-5 text-5xl font-bold text-center text-white bg-black'><u>WE HAVE</u></h1>

// <p className='pt-4 text-5xl text-center text-white bg-red-900'>Murder Mysteries</p>
// <div>
// <div className='grid grid-cols-3 bg-red-900 pb-11'>

//  <div><img src={Good} className='h-[450px] pt-[0px] pl-[90px] ' alt="" /></div> 

//   <div>
//   <img src="https://readings.com.pk/images/books/9781405293181.jpg" className=' pt-[25px] pl-[100px]' alt="" />
//   <a href="http://localhost:5173/singleproduct/A%20Good%20Girl's%20Guide%20To%20Murder">  <button  className='p-2 text-3xl text-white bg-black rounded-2xl ml-[140px] mt-4 hover:bg-white hover:text-black'>Buy Now</button>
//   </a>
// </div>

// <div>
//   <img src={G} className='pt-[40px] h-[350px]' alt="" />
// </div>
// </div>


// </div>

// <div className='bg-yellow-700'>
//   <p className='pt-4 text-5xl text-center text-white'>Classics</p>
//   <div className='grid grid-cols-3'>
//     <div>
//       <img src={P} className='h-[480px] pl-[0px] w-[900px]' alt="" />
//     </div>
//     <dir>
//       <img src="https://readings.com.pk/images/books/9789699903069.jpg" className='pl-[90px] pt-9' alt="" />
//       <a href="http://localhost:5173/singleproduct/Pride%20And%20Prejudice">
//       <button className='p-2 text-3xl text-white bg-black rounded-2xl ml-[140px] mt-4 hover:bg-white hover:text-black'>Buy Now</button>
//       </a>
//     </dir>

//     <div>
//       <img src={P1} className='h-[400px]' alt="" />
//     </div>
//   </div>
// </div>

// <div className='bg-lime-800'>

// <p className='pt-4 text-5xl text-center text-white'>Fictions</p>

//  <div className='grid grid-cols-3 pt-7'>

//    <div>
//      <img src={Q} className='h-[400px] pl-[90px]' alt="" />
//    </div>

//    <div>
//      <img src="https://readings.com.pk/images/books/9781406358117.jpg" className='pl-[90px]' alt="" />
//      <a href="http://localhost:5173/singleproduct/Chain%20Of%20Thorns:%20The%20Last%20Hours%20(Book%203)">
//      <button className='p-2  text-3xl text-white bg-black rounded-2xl ml-[130px] mt-6 mb-9 hover:bg-white hover:text-black '>Buy Now</button>
//      </a>
//    </div>
//    <div>
//      <img src={F} className='h-[350px]' alt="" />
//    </div>

//  </div>
// </div>

// <div className='bg-neutral-800'>
// <p className='pt-4 text-5xl text-center text-white'>Non-Fictions</p>
//   <div className='grid grid-cols-3'>

//     <div>
//       <img src={M} className='pl-[90px] mt-[70px] h-[380px]' alt="" />
//     </div>

//     <div>
//       <img src="https://readings.com.pk/images/books/9789696401728.jpg" className='pl-[90px] pt-[60px] h-[450px]' alt="" />
//       <a href="http://localhost:5173/singleproduct/Secret's%20of%20Divine%20Love">
//       <button className='p-2  text-3xl text-white bg-black rounded-2xl ml-[150px] mb-10 mt-4 hover:bg-white hover:text-black'>Buy Now</button>
//       </a>
    
//     </div>

//     <div>
//       <img src={S} className=' pl-[90px] mt-[60px] h-[380px]' alt="" />
//     </div>

//   </div>
// </div>

// <div className='bg-cyan-900'>
// <p className='pt-4 text-5xl text-center text-white'>Thrillers</p>
//   <div className='grid grid-cols-3'>

//   <div>
//       <img src="https://readings.com.pk/images/books/9780349132600.jpg" className='pl-[140px] pt-[60px] h-[400px]' alt="" />
//       <a href="http://localhost:5173/singleproduct/The%20Housemaid%20Is%20Watching:%20The%20Housemaid%20Series%20(Book%202)">
//       <button className='p-2  text-3xl text-white bg-black rounded-2xl ml-[180px] mt-4 hover:bg-white hover:text-black'>Buy Now</button>
//       </a>
    
//     </div>
//     <div>
//       <img src={H} className='pl-[px] h-[500px]' alt="" />
//     </div>

//     <div>
//       <img src="https://readings.com.pk/images/books/9781464223310.jpg" className='pl-[130px] pt-[60px] h-[400px]' alt="" />
//       <a href="http://localhost:5173/singleproduct/The%20Housemaid%20Is%20Watching:%20The%20Housemaid%20Series%20(Book%203)">
//       <button className='p-2  text-3xl text-white bg-black rounded-2xl ml-[180px] mt-4 hover:bg-white hover:text-black'>Buy Now</button>
//       </a>
    
//     </div>


//   </div>
// </div>
//    </div>
//   );
// }

// export default Home;



import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb';
import { TfiHeadphone } from 'react-icons/tfi';
import { FaHandshake } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Home = () => {


  return (
    <div>
      <div id='content' className='relative flex flex-col w-full h-auto md:flex-row'>
        <div id='left' className='w-full md:w-[35%] pt-[130px] pb-[160px] px-[20px] md:pl-[50px] md:pr-[20px] h-full'>
          <h5 className='text-sm font-extralight'>Buy Amazing Books</h5>
          <h1 className='text-3xl font-bold md:text-5xl'>A World of Books Awaits</h1>
          <p className='text-sm pt-[30px] pb-[47px] pr-[35px]'>
            Welcome to Book.Store, your one-stop shop for all things books. From bestsellers to hidden gems, we have
            something for every reader. Whether you're looking for a quick read or a deep dive, you'll find it here.
            Start exploring our collection today!
          </p>
          <button className='bg-black text-white text-[17px] px-[20px] py-[6px] rounded-2xl'>Buy now</button>
        </div>

        <div id='right' className='overflow-x-auto h-full w-full md:w-[65%] whitespace-nowrap relative sm:py-2 lg:py-[40px] md:py-[40px] xl:py-[40px] px-[20px] md:px-[40px]'>
          <div className='elem inline-block h-[500px] mr-[20px] w-[300px] md:w-[380px] border-solid border-2 border-gray-50 relative rounded-md shadow-xl'>
            <img src="https://readings.com.pk/images/books/9781804943182.jpg" className='h-[350px] absolute object-cover top-[9%] left-[10%] md:left-[20%] right-[10%] md:right-[20%]' alt="" />
            <h4 className='absolute bottom-[8%] right-0 text-black bg-yellow-400 py-[7px] px-[20px] rounded-md text-lg'>fiction</h4>
            <h5 className='absolute bottom-0 right-0 bg-black py-[7px] px-[20px] rounded-md text-lg text-white'>Lev Grossman</h5>
          </div>
          <div className='elem inline-block h-[500px] mr-[20px] w-[300px] md:w-[380px] border-solid border-2 border-gray-50 relative rounded-md shadow-xl'>
            <img src="https://readings.com.pk/images/books/9781035408214.jpg" className='h-[350px] absolute object-cover top-[9%] left-[10%] md:left-[20%] right-[10%] md:right-[20%]' alt="" />
            <h4 className='absolute bottom-[8%] right-0 text-black bg-yellow-400 py-[7px] px-[20px] rounded-md text-lg'>crime</h4>
            <h5 className='absolute bottom-0 right-0 bg-black py-[7px] px-[20px] rounded-md text-lg text-white'>Steve Cavanagh</h5>
          </div>
          <div className='elem inline-block h-[500px] mr-[20px] w-[300px] md:w-[380px] border-solid border-2 border-gray-50 relative rounded-md shadow-xl'>
            <img src="https://readings.com.pk/images/books/9789699903847.jpg" className='h-[350px] absolute object-cover top-[9%] left-[10%] md:left-[20%] right-[10%] md:right-[20%]' alt="" />
            <h4 className='absolute bottom-[8%] right-0 text-black bg-yellow-400 py-[7px] px-[20px] rounded-md text-lg'>classic</h4>
            <h5 className='absolute bottom-0 right-0 bg-black py-[7px] px-[20px] rounded-md text-lg text-white'>Marcus</h5>
          </div>
          <div className='elem inline-block h-[500px] mr-[20px] w-[300px] md:w-[380px] border-solid border-2 border-gray-50 relative rounded-md shadow-xl'>
            <img src="https://readings.com.pk/images/books/9789699903007.jpg" className='h-[350px] absolute object-cover top-[9%] left-[10%] md:left-[20%] right-[10%] md:right-[20%]' alt="" />
            <h4 className='absolute bottom-[8%] right-0 text-black bg-yellow-400 py-[7px] px-[20px] rounded-md text-lg'>fiction</h4>
            <h5 className='absolute bottom-0 right-0 bg-black py-[7px] px-[20px] rounded-md text-lg text-white'>F.Scott Fitzgerald</h5>
          </div>
          <div className='elem inline-block h-[500px] mr-[20px] w-[300px] md:w-[380px] border-solid border-2 border-gray-50 relative rounded-md shadow-xl'>
            <img src="https://readings.com.pk/images/books/9789699903915.jpg" className='h-[350px] absolute object-cover top-[9%] left-[10%] md:left-[20%] right-[10%] md:right-[20%]' alt="" />
            <h4 className='absolute bottom-[8%] right-0 text-black bg-yellow-400 py-[7px] px-[20px] rounded-md text-lg'>classic</h4>
            <h5 className='absolute bottom-0 right-0 bg-black py-[7px] px-[20px] rounded-md text-lg text-white'>Fyodor Dostovesky</h5>
          </div>
        </div>
      </div>


<div>


<div className='services  min-h-[60vh] w-full'>
  <div className='container m-auto max-w-[1270px]'>
    <div className='heading mb-[40px] w-full'>
      <h1 className='m-0 text-4xl font-bold text-center p-[40px]'>Services</h1>
    </div>
    <div className='w-full content'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px]'>
        <div className='box p-[15px]'>
          <div className='inner bg-black text-white p-[30px] text-center flex flex-col items-center justify-center h-full'>
            <TbTruckDelivery className='text-4xl mb-[10px]'/>
            <p className='text-xl'>Fast Delivery</p>    
          </div>
        </div>

        <div className='box p-[15px]'>
          <div className='inner bg-black text-white p-[30px] text-center flex flex-col items-center justify-center h-full'>
            <TfiHeadphone className='text-4xl mb-[10px]'/>
            <p className='text-xl'>24/7 Services</p>  
          </div>
        </div>

        <div className='box p-[15px]'>
          <div className='inner bg-black text-white p-[30px] text-center flex flex-col items-center justify-center h-full'>
            <FaHandshake className='text-4xl mb-[10px]'/>
            <p className='text-xl'>Best Deal</p>
          </div>
        </div>

        <div className='box p-[15px]'>
          <div className='inner bg-black text-white p-[30px] text-center flex flex-col items-center justify-center h-full'>
            <FaLock className='text-4xl mb-[10px]'/>
            <p className='text-xl'>Secure Payment</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




</div>
        



<div className='flex justify-center items-center min-h-[100vh] '>
  <div className='square relative w-[600px] h-[600px] flex justify-center items-center'>
    <span className='absolute top-0 left-0 w-full h-full rounded-[38%_62%_63%_37%_/_41%_44%_56%_59%] border-2 border-yellow-400 transition-all duration-[6s] ease-linear animate-[rotate_12s_linear_infinite] hover:bg-[rgba(248,224,8,0.3)]'></span>
    <span className='absolute top-0 left-0 w-full h-full rounded-[38%_62%_63%_37%_/_41%_44%_56%_59%] border-2 border-yellow-400 transition-all duration-[8s] ease-linear animate-[rotate_10s_linear_infinite] hover:bg-[rgba(248,224,8,0.3)]'></span>
    <span className='absolute top-0 left-0 w-full h-full rounded-[38%_62%_63%_37%_/_41%_44%_56%_59%] border-2 border-yellow-400 transition-all duration-[10s] ease-linear animate-[rotate_8s_linear_infinite] hover:bg-[rgba(248,224,8,0.3)]'></span>
    <div className=' relative flex flex-col z-[10] text-black text-center'>
      <h2 className='mb-4 text-4xl font-bold'>About Us</h2>
      <p className='mb-4 pl-[50px] pr-[50px]'>
        At Book.Store, we believe in the transformative power of books. Our curated collection offers something for every reader, from timeless classics to contemporary bestsellers. With a passion for literature and exceptional service, we're dedicated to helping you find your next great read.
      </p>
      <button className='text-yellow-500 border-solid border-l-2 border-black ml-[40%] rounded-2xl bg-black mr-[40%] pl-[3px] pr-[10px] pt-[5px] p-[5px] border-b-2 border-t-2 border-r-2'><a href="http://localhost:5173/about">Explore More</a></button>
      
    </div>
  </div>
</div>



<div className='mt-[20px]'>
  <h1 className='text-4xl font-bold text-center mt-[10px]'>Featured</h1>
  <div className='card-area p-11'>
    <div className='grid grid-cols-2 xl:grid-cols-6 lg:grid-cols-6 md-grid-cols-4 sm:grid-cols-2 wrapper gap-7 '>
   


      <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9780141185132.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>The Plaque</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/The%20Plague">Shop now</a></button>
        </div>
      </div>
    </div>

    
    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781405297042.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>Imagine Me</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/Imagine%20Me:%20The%20Shatter%20Me%20Trilogy%20(Book%204)">Shop now</a></button>
        </div>
      </div>
    </div>

    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9780241703731.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>The Outsider</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/The%20Outsider">Shop now</a></button>
        </div>
      </div>
    </div>

    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9789699903847.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>
          Meditations</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/Meditations">Shop now</a></button>
        </div>
      </div>
    </div>

    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9789696401438.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>The Stranger</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/The%20Stranger">Shop now</a></button>
        </div>
      </div>
    </div>

    
    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781035408214.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>Witness 8</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href='http://localhost:5173/singleproduct/Witness%208'>Shop now</a></button>
        </div>
      </div>
    </div>


    </div>

  </div>
</div>
    





<div className='mt-[20px]'>
  <h1 className='text-4xl font-bold text-center mt-[10px]'> New Arrivals</h1>
  <div className='card-area p-11'>
    <div className='grid grid-cols-2 wrapper gap-7 xl:grid-cols-6 lg:grid-cols-6 md-grid-cols-4 sm:grid-cols-2 '>
   


      <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781728296210.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>The Teacher</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/The%20Teacher">Shop now</a></button>
        </div>
      </div>
    </div>

    
    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781665938969.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>Mysteries Of Thorn Manor</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/Mysteries%20Of%20Thorn%20Manor:%20Sorcery%20Of%20Thorns%20(Book%201.5)">Shop now</a></button>
        </div>
      </div>
    </div>

    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781405293181.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'> Good Girl's Guide To Murder</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/A%20Good%20Girl's%20Guide%20To%20Murder">Shop now</a></button>
        </div>
      </div>
    </div>

    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9789699903847.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>
          Meditations</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/Meditations">Shop now</a></button>
        </div>
      </div>
    </div>

    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9789696401728.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>
          
Secret's of Divine Lov</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/Secret's%20of%20Divine%20Love">Shop now</a></button>
        </div>
      </div>
    </div>

    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9789696401438.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>The Stranger</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/The%20Stranger">Shop now</a></button>
        </div>
      </div>
    </div>

    
    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781035023431.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>Before We Say Goodbye</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href='http://localhost:5173/singleproduct/%20Before%20We%20Say%20Goodbye:%20Before%20The%20Coffee%20Gets%20Cold%20(Book%204)'>Shop now</a></button>
        </div>
      </div>
    </div>


    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781035032402.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>Before The Coffee Gets Cold</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/%20Before%20The%20Coffee%20Gets%20Cold%20:%20Before%20The%20Coffee%20Gets%20Cold%20Series%20(Book%203)">Shop now</a></button>
        </div>
      </div>
    </div>

    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781405297042.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>Imagine Me</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/Imagine%20Me:%20The%20Shatter%20Me%20Trilogy%20(Book%204)">Shop now</a></button>
        </div>
      </div>
    </div>

    
    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9789699903038.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>The Art Of War</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href='http://localhost:5173/singleproduct/The%20Art%20of%20War'>Shop now</a></button>
        </div>
      </div>
    </div>

       
    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781405297042.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>Imagine Me</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href="http://localhost:5173/singleproduct/Imagine%20Me:%20The%20Shatter%20Me%20Trilogy%20(Book%204)">Shop now</a></button>
        </div>
      </div>
    </div>

    <div className="box-area w-[180px] grid grid-flow-col  gap-[40px] mt-[50px] relative overflow-hidden shadow-lg ">   
      <div className="box ">
        <img src="https://readings.com.pk/images/books/9781035408214.jpg" className=" transition duration-[0.5s]" alt="" />
        <div className="w-full h-0  hover:h-[100%] overlay bg-opacity-55 bg-gray-400 border-black  absolute border-[10px] left-0 bottom-0 overflow-hidden flex align-middle justify-center flex-col text-center transition-all duration-[0.5s]">
          <h1 className='text-2xl font-bold'>Witness 8</h1>
          <p className='text-yellow-500'>New Arrival</p>
      <button className='text-yellow-500 w-[100px] border-solid border-l-2 border-black ml-[20%] rounded-2xl bg-black mr-[50px] pl-[5px] pr-[5px] pt-[2px] text-sm p-[2px] border-b-2 border-t-2 border-r-2'> <a href='http://localhost:5173/singleproduct/Witness%208'>Shop now</a></button>
        </div>
      </div>
    </div>



    </div>

  </div>
</div>
    




    </div>
  );
}




export default Home;
