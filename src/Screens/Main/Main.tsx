import React, {useEffect} from 'react';
import {View} from 'react-native';
import {IComponent} from '../../engine/types';
import {useTheme} from '@react-navigation/native';
import {TextBox} from '../../components/TextBox';
import {ILoginState} from '../Login/Login.Types';
import {useSelector} from 'react-redux';
import {AlertPosition, AlertType, showAlert} from '../../Services/nativebaseAlerts';

const Main: React.FC<IComponent> = () => {
  const {colors} = useTheme();

  useEffect(() => {

  });

  return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <TextBox>{'hello'}</TextBox>
      </View>
  );
};

export default Main;
