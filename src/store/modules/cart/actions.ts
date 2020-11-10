import { IFood } from './types';

export function addFoodToCart(food: IFood) {
  return {
    type: 'ADD_FOOD_TO_CART',
    payload: {
      food,
    },
  };
}
