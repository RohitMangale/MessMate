import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

// Initial state of the cart
const initialState = {
  cart: [],
};

// Reducer function to manage cart actions
const orderReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART": {
        const existingItem = state.cart.find((item) => item.id === action.payload.id);
        if (existingItem) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          };
        }
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
  
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
  
      case "UPDATE_QUANTITY":
        return {
          ...state,
          cart: state.cart
            .map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: action.payload.quantity }
                : item
            )
            .filter((item) => item.quantity >= 0), // Remove items with quantity 0
        };
  
      case "CLEAR_CART":
        return {
          ...state,
          cart: [],
        };
  
      default:
        return state;
    }
  };
  

// Create the context
const OrderContext = createContext();

// Create a provider component
export const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast.success("Added to cart") // Pass full item object
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toast.success("Removed from cart") // Pass full item object

  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const calculateTotalPrice = () => {
    return state.cart.reduce(
      (total, item) => total + item.quantity * item.item_price,
      0
    );
  };

  return (
    <OrderContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Custom hook to use the OrderContext
export const useOrder = () => {
  return useContext(OrderContext);
};
