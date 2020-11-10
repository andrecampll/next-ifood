import { AxiosResponse } from 'axios';
import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { IState } from '..';
import api from '../../services/api';
import {
  addFoodToCartFailure,
  addFoodToCartRequest,
  addFoodToCartSuccess,
} from '../ducks/cart';

type CheckProductStockRequest = ReturnType<typeof addFoodToCartRequest>;

interface IStockResponse {
  id: string;
  title: string;
  description: string;
  image_url: string;
  price: string;
}

function* checkFoodStock({ payload }: CheckProductStockRequest) {
  const { food } = payload;

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
    yield put(addFoodToCartSuccess(food));
  } else {
    yield put(addFoodToCartFailure(food.id));
  }
}

export default all([takeLatest('ADD_FOOD_TO_CART_REQUEST', checkFoodStock)]);
