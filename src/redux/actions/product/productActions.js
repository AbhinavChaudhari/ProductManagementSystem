// redux/actions/productActions.js

import { fetchProductsSuccess, deleteProductSuccess, addProductSuccess } from '../../slices/product/productSlice';
import sampleProducts from '../../../utils/sampleProductData';

export const fetchProducts = () => async (dispatch, getState) => {
  //we can API call to fetch products

  const { products } = getState(); 
  if (products.list.length > 0) {
    return;
  }

  dispatch(fetchProductsSuccess(sampleProducts));
};

export const deleteProduct = (productId) => (dispatch) => {
  //we can API call to delete products

  dispatch(deleteProductSuccess(productId));
};


export const addProduct = (newProduct) => (dispatch) => {
  // API call to addProduct

  // we can add validation logic here before dispatching the action

  dispatch(addProductSuccess(newProduct));
};