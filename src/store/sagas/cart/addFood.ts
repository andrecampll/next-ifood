import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '../..';
import api from '../../../services/api';
import {
  addFoodToCartFailure,
  addFoodToCartRequest,
  addFoodToCartSuccess,
} from '../../ducks/cart';
import { ActionTypes } from '../../ducks/cart/types';

type CheckFoodStockRequest = ReturnType<typeof addFoodToCartRequest>;

interface IStockResponse {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: string;
}

function* checkFoodStock({ payload }: CheckFoodStockRequest) {
  const { food, restaurant_slug, foodQuantity } = payload;

  const currentQuantity: number = yield select((state: IState) => {
    return (
      state.cart.items.find(item => item.food.id === food.id)?.quantity ?? 0
    );
  });

  const availableStockResponse: AxiosResponse<IStockResponse> = yield call(
    api.get,
    `foods/${food.id}`,
  );

  if (availableStockResponse) {
    yield put(addFoodToCartSuccess(food, restaurant_slug, foodQuantity));
  } else {
    yield put(addFoodToCartFailure(food.id, restaurant_slug, foodQuantity));
  }
}

export default all([
  takeLatest(ActionTypes.addFoodToCartRequest, checkFoodStock),
]);
