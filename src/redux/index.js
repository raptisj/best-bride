import { combineReducers } from "redux";
import products from "./slices/products";

const allReducers = combineReducers({
  products,
});

export default allReducers;
