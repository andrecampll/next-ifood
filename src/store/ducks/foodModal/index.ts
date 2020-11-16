import produce from 'immer';
import { Reducer } from 'redux';
import { ActionTypes, IModalState } from './types';

const INITIAL_STATE: IModalState = {
  toggled: false,
  foodId: '',
};

const foodModal: Reducer<IModalState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.toggleModal: {
        const { foodId } = action.payload;

        draft.toggled = !draft.toggled;
        draft.foodId = foodId;

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default foodModal;

export function toggleModal(foodId?: string) {
  return {
    type: ActionTypes.toggleModal,
    payload: {
      foodId,
    },
  };
}
