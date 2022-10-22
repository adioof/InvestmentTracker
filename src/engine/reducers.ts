import { combineReducers } from 'redux';
import {IReducersMaps} from './types';

const reducers = (reducersMaps: IReducersMaps) => combineReducers(reducersMaps);

export default reducers;
