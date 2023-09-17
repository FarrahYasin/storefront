let initialState = {
    category: [
      {
        name: "electronics",
        displayName: "Electronics",
        description: "Explore our range of electronic gizmos and tools. Discover the newest smartphones, laptops, intelligent gadgets, and beyond.",
      },
      {
        name: "gifts",
        displayName: "Gifts",
        description: "Explore thoughtful gifts for your loved ones. Whether it's a birthday, anniversary, or holiday, we have you covered.",
      },
      {
        name: "accessories",
        displayName: "Accessories",
        description: "Explore the perfect accessories to complement your style. Discover trendy jewelry, handbags, and more.",
      },
    ]
    ,active: "",
  
  };
  export default function productsReducer (state = initialState, action){
    const { type, payload } = action;
    switch (type) {
      case "SELECT":
        return {
          category: state.category,
          active: `${payload}`,
        };
      default:
        return state;
    }
  };
  
// State should contain a list of categories as well as the active category.
// Each category should have a normalized name, display name, and a description.
// Create an action that will trigger the reducer to change the active category.
// Update the active category in the reducer when this action is dispatched.