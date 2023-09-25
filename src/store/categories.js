import axios from "axios";

const initialState = {
  categories: [
    // { name: "Electronics", displayName: "Electronics" },
    // { name: "Gifts", displayName: "Gifts" },
    // { name: "Accessories", displayName: "Accessories" },
  ],
  // activeCategory: "Electronics",
  activeCategory: "",
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "activeCat":
      return {
        ...state,
        activeCategory: payload,
      };
      case "FETCH":
        const categoriesArray = payload.results;
        return {
          ...state,
          categories: categoriesArray,
        };
    case "change":
      return { categories: state.categories, activeCategory: payload };
    default:
      return state;
  } 
};

export const changeActiveCategory = (category) => {
  return {
    type: "change",
    payload: category,
  };
};

export default rootReducer;



export const fetchCategories = () => {
  return async (dispatch) => {
  try {
  const response = await axios.get(
    "https://api-js401.herokuapp.com/api/v1/categories"
  );
  if (response.status === 200) {
    dispatch({
      type: 'FETCH',
      payload: response.data,
    });
  } else {
    console.error("Error fetching categories: ", response.statusText);
  }
} catch (error) {
  console.error("Error fetching categories:", error);
}
  };
};



