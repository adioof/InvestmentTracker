import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

export enum LOADER_TYPE {
    CIRCLE_FILL
}

export const Loader = ({loader} : {loader? : LOADER_TYPE})  => {

    const getSource = () => {
        if (loader) {
            switch (loader) {
                default:
                    return require('../assets/json/loader1.json');
            }
        }
        return require('../assets/json/loader1.json');
    };

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Lottie source={getSource()} autoPlay loop autoSize={true}/>
        </View>
    );
};
