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
import { CartContextProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import ItemContextProvider from "./context/ItemContext";
import ItemTypesPage from "./pages/ItemTypesPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/auth" />;
  };

  return (
    <>
      <ItemContextProvider>
        <CartContextProvider>
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<LandingPage />} />
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
                    <CartPage currentUser={currentUser} />
                  </RequireAuth>
                }
              />
              <Route
                path="/checkout"
                element={
                  <RequireAuth>
                    <CheckoutPage currentUser={currentUser} />
                  </RequireAuth>
                }
              />
              <Route
                path="/order-confirmation/:orderId"
                element={
                  <RequireAuth>
                    <OrderConfirmationPage currentUser={currentUser} />
                  </RequireAuth>
                }
              />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/item/:id" element={<ItemPage />} />
              <Route path="/type/:type" element={<ItemTypesPage />} />
            </Routes>
          </div>
          <Footer />
        </CartContextProvider>
      </ItemContextProvider>
    </>
  );
}

export default App;
