const ItemReducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: action.payload };
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    // Add cases for update and delete functionalities if needed (optional)
    default:
      return state;
  }
};

export default ItemReducer;
