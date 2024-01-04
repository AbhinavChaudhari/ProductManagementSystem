// redux/slices/index.js

import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product/productSlice';

const rootReducer = combineReducers({
  products: productReducer,
  // Add other reducers here
});

export default rootReducer;
