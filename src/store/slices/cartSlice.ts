// app/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCartItems } from '../thunks/Cart/cartThunks';

interface CartItem {
    userId: string;
    productId: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // ... other reducers if needed
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});

export default cartSlice.reducer;   
