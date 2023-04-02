import {IUser} from '../../Services/Firebase.Types';
import {LOGIN_PAGE} from './Login.state';

export interface ILoginState {
    loginPage: LOGIN_PAGE
    isLoggedIn: boolean;
    user? : IUser;
}

export interface IUserCredential {
    additionalUserInfo?: {
        /**
         * Returns whether the user is new or existing.
         */
        isNewUser: boolean;
        /**
         * Returns an Object containing IDP-specific user data if the provider is one of Facebook,
         * GitHub, Google, Twitter, Microsoft, or Yahoo.
         */
        profile?: Record<string, any>;
        /**
         * Returns the provider ID for specifying which provider the information in `profile` is for.
         */
        providerId: string;
        /**
         * Returns the username if the provider is GitHub or Twitter.
         */
        username?: string;
    };
    user: {
        name: string | null;
        email: string;
        photo: string | null;
        familyName: string | null;
        givenName: string | null;
        _user: any;
        uid: string;
    };
    scopes?: string[];
    idToken: string | null;
    /**
     * Not null only if a valid webClientId and offlineAccess: true was
     * specified in configure().
     */
    serverAuthCode: string | null;
}
