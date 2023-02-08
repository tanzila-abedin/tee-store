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
        (item) => item.product.id === action.payload.id
      );
      if (itemsInCart) {
        itemsInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increment: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrement: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeProduct: (state, action) => {
      const removeProduct = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = removeProduct;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
