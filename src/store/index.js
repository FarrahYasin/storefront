// import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import categories from "./categories";
import products from "./products";
import cart from "./carts";

const rootReducer = combineReducers({ categories, products, cart });

function store() {
  return createStore(rootReducer,applyMiddleware(thunk))
}

export default store();

