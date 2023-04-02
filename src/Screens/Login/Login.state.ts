import {ILoginState} from './Login.Types';


export enum LOGIN_PAGE {
  LOADING_PAGE,
  WELCOME_PAGE,
  LOGIN_PAGE,
  LOGIN_SUCCESSFUL_PAGE
}

export const LoginState: ILoginState = {
  loginPage: LOGIN_PAGE.LOADING_PAGE,
  isLoggedIn: false,
};
