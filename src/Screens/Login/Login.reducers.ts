import { actions } from './Login.actions';
import {GenericAction} from '../../engine/types';
import {ILoginState} from './Login.Types';
import {LoginState} from './Login.state';

export const loginReducer = (
    state: ILoginState = LoginState,
    action: GenericAction<any>
): ILoginState => {
    switch (action.type) {
        case actions.PERFORM_GOOGLE_LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case actions.SET_PAGE:
            return {
                ...state,
                page: action.payload,
            };
        default: {
            return state;
        }
    }
};
