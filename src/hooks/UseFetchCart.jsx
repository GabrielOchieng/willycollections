import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useFetchCart = () => {
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const currentUserId = currentUser.uid;

  const loadCart = async (currentUserId) => {
    setIsLoading(true);
    try {
      const fetchedCart = await loadCartFromFirebase(currentUserId); // Fetch cart
      setCart(fetchedCart);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCart(currentUserId);
  }, [currentUserId]); // Dependency array for potential re-fetching

  return { cart, isLoading, error, loadCart };
};

export default useFetchCart;
