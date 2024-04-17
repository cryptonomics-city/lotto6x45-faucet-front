import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    checkboxes: Array(45).fill(false),
    errString: "",
    isDisabled: true
};


export const checkboxesSlice = createSlice({
    name: 'checkboxes',
    initialState,
    reducers: {
        setErrString(state, action) {
            state.errString = action.payload;
        },
    },
})

export const { setErrString } = checkboxesSlice.actions
export default checkboxesSlice.reducer;