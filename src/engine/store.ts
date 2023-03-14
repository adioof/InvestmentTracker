import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {mainReducer} from '../Screens/Main/Main.reducers';
import MainEffects from '../Screens/Main/Main.effects';
import {loginReducer} from '../Screens/Login/Login.reducers';
import LoginEffects from '../Screens/Login/Login.effects';
import {all} from 'redux-saga/effects';
import {IReducersMaps} from './types';

const sagaMiddleware = createSagaMiddleware();
const effects = (effectsMaps: any) => function* effects(): Generator {
  yield all(effectsMaps);
};
const reducers = (reducersMaps: IReducersMaps) => combineReducers(reducersMaps);

export const getStore = (): any => {
  const _store = createStore(reducers({
    main: mainReducer,
    login: loginReducer,
  }), applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(effects([
    ...MainEffects,
    ...LoginEffects,
  ]));
  return _store;
};
