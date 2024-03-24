export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_FROM_FIREBASE": {
      // console.log("Fetched cart items:", action.payload);
      return {
        ...state,
        shoppingCart: action.payload,
        loading: false, // Assuming a loading state is managed
        error: null,
      };
    }
    case "ADD_ITEM_TO_CART": {
      if (state.shoppingCart.length === 0) {
        return state; // Wait for cart data to be loaded before checking for duplicates
      }
      const existingItem = state.shoppingCart.find(
        (item) => item.id === action.payload.id
      );

      // Check if item already exists in the cart
      if (!existingItem) {
        console.log("Adding item to cart:", action.payload);

        return {
          ...state,
          loading: true, // Set loading state to true while interacting with Firebase
        };
      } else {
        console.log("Item already exists in cart:", action.payload.id);
        // Handle duplicate item case (optional)
        // You can choose to:
        // - Show a notification to the user
        // - Increase the quantity of the existing item (implement logic for quantity)
        return state; // Don't modify state if item already exists
      }
    }

    case "ADD_TO_CART_SUCCESS": {
      console.log("Item added to cart successfully:", action.payload);
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload], // Add the new item
        loading: false, // Reset loading state
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
    case "REMOVE_FROM_CART": {
      console.log("Removing item from cart:", action.payload);
      return {
        ...state,
        loading: true, // Set loading state to true while interacting with Firebase
      };
    }
    case "REMOVE_FROM_CART_SUCCESS": {
      console.log("Item removed from cart successfully:", action.payload); // May not be necessary
      return {
        ...state,
        loading: false, // Reset loading state
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
