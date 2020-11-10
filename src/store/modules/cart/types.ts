export interface IFood {
  id: number;
  title: string;
  price: number;
}

export interface ICartItem {
  product: IFood;
  quantity: number;
}

export interface ICartState {
  items: ICartItem[];
}
