import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { CardHeader } from "@mui/material";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../store/carts";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./Products.css";

function Products(props) {
  const style = { width: "200px", height: "200px" };
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

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

                <img
                  className="product-image"
                  src={product.image}
                  style={style}
                  alt="images"
                />

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

const mapDispatchToProps = { addToCart, removeFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);











