export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_FROM_FIREBASE": {
      return {
        ...state,
        shoppingCart: action.payload,
        loading: false,
        error: null,
      };
    }
    case "ADD_ITEM_TO_CART": {
      return {
        ...state,
        loading: true, // Set loading state immediately
      };
    }

    case "ADD_TO_CART_SUCCESS": {
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
        loading: false,
      };
    }

    case "ADD_TO_CART_FAILURE": {
      console.error("Error adding item to cart:", action.error.message);
      return {
        ...state,
        loading: false, // Reset loading state
        error: action.error.message,
      };
    }

    case "REMOVE_FROM_CART":
      async (state, action) => {
        const itemId = action.payload;
        console.log(itemId);
        console.log(action.payload);
        try {
          await cartDataService.deleteCartItem(userId, itemId);
          // Dispatch successful deletion action (e.g., "REMOVE_FROM_CART_SUCCESS") with itemId
          return {
            ...state,
            shoppingCart: state.shoppingCart.filter(
              (item) => item.id !== itemId
            ),
          };
        } catch (error) {
          // Handle deletion error (e.g., dispatch "REMOVE_FROM_CART_FAILURE")
          console.error("Error removing item from cart:", error);
          return { ...state }; // Or return a state with an error flag
        }
      };

    case "REMOVE_FROM_CART_SUCCESS": {
      const itemId = action.payload;
      return {
        ...state,
        shoppingCart: state.shoppingCart.filter((item) => item.id !== itemId),
      };
    }

    case "REMOVE_FROM_CART_FAILURE": {
      console.error("Error removing item from cart:", action.error.message);
      return {
        ...state,
        loading: false, // Reset loading state
        error: action.error.message,
      };
    }

    case "UPDATE_TOTALS": {
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
        totalQuantity: action.payload.totalQuantity,
      };
    }

    default:
      return state;
  }
};

const initialState = {
  shoppingCart: [], // Initialize with an empty cart
  totalPrice: 0,
  totalQuantity: 0,
  loading: false, // Add a loading state for asynchronous operations
  error: null, // Add an error state for potential errors
};
