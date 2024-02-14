import "./App.css";
import Category from "./components/category/Category";
import Featured from "./components/featured/Featured";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Category />
      <Featured />
    </>
  );
}

export default App;
