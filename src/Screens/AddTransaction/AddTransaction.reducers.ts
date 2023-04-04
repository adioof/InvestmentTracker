import {IAddTransactionState} from './AddTransaction.types';
import {AddTransactionState} from './AddTransaction.state';
import {GenericAction} from '../../engine/types';
import {actions} from './AddTransaction.actions';

export const addTransactionReducers = (
  state: IAddTransactionState = AddTransactionState,
  action: GenericAction<any>
): IAddTransactionState => {
  switch (action.type) {
    case actions.SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case actions.SET_ASSET_TYPE:
      return {
        ...state,
        assetType: action.payload,
      };
    case actions.SET_AMOUNT:
      return {
        ...state,
        amount: action.payload,
      };
    case actions.SET_TRANSACTION_PRICE:
      return {
        ...state,
        transactionPrice: action.payload,
      };
    case actions.ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        page: action.payload,
      };
    default: {
      return state;
    }
  }
};
