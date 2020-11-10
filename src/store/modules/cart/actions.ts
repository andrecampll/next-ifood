import { IFood } from './types';

export function addFoodToCartRequest(food: IFood) {
  return {
    type: 'ADD_FOOD_TO_CART_REQUEST',
    payload: {
      food,
    },
  };
}

export function addFoodToCartSuccess(food: IFood) {
  return {
    type: 'ADD_FOOD_TO_CART_SUCCESS',
    payload: {
      food,
    },
  };
}

export function addFoodToCartFailure(foodId: string) {
  return {
    type: 'ADD_FOOD_TO_CART_FAILURE',
    payload: {
      foodId,
    },
  };
}
