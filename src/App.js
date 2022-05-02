import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NewColection from "./components/NewColection/NewColection";
import Checkout from './components/Checkout/Checkout';
import Signin from './components/SignIn/Signin';
import Signup from './components/SignUp/Signup';
import Blog from './components/Blog/Blog';
import { Route, Routes } from 'react-router';
import Shop from './components/Shop/Shop';
import ProductDetails from './components/ProductDetails/ProductDetails';
import SingleBlog from './components/SingleBlog/SingleBlog';
import RegularPage from './components/RegularPage/RegularPage';
import Contact from './components/Contact/Contact';
import Auth from './components/Auth';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Auth />
      <Header />
      <Routes>
        <Route path='/' element={<NewColection />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='blog' element={<Blog />} />
        <Route path="shop" element={<Shop />} />
        <Route path="productdetails" element={<ProductDetails />} />
        <Route path='singleblog' element={<SingleBlog />} />
        <Route path='regularpage' element={<RegularPage />} />
        <Route path='contact' element={<Contact />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
