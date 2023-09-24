
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

export default function Header(props) {
  const style = {
    fontSize: "xx-large",
    color: "#fff",
    height: "60px",
    backgroundColor: "#c676d6",
  };

  return (
    <>
      <AppBar style={style} position="static">
        <Toolbar>
          <h3>FARAH STORE</h3>
        </Toolbar>
      </AppBar>
    </>
  );
}
    


