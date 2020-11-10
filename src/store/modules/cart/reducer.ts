import { Reducer } from 'redux';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_FOOD_TO_CART': {
      const { food } = action.payload;

      return {
        ...state,
        items: [
          ...state.items,
          {
            food,
            quantity: 1,
          },
        ],
      };
    }

    default: {
      return state;
    }
  }
};

export default cart;
