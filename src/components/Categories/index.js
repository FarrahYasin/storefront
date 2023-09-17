import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectedCategory } from "../../store/Actions";

function Categories (props) {

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "violet",
    padding: theme.spacing(1.5)
    }));

    console.log(props.myCategories)

  return (
    <div>
      <h1>CATEGORIES:</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={20}>
          {props.myCategories.category.map((item, idx) => {
            return (
              <Grid item xs={4} key={idx}>
                <Link to="/products">
                  <Item onClick={() => props.selectedCategory(item.name)}>
                    <h3>{item.displayName}</h3>
                    <div>
                      <img width = '250px'src='https://www.byrdie.com/thmb/ow5x2uWMmrt5_nC3qtt6XTNdWMA=/400x250/filters:no_upscale():max_bytes(150000):strip_icc()/byr-best-chanel-gift-sets-tout-8dfab1e16e924bdbb3b099333a0de98a.jpg' alt="" />
                    </div>
                    <p>{item.description}</p>
                  </Item>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myCategories: state.myCategoriesReducer
});

const mapDispatchToProps = { selectedCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
