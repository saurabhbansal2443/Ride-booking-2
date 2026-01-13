import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    name: "Saurabh",
    email: "saurabh@gmail.com",
    phoneNumber: "9987654321",
  },
};

export const appSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = { ...state.userData, ...action.payload };
    },
  },
});

export const { setUserData } = appSlice.actions;

export default appSlice.reducer;
