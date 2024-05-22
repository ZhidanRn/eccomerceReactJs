import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import productSlice from "./reducer/productSlice";
import cartSlice from "./reducer/cartSlice";

const rootReducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
});

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (error) {
    console.error(error);
  }
};

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;