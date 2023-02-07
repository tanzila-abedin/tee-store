import { createSlice } from "@reduxjs/toolkit";

// items: []
const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

// increment: (state) => {
//   state.value += 1;
// },
// decrement: (state) => {
//   state.value -= 1;
// },
