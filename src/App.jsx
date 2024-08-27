import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import ErrorPage from './Pages/ErrorPage';
import Header from './Components/Header';
import Footer from './Pages/Footer';
import Checkout from './Pages/Checkout';
import Log from './Pages/Log';
import PrivacyPolicy from './Pages/PrivacyPolicy';

const App = () => {
  return (
    <div className=''>
    <CartProvider >
      <Router >
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/singleproduct/:id' element={<SingleProduct />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Log />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
    </div>
  );
}
export default App;