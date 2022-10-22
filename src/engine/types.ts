import { ForkEffect } from 'redux-saga/effects';

export interface IComponent {
  componentId: string;
}

export type IEffectsMaps = Generator<ForkEffect<never>, void, unknown>[];

export interface IReducersMaps {
  [key: string]: any;
}

export interface GenericAction<T> {
  type: string;
  payload: T;
  meta?: MetaProps;
}

export interface MetaProps {
  retry?: boolean;
  dismiss?: string[];
  [x: string]: any;
}