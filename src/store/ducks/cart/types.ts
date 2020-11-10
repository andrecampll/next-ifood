export enum ActionTypes {
  addFoodToCartRequest = 'ADD_FOOD_TO_CART_REQUEST',
  addFoodToCartSuccess = 'ADD_FOOD_TO_CART_SUCCESS',
  addFoodToCartFailure = 'ADD_FOOD_TO_CART_FAILURE',
}

export interface IFood {
  id: string;
  title: string;
  price: string;
  description: string;
  image_url: string;
}

export interface ICartItem {
  food: IFood;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: string[];
}
