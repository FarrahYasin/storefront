import Categories from "./components/Categories/index";
import Footer from "./components/Footer/index";
import Header from "./components/Header/index";
import Products from "./components/Products/index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Categories />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
