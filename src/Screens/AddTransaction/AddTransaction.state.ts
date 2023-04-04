import {IAddTransactionState} from './AddTransaction.types';
import {ASSET_TYPE} from '../../engine/types';

export enum TRANSACTION_PAGE {
  LOADING_PAGE,
  SELECT_ASSET_PAGE,
  SEARCH_PAGE,
  FINAL_TRANSACTION_PAGE,
  TRANSACTION_ADDED_PAGE
}

export const AddTransactionState: IAddTransactionState = {
  page: TRANSACTION_PAGE.FINAL_TRANSACTION_PAGE,
  assetType: ASSET_TYPE.STOCKS,
};
