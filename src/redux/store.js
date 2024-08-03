import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/cartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

console.log("initial store : ", store.getState());

store.subscribe(() => {
  console.log("store change: ", store.getState());
});

export default store;
