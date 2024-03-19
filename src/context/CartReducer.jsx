// export const CartReducer = (state, action) => {
//   // Ensure state has default values:
//   const { shoppingCart = [], totalPrice = 0, totalQty = 0 } = state;

//   switch (action.type) {
//     case "ADD_TO_CART": {
//       const existingItemIndex = shoppingCart.findIndex(
//         (item) => item.itemID === action.item.itemID
//       );

//       // If item already exists, update its quantity:
//       if (existingItemIndex !== -1) {
//         const updatedQty = shoppingCart[existingItemIndex].qty + 1;
//         const updatedPrice = totalPrice + Number(action.item.price); // Ensure price is a number

//         return {
//           ...state,
//           shoppingCart: shoppingCart.map((item, index) =>
//             index === existingItemIndex ? { ...item, qty: updatedQty } : item
//           ),
//           totalPrice: updatedPrice,
//           totalQty: state.totalQty + 1,
//         };
//       } else {
//         // If item is new, add it to the cart:
//         const updatedCart = [...shoppingCart, { ...action.item, qty: 1 }];
//         return {
//           ...state,
//           shoppingCart: updatedCart,
//           totalPrice: totalPrice + Number(action.item.price),
//           totalQty: totalQty + 1,
//         };
//       }
//     }

//     // Handle other actions as needed...
//     default:
//       return state;
//   }
// };

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CART_SUCCESS": {
      return {
        ...state,
        shoppingCart: action.payload,
        loading: false, // Assuming a loading state is managed
        error: null,
      };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        loading: true, // Set loading state to true while interacting with Firebase
      };
    }
    case "ADD_TO_CART_SUCCESS": {
      // No need to modify state here as cart items are managed by Firebase
      return {
        ...state,
        loading: false, // Reset loading state
      };
    }
    case "ADD_TO_CART_FAILURE": {
      return {
        ...state,
        loading: false, // Reset loading state
        error: action.error.message,
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        loading: true, // Set loading state to true while interacting with Firebase
      };
    }
    case "REMOVE_FROM_CART_SUCCESS": {
      // No need to modify state here as cart items are managed by Firebase
      return {
        ...state,
        loading: false, // Reset loading state
      };
    }
    case "REMOVE_FROM_CART_FAILURE": {
      return {
        ...state,
        loading: false, // Reset loading state
        error: action.error.message,
      };
    }
    default:
      return state;
  }
};

const initialState = {
  shoppingCart: [], // Initialize with an empty cart
  loading: false, // Add a loading state for asynchronous operations
  error: null, // Add an error state for potential errors
};
