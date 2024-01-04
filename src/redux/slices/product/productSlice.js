// redux/slices/productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
  },
  reducers: {
    fetchProductsSuccess: (state, action) => {
      state.list = action.payload;
    },
    deleteProductSuccess: (state, action) => {
      state.list = state.list.filter((product) => product.id !== action.payload);
    },
    addProductSuccess: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { fetchProductsSuccess, deleteProductSuccess, addProductSuccess } = productSlice.actions;
export default productSlice.reducer;
