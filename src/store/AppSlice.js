import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    name: "Saurabh",
    email: "saurabh@gmail.com",
    phoneNumber: "9987654321",
  },
  walletBalance: 0,
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
    addWalletBalance: (state, action) => {
      state.walletBalance += parseFloat(action.payload);
    },
  },
});

export const { setUserData, addWalletBalance } = appSlice.actions;

export default appSlice.reducer;
