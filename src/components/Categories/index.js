import React, { useState,useEffect } from "react";
import { connect , useDispatch} from "react-redux";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { changeActiveCategory ,fetchCategories } from "../../store/categories";

function Categories(props) {
  const [activeTab, setActiveTab] = useState(0); 

  const tabStyle = {
    fontSize: "20px",
    color: "#fff",
  };
  
  const appBarStyle = {
    height: "60px",
    justifyContent: "center",
    backgroundColor: "#903da0",
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  return (
    <section>
          {/* <h5>{props.categories.activeCategory.toUpperCase()}</h5> */}
          
      <AppBar position="static" style={appBarStyle} >

        <Tabs value={activeTab}>
          {props.categories.categories.map((category, index) => {
              return (
                  <Tab
                  
                  label={category.name}
                  key={category.name}
                  onClick={() => {
                      props.changeActiveCategory(category.name)     

                  setActiveTab(index); 
                }}
                style={tabStyle}
              />
            );
          })}
        </Tabs>
      </AppBar>
    </section>
  );
}

const mapStateToProps = (state) => {
  // return { categories: state.categories};
  return{ categories: state.categories};
};

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);












//before fix the error

// import React from "react";
// import { connect } from "react-redux";
// import AppBar from "@mui/material/AppBar";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import { changeActiveCategory } from "../../store/categories";

// function Categories(props) {

//     const tabStyle = {
//         fontSize: "20px",
//         color: "#fff",
//     };
//   const appBarStyle = {
//     height: "60px",
//     justifyContent: "center",
//     backgroundColor: "#903da0",
//   };


//   return (
//     <section>
//       <AppBar position="static" style={appBarStyle}>
//         <Tabs>
//           {props.categories.categories.map((category) => {
//             return (
//               <Tab
//                 label={category.displayName}
//                 key={category.name}
//                 onClick={() => props.changeActiveCategory(category.name)}
//                 style={tabStyle}
//               />
//             );
//           })}
//         </Tabs>
//       </AppBar>
//     </section>
//   );
// }

// const mapStateToProps = (state) => {
//   return { categories: state.categories };
// };

// const mapDispatchToProps = { changeActiveCategory };

// export default connect(mapStateToProps, mapDispatchToProps)(Categories);
