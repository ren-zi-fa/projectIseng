import * as toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");
const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const addNotif = createAction("ADD_TO_NOTIF");
const notifReducer = createReducer([], (builder) => {
  builder.addCase("ADD_TO_NOTIF", (state, action) => {
    state.push(action.payload);
  });
});

const store = configureStore({
  reducer: {
    notif: notifReducer,
    cart: cartReducer,
  },
});
console.log("initial store : ", store.getState());
store.subscribe(() => {
  console.log("store change: ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 2 }));
store.dispatch(addToCart({ id: 2, qty: 4 }));
store.dispatch(addNotif({ type: "message", message: "apa kabar ?" }));
