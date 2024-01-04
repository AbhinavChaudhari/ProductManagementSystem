// pages/ProductPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/product/ProductList';

const ProductPage = () => {
  return (
    <div className='bg-gray-200 w-full h-screen'>
      {/* <h2 className='text-center py-4 underline text-2xl font-semibold'>Product Management</h2> */}
      <div className='w-full text-end p-10'>
        <Link to="/products/add" className='py-3 px-5 bg-blue-200 rounded font-semibold'>Add Product</Link>
      </div>
      <ProductList />
    </div>
  );
};

export default ProductPage;
