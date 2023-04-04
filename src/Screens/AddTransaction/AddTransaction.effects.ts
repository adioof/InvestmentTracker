import {call, put, takeLatest, select} from 'redux-saga/effects';
import {actions, addTransactionSuccess, searchStockFailure, searchStockSuccessful} from './AddTransaction.actions';
import {ErrorLogger, errorType} from '../../Services/logger';
import {addTransactionFirebase} from '../../Services/Firebase';
import {searchStock} from '../../Services/FinanceAPI';
import {AlertDuration, AlertType} from '../../engine/types';
import {showToast} from '../../Services/ToastAlert';
import {ITransaction} from '../../Services/Firebase.Types';
import {IAddTransactionState} from './AddTransaction.types';
import firestore from '@react-native-firebase/firestore';

function* addTransactionEffect(action: any) {
    try {
        const addTransactionState : IAddTransactionState = yield select((state : any) => state.addTransaction);
        const assetType = addTransactionState.assetType;
        if (!assetType) {
            showToast('Failed to add transaction', AlertType.ERROR);
            return;
        }

        console.log(assetType);
        const transaction : ITransaction = {
            amount: action.payload.amount,
            assetType: assetType,
            time: firestore.FieldValue.serverTimestamp() as any,
            transactionPrice: action.payload.transactionPrice,
            transactionType: action.payload.transactionType,
        };
        const transactionID: string = yield call(addTransactionFirebase, transaction);
        if (transactionID !== '') {
            yield put(addTransactionSuccess());
        } else {
            showToast('Failed to add transaction', AlertType.ERROR);
        }
    } catch (e : any) {
        showToast(`Error : ${e.text}`, AlertType.ERROR);
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
