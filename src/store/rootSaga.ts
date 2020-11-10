import { all } from 'redux-saga/effects';

import cart from './sagas/cart';

export default function* rootSaga() {
  return yield all([cart]);
}
