import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import { connect, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/carts";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./Products.css";
import { fetchProducts } from "../../store/products";

function Products(props) {
  const style = { width: "200px", height: "200px" };
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

//   useEffect(() => {
//     props.fetchProducts();
//   }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (activeCategory) {
      dispatch(fetchProducts(selectedProduct));
    // }
  }, [selectedProduct, dispatch]);


  return (
    <div className="Products_container">
      <section className="section-cart">
        <Button color="inherit">Cart({props.cart.totalCartItems})</Button>
        {props.cart.cartItems.map((cartItem) => (
          <div key={cartItem.name}>
            <strong>{cartItem.name}:</strong> {cartItem.inCart} pc(s)
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                props.removeFromCart(cartItem);
              }}
            >
              Delete
            </Button>
          </div>
        ))}
      </section>

      <div className="category-main">
        <h1>{props.categories.activeCategory.toUpperCase()}</h1>
      </div>

      <section className="section1">
        <div className="product-list">
          {props.products.map((product) =>
            product.category === props.categories.activeCategory ? (
              <Card key={product.name} className="product-card">
                <CardHeader title={product.name} subheader={product.category} />

        
                <CardHeader
                  title={"Price  " + product.price + " -JD"}
                  subheader={
                    <span className="stock-info">
                      In Stock {product.inStock} Pcs
                    </span>
                  }
                  className="product-price"
                />
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#903da0",
                    color: "#fff",
                    marginBottom: "8px",
                  }}
                  className="add-to-cart-button"
                  onClick={() => {
                    props.addToCart(product);
                  }}
                >
                  ADD TO CART
                </Button>

                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#c676d6",
                    color: "#fff",
                  }}
                  className="view-details-button"
                  onClick={() => {
                    handleViewDetails(product);
                  }}
                >
                  Product Details
                </Button>
              </Card>
            ) : null
          )}
        </div>
      </section>
      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
    cart: state.cart,
  };
};

const mapDispatchToProps = { addToCart, removeFromCart ,fetchProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
// export default connect(mapStateToProps, { addToCart, removeFromCart, fetchProducts })(Products);









//before fix the error
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import { experimentalStyled as styled } from "@mui/material/styles";
// import { connect } from "react-redux";
// import {addProduct} from "../../store/Actions";

// function Products(props){
//   const Item = styled(Paper)(({ theme }) => ({
//     textAlign: "center",
//     backgroundColor: theme.palette.mode === "dark" ? "#fff" : "violet",
//     padding: theme.spacing(2)
//   }));

//   console.log(props.myProducts.products);

//   return (
//     <div>
//       <h1>{props.myProducts.products[0].category}</h1>
//       <Box sx={{ flexGrow: 1 }}>
//         <Grid container spacing={20}>
//           {props.myProducts.products.map((item, idx) => {
//             return (
//               <Grid item xs={4} key={idx}>
//                 <Item>
//                   <h3>{item.name}</h3>
//                   <div>
//                     <img width = '240px'src='https://www.byrdie.com/thmb/ow5x2uWMmrt5_nC3qtt6XTNdWMA=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/byr-best-chanel-gift-sets-tout-8dfab1e16e924bdbb3b099333a0de98a.jpg' alt="" />
//                   </div>
//                   <div>{item.price}$</div>
//                   <p>{item.description}</p>
//                   <button onClick={() => props.addProduct(item)}>
//                     Add To Cart
//                   </button>
//                 </Item>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Box>
//     </div>
//   );
// };
// const mapStateToProps = (state) => ({
//   myProducts: state.myProductsReducer,
// });
// const mapDispatchToProps = { addProduct};
// export default connect(mapStateToProps, mapDispatchToProps)(Products);
