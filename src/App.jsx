import "./App.css";
import Category from "./components/category/Category";
import Featured from "./components/featured/Featured";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <Featured />
      <Product />
      <Testimonials />
    </>
  );
}

export default App;
