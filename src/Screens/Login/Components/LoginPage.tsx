import React from 'react';
import { View } from 'react-native';
import { GoogleLoginButton } from '../../../components/GoogleLoginButton';
import {TextBox} from '../../../components/TextBox';

export const LoginPage = ({ onClick } :
                                 {onClick: () => any
                                 }) => {

  return (
      <View style={{flex:1, paddingHorizontal: 30, marginTop: 20}}>
          <TextBox style={{fontSize: 40, lineHeight: 80, fontWeight: '600' }}>
              Welcome
          </TextBox>
          <TextBox style={{ fontSize: 21, lineHeight: 30 }}>
              Start your investing journey in a few simple steps.
          </TextBox>
          <View style={{ alignItems: 'center', marginTop: 32, paddingHorizontal: 10}}>
              <GoogleLoginButton onClick={onClick} />
          </View>
      </View>
  );
};
