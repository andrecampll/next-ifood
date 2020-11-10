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
