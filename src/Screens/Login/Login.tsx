import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {checkIsLoggedIn, performGoogleLogin, setPage} from './Login.actions';
import {ILoginState} from './Login.Types';
import {LOGIN_PAGE} from './Login.state';
import {LoginPage} from './Components/LoginPage';
import {WelcomePage} from './Components/WelcomePage';
import {Loader, LOADER_TYPE} from '../../components/Loader';
import {StackActions} from '@react-navigation/native';
import {SCREENS} from '../../engine/types';

const width = Dimensions.get('screen').width;

// @ts-ignore
const Login = ({ navigation }) => {

    const dispatch = useDispatch();

    const loginState: ILoginState = useSelector((state: any) => state.login);
    const isLoggedIn = loginState.isLoggedIn;
    const page = loginState.loginPage;

    useEffect(() => {
        dispatch(checkIsLoggedIn());
    }, []);

    const handleGoogleLogin = async () => {
        try {
            console.log('login');
            dispatch(performGoogleLogin());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log('checking is logged in', isLoggedIn);
        if (isLoggedIn) {
            navigation.dispatch(StackActions.replace(SCREENS.HOME));
        } else {
            dispatch(setPage(LOGIN_PAGE.WELCOME_PAGE));
        }
    }, [isLoggedIn]);

    return (
        <View style={{flex: 1, width: width, marginTop: 30}}>
            {page === LOGIN_PAGE.LOADING_PAGE && <Loader loader={LOADER_TYPE.BURGER_LOADER}/>}
            {page === LOGIN_PAGE.WELCOME_PAGE && <WelcomePage onClick={() => dispatch(setPage(LOGIN_PAGE.LOGIN_PAGE))}/>}
            {page === LOGIN_PAGE.LOGIN_PAGE && <LoginPage onClick={handleGoogleLogin}/>}
        </View>
    );
};

export default Login;
