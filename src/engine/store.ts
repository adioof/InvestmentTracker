import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import effects from './effects';
import {mainReducer} from '../Screens/Main/Main.reducers';
import MainEffects from '../Screens/Main/Main.effects';

const sagaMiddleware = createSagaMiddleware();

export const getStore = (): any => {
  const _store = createStore(reducers({
    main: mainReducer,
  }), applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(effects([
    ...MainEffects,
  ]));
  return _store;
};
