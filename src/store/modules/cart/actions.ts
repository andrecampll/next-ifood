import { ActionTypes, IFood } from './types';

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
