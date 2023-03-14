
export interface IComponent {
  componentId: string;
}

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