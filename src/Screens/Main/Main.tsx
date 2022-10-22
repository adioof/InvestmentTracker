import React from 'react';
import {
    StatusBar,
    View,
} from 'react-native';
import {IComponent} from '../../engine/types';
import { useTheme } from '@react-navigation/native';
import {TextBox} from '../../components/TextBox';

const Main: React.FC<IComponent> = (props: IComponent) => {

  const { colors } = useTheme();

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex:1 }}>
            <StatusBar backgroundColor="transparent"
                       translucent={true}
                       barStyle="light-content" />
            <TextBox>Hello</TextBox>
        </View>
    );
};

export default Main;
