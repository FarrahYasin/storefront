export function selectedCategory(name) {
  return {
    type: "SELECT",
    payload: name,
  };
}


export function addProduct(name) {
  return {
    type: "ADD",
    payload: name,
  };
}
