import produce from 'immer';
import { Reducer } from 'redux';
import { ActionTypes, ICartState, IFood } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
  failedStockCheck: [],
  orders: [],
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addFoodToCartSuccess: {
        const { food, restaurant_slug, foodQuantity } = action.payload;

        const restaurantInCartIndex = draft.orders.findIndex(
          order => order.restaurant_slug === restaurant_slug,
        );

        if (restaurantInCartIndex >= 0) {
          const foodInOrder = draft.orders[
            restaurantInCartIndex
          ].items.findIndex(item => item.food.id === food.id);

          if (foodInOrder >= 0) {
            draft.orders[restaurantInCartIndex].items[
              foodInOrder
            ].quantity = foodQuantity;
          } else {
            draft.orders[restaurantInCartIndex].items.push({
              food,
              quantity: foodQuantity,
              restaurant_slug,
            });
          }
        } else {
          draft.orders.push({
            restaurant_slug,
            items: [
              {
                food,
                quantity: foodQuantity,
                restaurant_slug,
              },
            ],
          });
        }

        const foodInCartIndex = draft.items.findIndex(
          item => item.food.id === food.id,
        );

        if (foodInCartIndex >= 0) {
          draft.items[foodInCartIndex].quantity = foodQuantity;
        } else {
          draft.items.push({
            food,
            quantity: foodQuantity,
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
  foodQuantity: number,
) {
  return {
    type: ActionTypes.addFoodToCartRequest,
    payload: {
      food,
      restaurant_slug,
      foodQuantity,
    },
  };
}

export function addFoodToCartSuccess(
  food: IFood,
  restaurant_slug: string | string[],
  foodQuantity: number,
) {
  return {
    type: ActionTypes.addFoodToCartSuccess,
    payload: {
      food,
      restaurant_slug,
      foodQuantity,
    },
  };
}

export function addFoodToCartFailure(
  foodId: string,
  restaurant_slug: string | string[],
  foodQuantity: number,
) {
  return {
    type: ActionTypes.addFoodToCartFailure,
    payload: {
      foodId,
      restaurant_slug,
      foodQuantity,
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
