import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { connect } from "react-redux";
import {addProduct} from "../../store/Actions";

function Products(props){
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "violet",
    padding: theme.spacing(2)
  }));

  console.log(props.myProducts.products);

  return (
    <div>
      <h1>{props.myProducts.products[0].category}</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={20}>
          {props.myProducts.products.map((item, idx) => {
            return (
              <Grid item xs={4} key={idx}>
                <Item>
                  <h3>{item.name}</h3>
                  <div>
                    <img width = '240px'src='https://www.byrdie.com/thmb/ow5x2uWMmrt5_nC3qtt6XTNdWMA=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/byr-best-chanel-gift-sets-tout-8dfab1e16e924bdbb3b099333a0de98a.jpg' alt="" />
                  </div>
                  <div>{item.price}$</div>
                  <p>{item.description}</p>
                  <button onClick={() => props.addProduct(item)}>
                    Add To Cart
                  </button>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};
const mapStateToProps = (state) => ({
  myProducts: state.myProductsReducer,
});
const mapDispatchToProps = { addProduct};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
