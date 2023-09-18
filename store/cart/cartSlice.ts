"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/typings/Product";

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const productExistInCart = state.cart.find((item) => item.id === action.payload.id);
            if (productExistInCart) return;
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
