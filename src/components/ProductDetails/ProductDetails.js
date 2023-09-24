import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { connect } from "react-redux";
import { addToCart } from "../../store/carts";

function ProductDetails(props) {
  const { product, onClose, addToCart } = props;

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <Dialog open={Boolean(product)} onClose={onClose}>
      <DialogTitle sx={{ backgroundColor: "#c676d6", color: "#fff" }}>
        Product Details
      </DialogTitle>
      <DialogContent sx={{ padding: 3 }}>
        <div>
          <h2>{product.name}</h2>
          <p>Price: {product.price} -JD</p>
          <p>Category: {product.category}</p>
          <p>In Stock: {product.inStock} Pcs</p>
          <p>
          Explore our range of electronic gizmos and tools. 
          Explore our range of electronic gizmos and tools. Discover the
           newest smartphones, laptops, intelligent gadgets, and beyond
          Discover the newest smartphones, laptops, intelligent gadgets, and beyond
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={handleAddToCart}
            sx={{
              backgroundColor: "#903da0",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#c676d6",
              },
              marginRight: "4px",
            }}
          >
            ADD TO CART
          </Button>
          <Button
            variant="contained"
            onClick={onClose}
            sx={{
              backgroundColor: "#903da0",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#c676d6",
              },
            }}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const mapDispatchToProps = {
  addToCart,
};

export default connect(null, mapDispatchToProps)(ProductDetails);