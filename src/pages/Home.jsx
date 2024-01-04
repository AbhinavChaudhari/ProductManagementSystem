// pages/Home.js

import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-semibold py-3 underline'>Welcome to the Product Management System</h1>
      <p className='mt-5 '>
        This is a simple application for managing products using React, Redux, and React Router.
      </p>
      <p className='mt-5 py-3 text-xl font-medium'>Explore the product management features in the navigation.</p>
	  <Link to="/products" className='mt-10 py-3 px-4 bg-orange-300 rounded-md font-semibold'>Products</Link>
    </div>
  );
};

export default Home;
