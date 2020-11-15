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
        const { food, restaurant_slug } = action.payload;

        const foodInCartIndex = draft.items.findIndex(
          item => item.food.id === food.id,
        );

        if (foodInCartIndex >= 0) {
          draft.items[foodInCartIndex].quantity++;
        } else {
          draft.items.push({
            food,
            quantity: 1,
            restaurant_slug,
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
          const foodIndex = draft.items.findIndex(
            item => item.food.id === action.payload.foodId,
          );

          if (foodIndex >= 0) {
            draft.items.splice(foodIndex, 1);
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

export function addFoodToCartRequest(
  food: IFood,
  restaurant_slug: string | string[],
) {
  return {
    type: ActionTypes.addFoodToCartRequest,
    payload: {
      food,
      restaurant_slug,
    },
  };
}

export function addFoodToCartSuccess(
  food: IFood,
  restaurant_slug: string | string[],
) {
  return {
    type: ActionTypes.addFoodToCartSuccess,
    payload: {
      food,
      restaurant_slug,
    },
  };
}

export function addFoodToCartFailure(
  foodId: string,
  restaurant_slug: string | string[],
) {
  return {
    type: ActionTypes.addFoodToCartFailure,
    payload: {
      foodId,
      restaurant_slug,
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
