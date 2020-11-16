import { combineReducers } from 'redux';
import cart from './ducks/cart';
import foodModal from './ducks/foodModal';

export default combineReducers({
  cart,
  foodModal,
});
