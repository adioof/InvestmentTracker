import {call, put, takeLatest} from 'redux-saga/effects';
import {actions, addTransactionSuccess, searchStockFailure, searchStockSuccessful} from './AddTransaction.actions';
import {ErrorLogger, errorType} from '../../Services/logger';
import {addTransactionFirebase} from '../../Services/Firebase';
import {searchStock} from '../../Services/ThirdPartyAPIs';

function* addTransactionEffect(action: any) {
    try {
        const transactionID: string = yield call(addTransactionFirebase, action.payload);
        if (transactionID !== '') {
            yield put(addTransactionSuccess(transactionID));
        }
    } catch (e : any) {
        ErrorLogger(e, errorType.userBreaking);
    }
}

function* searchStockEffect(action: any) {
    try {
        // @ts-ignore
        const res = yield call(searchStock, action.payload);
        if (res) {
            yield put(searchStockSuccessful(res));
        } else {
            yield put(searchStockFailure());
        }
    } catch (e : any) {
        ErrorLogger(e, errorType.userBreaking);
    }
}


function* addTransactionSaga() {
    yield takeLatest(actions.ADD_TRANSACTION, addTransactionEffect);
}

function* searchStockSaga() {
    yield takeLatest(actions.SEARCH_STOCK, searchStockEffect);
}


export default [
    ...addTransactionSaga(),
    ...searchStockSaga(),
];
