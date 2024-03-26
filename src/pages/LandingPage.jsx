import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Category from "../components/category/Category";
import Featured from "../components/featured/Featured";
import Product from "../components/product/Product";
import Testimonials from "../components/testimonials/Testimonials";
import Choose from "../components/choose/Choose";
import Footer from "../components/footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Category />
      <Featured />
      <Product />
      <Testimonials />
      <Choose />
    </>
  );
};

export default LandingPage;
