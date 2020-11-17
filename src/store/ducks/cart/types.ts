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
}

export interface ICartItem {
  food: IFood;
  quantity: number;
  restaurant_slug: string;
  subtotal?: string;
  subtotal_number?: number;
}

export interface IOrder {
  restaurant_slug: string;
  items: ICartItem[];
  subtotal?: string;
  subtotal_number?: number;
}

export interface ICartState {
  items: ICartItem[];
  failedStockCheck: string[];
  orders: IOrder[];
}
