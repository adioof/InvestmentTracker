import {BaseToast, ErrorToast} from 'react-native-toast-message';
import {View} from 'react-native';
import React from 'react';
import {COLORS} from '../engine/Theme';
import {AlertType} from '../engine/types';
import {TextBox} from './TextBox';


export const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props : any) => (
        <BaseToast
            {...props}
            style={{
                borderLeftColor: COLORS.LIGHT_GREEN,
                backgroundColor: COLORS.LIGHT_GREEN,
            }}
            contentContainerStyle={{
                color: 'white',
                paddingHorizontal: 15,
            }}
            text1Style={{
                fontSize: 15,
                fontWeight: '400',
            }}
        />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props : any) => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17,
            }}
            text2Style={{
                fontSize: 15,
            }}
        />
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.

      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    custom: ({ text1, props } : {
        text1: string;
        props: any
    }) => (

        <View style={{
            width: '100%',
            paddingVertical: 15,
            paddingHorizontal: 20,
            backgroundColor: props.backgroundColor,
            borderRadius: 5,
        }}>
            <TextBox size={15}>{text1}</TextBox>
        </View>
    ),
};
