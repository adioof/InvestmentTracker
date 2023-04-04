
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


export enum AlertType {
  ERROR = 'error',
  SUCCESS = 'success',
  WARNING = 'warning',
}
export enum AlertDuration {
  SHORT = 'short',
  DEFAULT = 'default',
  LONG = 'long',
}


export enum SCREENS {
  SPLASHSCREEN = 'SPLASHSCREEN',
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  ADD_TRANSACTION = 'ADD_TRANSACTION'
}

export enum ASSET_TYPE {
  STOCKS = 'Stocks',
  CRYPTO = 'Crypto',
  MUTUAL_FUNDS = 'Mutual Funds',
}

export enum TRANSACTION_TYPE {
  BUY = 'buy',
  SELL = 'sell',
  TRANSFER = 'transfer',
}

export interface ASSET_STOCK {
  symbol : string,
  name: string,
  region: string,
  timezone: string,
  currency: string
}
