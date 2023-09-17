import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import myCategoriesReducer from "./categories";
import myProductsReducer from "./products";

let reducers = combineReducers({
  myCategoriesReducer: myCategoriesReducer,
  myProductsReducer: myProductsReducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
