import {actions, performGoogleLoginSuccess} from './Login.actions';
import { call, put, takeLatest } from 'redux-saga/effects';
import {getUserDetails, initGoogleAuth, loginWithGoogle} from '../../Services/Firebase';
import {IUserProfile} from './Login.Types';
import {AlertPosition, AlertType, showNativeBaseAlert} from '../../Services/nativebaseAlerts';
import {ErrorLogger, errorType} from '../../Services/logger';

function* performGoogleLoginEffect() {
    try {
        // @ts-ignore
        const user = yield call(loginWithGoogle);
        // todo user thing get data and all
        const userProfile: IUserProfile = {
            userId: user.id,
            userName: user.name,
            firstName: user.firstName,
            lastName: user.lastName,
            picture: user.photo,
            email: user.email,
            isOnboarded: user.isOnboarded,
            phoneNumber: user.phone,
            token: user.token,
        };
        console.log(userProfile);
        yield put(performGoogleLoginSuccess(userProfile));
        if (userProfile.userId) {
            if (userProfile.isOnboarded) {
                //
            } else {
                // fetchQuestionnairesEffect();
            }
        }
    } catch (e : any) {
        showNativeBaseAlert({
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
        initGoogleAuth();
        const user: IUserProfile = yield call(getUserDetails);
        console.log(user);
        if (user.userId) {
            if (user.isOnboarded) {
                //
            } else {
                //
            }
            yield put(performGoogleLoginSuccess(user));
        } else {
            // yield put(showLoginPage());
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
