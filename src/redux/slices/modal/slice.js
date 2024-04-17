import { createSlice } from "@reduxjs/toolkit";

const initialState = {
isOpen: false,
title: '',
message: ''
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalContent(state, action) {
            const { isOpn, title, message } = action.payload;
            state.isOpen = isOpn;
            state.title = title ?? ''; 
            state.message = message ??''; 
        },
},
})

export const { setModalContent } = modalSlice.actions
export default modalSlice.reducer