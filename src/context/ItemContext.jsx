import { createContext, useEffect, useReducer } from "react";
// import item_services from "../services/item_services";
import ItemReducer from "./ItemReducer";
import item_services from "../services/item_services";

export const ItemContext = createContext();

const initialState = { items: [] };

export const ItemContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ItemReducer, initialState);

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await item_services.getAllItems(); // Use the imported instance directly
      dispatch({ type: "SET_ITEMS", payload: fetchedItems });
    };

    fetchItems();
  }, []);

  // ...

  return (
    <ItemContext.Provider
      value={{
        items: state.items,
        dispatch,
        addItem: item_services.addItems,
        updateItem: item_services.updateItem,
        deleteItem: item_services.deleteItem,
        getItem: item_services.getItem,
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
