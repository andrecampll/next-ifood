import { all, takeLatest } from 'redux-saga/effects';

function checkFoodStock() {
  console.log('adicionou');
}

export default all([takeLatest('ADD_FOOD_TO_CART', checkFoodStock)]);
