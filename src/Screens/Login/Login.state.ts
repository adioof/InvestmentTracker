import {ILoginState} from './Login.Types';


export enum PAGE {
  LOADING_PAGE,
  WELCOME_PAGE,
  LOGIN_PAGE,
  LOGIN_SUCCESSFUL_PAGE
}

export const LoginState: ILoginState = {
  loading: true,
  isLoggedIn: false,
};
