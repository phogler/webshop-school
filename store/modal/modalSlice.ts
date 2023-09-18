"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
    productModalIsActive: boolean;
    loginModalIsActive: boolean;
}

const initialState: ModalState = {
    productModalIsActive: false,
    loginModalIsActive: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleProductModal: (state) => {
            state.productModalIsActive = !state.productModalIsActive;
        },
        closeProductModal: (state) => {
            state.productModalIsActive = false;
        },
    },
});

export const { toggleProductModal, closeProductModal } = modalSlice.actions;
export default modalSlice.reducer;
