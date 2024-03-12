import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import CreateItemPage from "./pages/CreateItemPage";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ItemPage from "./pages/ItemPage";
import ProductContextProvider from "./context/ProductContext";
import { CartContextProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/auth" />;
  };

  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <LandingPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/create"
                element={
                  <RequireAuth>
                    <CreateItemPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/cart"
                element={
                  <RequireAuth>
                    <CartPage />
                  </RequireAuth>
                }
              />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/item/:id" element={<ItemPage />} />
            </Routes>
          </div>
          <Footer />
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
