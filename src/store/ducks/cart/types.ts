export enum ActionTypes {
  addFoodToCartRequest = 'ADD_FOOD_TO_CART_REQUEST',
  addFoodToCartSuccess = 'ADD_FOOD_TO_CART_SUCCESS',
  addFoodToCartFailure = 'ADD_FOOD_TO_CART_FAILURE',
  removeFoodFromCartSuccess = 'REMOVE_FOOD_FROM_CART_SUCCESS',
  updateFoodQuantitySuccess = 'UPDATE_FOOD_QUANTITY_SUCCESS',
}

export interface IFood {
  id: string;
  title: string;
  price: number;
  description: string;
  image_url: string;
  default_quantity?: number;
}

export interface ICartItem {
  food: IFood;
  quantity: number;
  restaurant_slug: string;
  subtotal?: string;
  subtotal_number?: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: string[];
}
