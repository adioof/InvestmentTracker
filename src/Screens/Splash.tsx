import React, {useEffect} from 'react';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';
import {SCREENS} from '../engine/types';

// @ts-ignore
const Splash = ({ navigation }) => {

    useEffect(() => {
        const user = auth().currentUser?.uid;
        let screen = user ? SCREENS.HOME : SCREENS.LOGIN;
        navigation.dispatch(StackActions.replace(screen));
    }, []);

    return (
        <View />
    );
};

export default Splash;
