import produce from 'immer';
import { Reducer } from 'redux';
import { ActionTypes, ICartState, IFood } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addFoodToCartSuccess: {
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

      case ActionTypes.addFoodToCartFailure: {
        draft.failedStockCheck.push(action.payload.foodId);

        break;
      }

      case ActionTypes.removeFoodFromCartSuccess: {
        return produce(state, draft => {
          const productIndex = draft.items.findIndex(
            item => item.food.id === action.payload.foodId,
          );

          if (productIndex >= 0) {
            draft.items.splice(productIndex, 1);
          }
        });
      }

      default: {
        return draft;
      }
    }
  });
};

export default cart;

export function addFoodToCartRequest(food: IFood) {
  return {
    type: ActionTypes.addFoodToCartRequest,
    payload: {
      food,
    },
  };
}

export function addFoodToCartSuccess(food: IFood) {
  return {
    type: ActionTypes.addFoodToCartSuccess,
    payload: {
      food,
    },
  };
}

export function addFoodToCartFailure(foodId: string) {
  return {
    type: ActionTypes.addFoodToCartFailure,
    payload: {
      foodId,
    },
  };
}

export function removeFoodFromCartSuccess(foodId: string) {
  return {
    type: ActionTypes.removeFoodFromCartSuccess,
    payload: {
      foodId,
    },
  };
}

export function updateQuantity(foodId: string, amount: number) {
  return {
    type: ActionTypes.updateFoodQuantitySuccess,
    payload: {
      foodId,
      amount,
    },
  };
}
