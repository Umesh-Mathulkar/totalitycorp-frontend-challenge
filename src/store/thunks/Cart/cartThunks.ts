// app/thunks/cartThunks.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { addToCartApi, deleteCartProductApi, fetchCartApi, updateCartProductQuantityApi } from '../../../services/cartServices';

interface AddToCartRequest {
    userId: string;
    productId: number;
    quantity: number;
}

interface FetchCartRequest {
    userId: string;
}


interface DeleteCartRequest {
    userId: string;
    productId: number;
}
interface UpdateCartProductQuantityRequest {
    userId: string;
    productId: number;
    quantity: number;
  }

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (request: AddToCartRequest) => {
        const response = await axios.post(addToCartApi, request);
        return response.data;
    }
);

export const fetchCartItems = createAsyncThunk(
    'cart/fetchCartItems',
    async (request: FetchCartRequest) => {
        try {
            const response = await axios.post(fetchCartApi, request);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);


export const deleteCart = createAsyncThunk(
    'cart/delete',
    async (request: DeleteCartRequest) => {
        try {
            const response = await axios.delete(deleteCartProductApi, {
                data: request 
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);

export const updateCartProductQuantity = createAsyncThunk(
    'cart/updateQuantity',
    async (request: UpdateCartProductQuantityRequest) => {
      try {
        const response = await axios.put(updateCartProductQuantityApi, request);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );
