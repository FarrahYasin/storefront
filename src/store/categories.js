const initialState = {
  categories: [
    { name: "Electronics", displayName: "Electronics" },
    { name: "Gifts", displayName: "Gifts" },
    { name: "Accessories", displayName: "Accessories" },
  ],
  activeCategory: "Electronics",
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
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






