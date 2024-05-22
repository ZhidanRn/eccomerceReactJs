import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    removeFromCart: (state, action) => {
      state.items.splice(action.payload.index, 1);
    },
    addToCart: (state, action) => {
      const { id, quantity } = action.payload;
      console.log(action.payload);
      const existingItemIndex = state.items.findIndex((item) => item.id === id);

      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        state.items[existingItemIndex].quantity += quantity;
      } else {
        // Add new item to cart
        state.items.push(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const { index } = action.payload;
      state.items[index].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const { index } = action.payload;
      state.items[index].quantity -= 1;
    },
  },
});

export const { removeFromCart, addToCart , increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;