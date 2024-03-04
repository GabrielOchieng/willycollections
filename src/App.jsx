import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AuthPage from "./pages/AuthPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const currentUser = true;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/auth" />;
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <LandingPage />
            </RequireAuth>
          }
        />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
