// app/thunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios

import { IProductState } from '../../../components/interfaces/states/ProductState';



export const fetchProducts = createAsyncThunk<IProductState[]>(
  'products/fetchProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    } catch (error) {
      // You can handle errors here, e.g., dispatch an action to update an error state
      throw error;
    }
  }
);
