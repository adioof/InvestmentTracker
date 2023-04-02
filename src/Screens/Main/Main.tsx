import React, {useEffect} from 'react';
import {View} from 'react-native';
import {StackActions, useTheme} from '@react-navigation/native';
import {TextBox} from '../../components/TextBox';
import {ILoginState} from '../Login/Login.Types';
import {useDispatch, useSelector} from 'react-redux';
import {setUserDetails} from '../Login/Login.actions';
import {getTime} from '../../engine/helper';
import CircleAddButton from '../../components/CircleAddButton';
import {SCREENS} from '../../engine/types';

const Main  = ({ navigation } : any) => {

    const {colors} = useTheme();

    const loginState: ILoginState = useSelector((state: any) => state.login);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUserDetails());
    });

    const onCirclePress = () => {
        navigation.dispatch(StackActions.push(SCREENS.ADD_TRANSACTION));
    };

    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <TextBox>{getTime(loginState.user?.createdAt)}</TextBox>
            <CircleAddButton onPress={onCirclePress}/>
        </View>
    );
};

export default Main;
