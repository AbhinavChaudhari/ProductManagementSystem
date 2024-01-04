// components/product/ProductForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions/product/productActions';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    expiryDate: '',
    costPrice: '',
    sellPrice: '',
    discountPercentage: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.category || !formData.expiryDate || !formData.sellPrice || !formData.discountPercentage) {
      alert('Please fill in all required fields');
      return;
    }

    // if required additional validation logic

    const costPrice = parseFloat(formData.costPrice) || 0;
    const sellPrice = parseFloat(formData.sellPrice) || 0;
    const discountPercentage = parseFloat(formData.discountPercentage) || 0;
    const discountedSellPrice = sellPrice - (sellPrice * discountPercentage) / 100;
    const finalPrice = discountedSellPrice; 

    // Dispatch action to add the product
    dispatch(
      addProduct({
        ...formData,
        costPrice,
        discountedSellPrice,
        finalPrice,
      })
    );

    // Reset the form after submission
    setFormData({
      name: '',
      category: '',
      description: '',
      expiryDate: '',
      costPrice: '',
      sellPrice: '',
      discountPercentage: '',
    });

    // Navigate to the ProductList page after submitting the form
    navigate('/products')
  };

  return (
    <div className='w-full h-screen max-xm:h-full bg-gray-200 flex flex-col justify-center items-center'>
    <form onSubmit={handleSubmit} className='w-full max-w-xl bg-white p-6 rounded-md shadow-md'>
      <h3 className='text-xl font-semibold py-4 text-center underline'>Add Product</h3>
      <label className='block mb-4'>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className='mt-1 p-2 w-full border rounded-md'
          required
        />
      </label>
      <label className='block mb-4'>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className='mt-1 p-2 w-full border rounded-md'
          required
        />
      </label>
      <label className='block mb-4'>
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className='mt-1 p-2 w-full border rounded-md'
        />
      </label>
      <label className='block mb-4'>
        Expiry Date:
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className='mt-1 p-2 w-full border rounded-md'
        />
      </label>
      <label className='block mb-4'>
        Cost Price:
        <input
          type="number"
          name="costPrice"
          value={formData.costPrice}
          onChange={handleChange}
          className='mt-1 p-2 w-full border rounded-md'
        />
      </label>
      <label className='block mb-4'>
        Sell Price:
        <input
          type="number"
          name="sellPrice"
          value={formData.sellPrice}
          onChange={handleChange}
          className='mt-1 p-2 w-full border rounded-md'
          required
        />
      </label>
      <label className='block mb-4'>
        Discount (%):
        <input
          type="number"
          name="discountPercentage"
          value={formData.discountPercentage}
          onChange={handleChange}
          className='mt-1 p-2 w-full border rounded-md'
          required
        />
      </label>
      <button type="submit" className='bg-blue-500 text-white p-2 rounded-md'>
        Add Product
      </button>
    </form>
  </div>
  
  );
};

export default ProductForm;
