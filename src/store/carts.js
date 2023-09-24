const initialState = {
  cartItems: [],
  totalCartItems: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.name === payload.name
      );

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].inCart += 1;

        return {
          ...state,
          cartItems: updatedCartItems,
          totalCartItems: state.totalCartItems + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, payload],
          totalCartItems: state.totalCartItems + 1,
        };
      }

    case "REMOVE_FROM_CART":
      const existingItem = state.cartItems.find(
        (item) => item.name === payload.name
      );

      if (existingItem && existingItem.inCart > 1) {
        const updatedCartItems = state.cartItems.map((item) => {
          if (item.name === payload.name) {
            return { ...item, inCart: item.inCart - 1 };
          }
          return item;
        });

        return {
          ...state,
          cartItems: updatedCartItems,
          totalCartItems: state.totalCartItems - 1,
        };
      } else {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.name !== payload.name
        );

        return {
          ...state,
          cartItems: updatedCartItems,
          totalCartItems: state.totalCartItems - 1,
        };
      }

    default:
      return state;
  }
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};

export default cartReducer;
