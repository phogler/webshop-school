"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/app/typings/Product";

interface CartState {
    products: Product[]; 
}

const initialState: CartState = {
    products: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addNewProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        removeExistingProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addNewProduct, removeExistingProduct } = productsSlice.actions;

export default productsSlice.reducer;
