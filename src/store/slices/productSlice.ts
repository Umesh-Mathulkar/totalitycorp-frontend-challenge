// app/slices/productSlice.ts
import { createSlice } from '@reduxjs/toolkit';

import { IProductState } from '../../components/interfaces/states/ProductState';
import { fetchProducts } from '../thunks/product/productThunks';

const initialState: IProductState[] = []; 

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      
      return action.payload; 
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      // Handle error if needed
      // You might want to update an error state property in your state
    });
  },
});

export default productSlice.reducer;
