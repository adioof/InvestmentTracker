import {actions, performGoogleLoginSuccess, setPage} from './Login.actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import {getUserDetails, initGoogleAuth, loginWithGoogle} from '../../Services/Firebase';
import {ErrorLogger, errorType} from '../../Services/logger';
import {IUser} from '../../Services/Firebase.Types';
import {LOGIN_PAGE} from './Login.state';

function* performGoogleLoginEffect() {
    try {
        yield put(setPage(LOGIN_PAGE.LOADING_PAGE));
        const user : IUser = yield call(loginWithGoogle);
        if (user.userID) {
            yield put(performGoogleLoginSuccess(user));
        }
    } catch (e : any) {
        console.log(e);
    }
}

function* setUserDetailsEffect() {
    try {
        const user : IUser = yield call(getUserDetails);
        if (user.userID) {
            yield put(performGoogleLoginSuccess(user));
        }
    } catch (e : any) {
        console.log(e);
    }
}

function* checkLoggedInEffect() {
    try {
        // this method is called the first time on app entry so init is here
        initGoogleAuth();
        const user : IUser = yield call(getUserDetails);
        if (user.userID) {
            yield put(performGoogleLoginSuccess(user));
        }
    } catch (e : any) {
        ErrorLogger(e, errorType.userBreaking);
    }
}

function* checkLoggedInSaga() {
    yield takeLatest(actions.IS_LOGGED_IN, checkLoggedInEffect);
}


function* performGoogleLoginSaga() {
    yield takeLatest(actions.PERFORM_GOOGLE_LOGIN, performGoogleLoginEffect);
}

function* getUserDetailsSaga() {
    yield takeLatest(actions.SET_USER_DETAILS, setUserDetailsEffect);
}


export default [
    ...checkLoggedInSaga(),
    ...performGoogleLoginSaga(),
    ...getUserDetailsSaga(),
];
