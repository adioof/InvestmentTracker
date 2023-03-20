import {actions, performGoogleLoginSuccess, setPage} from './Login.actions';
import {call, put, takeLatest} from 'redux-saga/effects';
import {getUserDetails, initGoogleAuth, loginWithGoogle} from '../../Services/Firebase';
import {AlertPosition, AlertType, showAlert} from '../../Services/nativebaseAlerts';
import {ErrorLogger, errorType} from '../../Services/logger';
import {IUser} from '../../Services/Firebase.Types';
import {PAGE} from './Login.state';

function* performGoogleLoginEffect() {
    try {
        yield put(setPage(PAGE.LOADING_PAGE));
        const user : IUser = yield call(loginWithGoogle);
        if (user.userID) {
            yield put(performGoogleLoginSuccess(user));
            showAlert({
                type: AlertType.SUCCESS,
                message: 'Login Success',
                duration: 2000,
                position: AlertPosition.BOTTOM,
            });
        }
    } catch (e : any) {
        showAlert({
            type: AlertType.DANGER,
            message: `Login Failed! Because ${e.message}`,
            duration: 2000,
            position: AlertPosition.BOTTOM,
        });
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

export default [
    ...checkLoggedInSaga(),
    ...performGoogleLoginSaga(),
];
