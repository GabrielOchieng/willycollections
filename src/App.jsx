import "./App.css";
import Category from "./components/category/Category";
import Featured from "./components/featured/Featured";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <Featured />
      <Testimonials />
    </>
  );
}

export default App;
