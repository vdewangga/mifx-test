import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  cartItem: {}
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem: (state, action) => {
      const { payload } = action;
      const currentState = current(state)
      const existItemInCart = currentState.cartItem[payload];
      if (existItemInCart) {
        state.cartItem[payload] += 1;
      } else {
        state.cartItem = {
          ...currentState.cartItem,
          [payload]: 1
        };
      }
    },
    buyCartItem: (state, _action) => {
      state.cartItem = {}
    }
  }
})

export const { setCartItem, buyCartItem } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;