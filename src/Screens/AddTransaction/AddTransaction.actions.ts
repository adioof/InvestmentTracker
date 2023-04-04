import {ASSET_TYPE, GenericAction, TRANSACTION_TYPE} from '../../engine/types';
import {ITransaction} from '../../Services/Firebase.Types';
import {TRANSACTION_PAGE} from './AddTransaction.state';

export const actions = {
    SET_PAGE: 'SET_PAGE',
    SET_ASSET_TYPE: 'SET_ASSET_TYPE',
    SET_AMOUNT: 'SET_AMOUNT',
    SET_TRANSACTION_PRICE: 'SET_TRANSACTION_PRICE',

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

export const setAmount = (amount: number): GenericAction<number> => ({
    type: actions.SET_ASSET_TYPE,
    payload: amount,
});

export const setTransactionPrice = (price: number): GenericAction<number> => ({
    type: actions.SET_ASSET_TYPE,
    payload: price,
});


export const addTransaction = (amount: number, transactionPrice: number,
                               transactionType: TRANSACTION_TYPE): GenericAction<{}> => ({
    type: actions.ADD_TRANSACTION,
    payload: {
        amount: amount,
        transactionPrice: transactionPrice,
        transactionType: transactionType,
    },
});

export const addTransactionSuccess = (): GenericAction<TRANSACTION_PAGE> => ({
    type: actions.ADD_TRANSACTION_SUCCESS,
    payload: TRANSACTION_PAGE.TRANSACTION_ADDED_PAGE,
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
