// actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataCall } from '../../services/product.service';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const products = await fetchDataCall();
    return products;
  } catch (error) {
    throw error;
  }
});
