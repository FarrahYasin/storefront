let initialState = {
  products: [
    {
      id: 1,
      category: "electronics",
      name: "Smartphone",
      description: "The latest smartphone with advanced features.",
      price: 499.99,
      inventoryCount: 50,
    },
    {
      id: 2,
      category: "electronics",
      name: "Laptop",
      description: "Powerful laptop for work and entertainment.",
      price: 999.99,
      inventoryCount: 25,
    },
    {
      id: 3,
      category: "electronics",
      name: "Smartphone",
      description: "The latest smartphone with advanced features.",
      price: 499.99,
      inventoryCount: 50,
    },
    {
      id: 4,
      category: "electronics",
      name: "Laptop",
      description: "Powerful laptop for work and entertainment.",
      price: 999.99,
      inventoryCount: 25,
    },
    {
      id: 10,
      category: "accessories",
      name: "Necklace",
      description: "Elegant necklace to enhance your look.",
      price: 29.99,
      inventoryCount: 30,
    },
    {
      id: 11,
      category: "accessories",
      name: "Necklace",
      description: "Elegant necklace to enhance your look.",
      price: 29.99,
      inventoryCount: 30,
    },
    {
      id: 12,
      category: "accessories",
      name: "Necklace",
      description: "Elegant necklace to enhance your look.",
      price: 29.99,
      inventoryCount: 30,
    },
    {
      id: 13,
      category: "gifts",
      name: "Gift Basket",
      description: "A thoughtful assortment of gifts for special occasions.",
      price: 79.99,
      inventoryCount: 20,
    },
    {
      id: 14,
      category: "gifts",
      name: "Gift Basket",
      description: "A thoughtful assortment of gifts for special occasions.",
      price: 79.99,
      inventoryCount: 20,
    },
    {
      id: 15,
      category: "gifts",
      name: "Gift Basket",
      description: "A thoughtful assortment of gifts for special occasions.",
      price: 79.99,
      inventoryCount: 20,
    },
    {
      id: 16,
      category: "gifts",
      name: "Gift Basket",
      description: "A thoughtful assortment of gifts for special occasions.",
      price: 79.99,
      inventoryCount: 20,
    },
  ],
};
export default function categoriesReducer(state = initialState, action)  {
  const { type, payload } = action;
  switch (type) {
    case "SELECT":
      const selectedProducts = state.products.filter(
        (item) => payload === item.category
      );
      return { products: selectedProducts };
 
    default:
      return state;
  }
};


// // State should be a list of all products.
// // Each product should have a category association, name, description, price, inventory count.
// // Create an action that will trigger when the active category is changed.
// // HINT: Multiple reducers can respond to the same actions.
// // Create a reducer that will filter the products list based on the active category.
