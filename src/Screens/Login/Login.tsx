import React, {useEffect, useState} from 'react';
import {Dimensions, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {checkIsLoggedIn, performGoogleLogin} from './Login.actions';
import {ILoginState} from './Login.Types';
import {PAGE} from './Login.state';
import {LoginPage} from './Components/LoginPage';
import {WelcomePage} from './Components/WelcomePage';
import {Loader} from '../../components/Loader';

const width = Dimensions.get('screen').width;

// @ts-ignore
const Login = ({ navigation }) => {

    const dispatch = useDispatch();
    const [page, setPage] = useState(PAGE.LOADING_PAGE);

    const landingState: ILoginState = useSelector((state: any) => state.login);
    const isLoggedIn = landingState.isLoggedIn;

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
        if (isLoggedIn) {
            navigation.navigate('Home');
        } else {
            setPage(PAGE.WELCOME_PAGE);
        }
    }, [isLoggedIn]);

    return (
        <View style={{flex: 1, width: width, marginTop: 30}}>
            {page === PAGE.LOADING_PAGE && <Loader/>}
            {page === PAGE.WELCOME_PAGE && <WelcomePage onClick={() => setPage(PAGE.LOGIN_PAGE)}/>}
            {page === PAGE.LOGIN_PAGE && <LoginPage onClick={handleGoogleLogin}/>}
        </View>
    );
};

export default Login;
