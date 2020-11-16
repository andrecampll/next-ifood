import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { ICartState } from './ducks/cart/types';
import { IModalState } from './ducks/foodModal/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface IState {
  cart: ICartState;
  foodModal: IModalState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export default store;
