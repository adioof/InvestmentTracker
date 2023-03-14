import {GenericAction} from '../../engine/types';
import {IUserProfile} from './Login.Types';

export const actions = {
    IS_LOGGED_IN: 'IS_LOGGED_IN',

    PERFORM_GOOGLE_LOGIN: 'PERFORM_GOOGLE_LOGIN',
    PERFORM_GOOGLE_LOGIN_SUCCESS: 'PERFORM_GOOGLE_LOGIN_SUCCESS',
    PERFORM_GOOGLE_LOGIN_FAILURE: 'PERFORM_GOOGLE_LOGIN_FAILURE',

};

export const checkIsLoggedIn = (): GenericAction<null> => ({
    type: actions.IS_LOGGED_IN,
    payload: null,
});

export const performGoogleLogin = (): GenericAction<null> => ({
    type: actions.PERFORM_GOOGLE_LOGIN,
    payload: null,
});

export const performGoogleLoginSuccess = (
    userProfile: IUserProfile
): GenericAction<IUserProfile> => ({
    type: actions.PERFORM_GOOGLE_LOGIN_SUCCESS,
    payload: userProfile,
});
