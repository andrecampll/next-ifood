import produce from 'immer';
import { Reducer } from 'redux';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_FOOD_TO_CART': {
        const { food } = action.payload;

        const foodInCartIndex = draft.items.findIndex(
          item => item.food.id === food.id,
        );

        if (foodInCartIndex >= 0) {
          draft.items[foodInCartIndex].quantity++;
        } else {
          draft.items.push({
            food,
            quantity: 1,
          });
        }

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;
