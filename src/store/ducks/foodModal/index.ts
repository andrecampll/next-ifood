import produce from 'immer';
import { Reducer } from 'redux';
import { ActionTypes, IModalState } from './types';

const INITIAL_STATE: IModalState = {
  toggled: false,
  foodId: '',
  food_quantity: 0,
};

const foodModal: Reducer<IModalState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.toggleModal: {
        const { foodId, food_quantity } = action.payload;

        draft.toggled = !draft.toggled;
        draft.foodId = foodId;
        draft.food_quantity = food_quantity;

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default foodModal;

export function toggleModal(foodId?: string, food_quantity?: number) {
  return {
    type: ActionTypes.toggleModal,
    payload: {
      foodId,
      food_quantity,
    },
  };
}
