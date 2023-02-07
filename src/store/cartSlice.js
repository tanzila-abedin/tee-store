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
      const itemsInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemsInCart) {
        itemsInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
