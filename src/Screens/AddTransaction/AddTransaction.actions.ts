import {ASSET_TYPE, GenericAction} from '../../engine/types';
import {ITransaction} from '../../Services/Firebase.Types';
import {TRANSACTION_PAGE} from './AddTransaction.state';

export const actions = {
    SET_PAGE: 'SET_PAGE',
    SET_ASSET_TYPE: 'SET_ASSET_TYPE',
    ADD_TRANSACTION: 'ADD_TRANSACTION',
    ADD_TRANSACTION_SUCCESS: 'ADD_TRANSACTION_SUCCESS',

    SEARCH_STOCK: 'SEARCH_STOCK',
    SEARCH_STOCK_SUCCESS: 'SEARCH_STOCK_SUCCESS',
    SEARCH_STOCK_FAILURE: 'SEARCH_STOCK_FAILURE',

};

export const setPage = (page: TRANSACTION_PAGE): GenericAction<TRANSACTION_PAGE> => ({
    type: actions.SET_PAGE,
    payload: page,
});

export const setAssetType = (assetType: ASSET_TYPE): GenericAction<ASSET_TYPE> => ({
    type: actions.SET_ASSET_TYPE,
    payload: assetType,
});


export const addTransaction = (transaction: ITransaction): GenericAction<ITransaction> => ({
    type: actions.ADD_TRANSACTION,
    payload: transaction,
});

export const addTransactionSuccess = (transactionID: string): GenericAction<string> => ({
    type: actions.ADD_TRANSACTION,
    payload: transactionID,
});

export const searchStock = (input: string): GenericAction<string> => ({
    type: actions.SEARCH_STOCK,
    payload: input,
});

export const searchStockSuccessful = (data: any): GenericAction<string> => ({
    type: actions.SEARCH_STOCK_SUCCESS,
    payload: data,
});

export const searchStockFailure = (): GenericAction<null> => ({
    type: actions.SEARCH_STOCK_FAILURE,
    payload: null,
});
