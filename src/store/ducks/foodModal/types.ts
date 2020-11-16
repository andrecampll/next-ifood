export enum ActionTypes {
  toggleModal = 'TOGGLE_MODAL',
}

export interface IModalState {
  toggled: boolean;
  foodId: string;
  food_quantity: number;
}
