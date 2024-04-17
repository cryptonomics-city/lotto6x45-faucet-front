import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAccount: null,
    isNetworkCorrect: false
};


export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserAccount(state, action) {
            state.userAccount = action.payload;
    },
    setIsNetworkCorrect(state, action) {
        state.isNetworkCorrect = action.payload;
},
},
})

export const { setUserAccount, setIsNetworkCorrect } = loginSlice.actions
export default loginSlice.reducer;