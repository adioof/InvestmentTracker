import {TRANSACTION_PAGE} from './AddTransaction.state';
import {ASSET_TYPE} from '../../engine/types';
import {ITransaction} from '../../Services/Firebase.Types';

export interface IAddTransactionState {
  page: TRANSACTION_PAGE;
  assetType: ASSET_TYPE;
  amount?: number;
  transactionPrice?: number;
}
