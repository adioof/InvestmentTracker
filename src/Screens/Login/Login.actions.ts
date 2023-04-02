import {GenericAction} from '../../engine/types';
import {IUser} from '../../Services/Firebase.Types';
import {LOGIN_PAGE} from './Login.state';

export const actions = {
    IS_LOGGED_IN: 'IS_LOGGED_IN',
    SET_PAGE: 'SET_PAGE',

    SET_USER_DETAILS: 'SET_USER_DETAILS',

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

export const setPage = (page: LOGIN_PAGE): GenericAction<LOGIN_PAGE> => ({
    type: actions.SET_PAGE,
    payload: page,
});

export const setUserDetails = (): GenericAction<null> => ({
    type: actions.SET_USER_DETAILS,
    payload: null,
});

export const performGoogleLoginSuccess = (
    user: IUser
): GenericAction<IUser> => ({
    type: actions.PERFORM_GOOGLE_LOGIN_SUCCESS,
    payload: user,
});
