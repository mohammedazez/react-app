// Import Action
import { INCREMENT, DECREMENT, TOTALHARGA } from "../Action/cart.action";

const initialState = {
  cart: 0,
  totalBelanja: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        cart: state.cart + 1,
        totalBelanja: state.totalBelanja + action.item.price,
      };
    case DECREMENT:
      return {
        ...state,
        cart: state.cart - 1,
        totalBelanja: state.totalBelanja - action.item.price,
      };
    case TOTALHARGA:
      return {
        ...state,
        totalBelanja: state.totalBelanja + action.item.price,
      };
    default:
      return state;
  }
};

export default cart;
