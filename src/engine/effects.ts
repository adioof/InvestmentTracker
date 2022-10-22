import { all } from 'redux-saga/effects';
import {IEffectsMaps} from './types';

export default (effectsMaps: IEffectsMaps) => function* effects(): Generator {
  yield all(effectsMaps);
};
