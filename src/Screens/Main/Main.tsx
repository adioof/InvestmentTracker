import React from 'react';
import {View} from 'react-native';
import {IComponent} from '../../engine/types';
import {useTheme} from '@react-navigation/native';
import {TextBox} from '../../components/TextBox';

const Main: React.FC<IComponent> = () => {
  const {colors} = useTheme();

  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <TextBox>Hello</TextBox>
    </View>
  );
};

export default Main;
