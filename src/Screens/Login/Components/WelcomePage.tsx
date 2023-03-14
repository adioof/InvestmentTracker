import React from 'react';
import {View} from 'react-native';
import {TextBox} from '../../../components/TextBox';
import {Button, BUTTON_TYPE} from '../../../components/Button';
// @ts-ignore
import { Triangle } from 'react-native-shapes';
import {COLORS} from '../../../engine/Theme';

export const WelcomePage = ({ onClick } : {onClick: () => any }) => {

    return (
        <View style={{flex:1, justifyContent: 'center', paddingHorizontal: 30}}>
            <View style={{ position: 'absolute', bottom: 0, right: -50}}>
                <Triangle size={25} color={COLORS.PRIMARY}/>
            </View>
            <TextBox style={{fontSize: 40, lineHeight: 80, fontWeight: '600' }}>
                Welcome
            </TextBox>
            <TextBox style={{ fontSize: 21, lineHeight: 30 }}>
                Start your investing journey in a few simple steps.
            </TextBox>
            <View style={{ alignItems: 'center', marginTop: 32, paddingHorizontal: 10}}>
                <Button onPress={onClick} label={'Next'} buttonType={BUTTON_TYPE.MEDIUM} withArrow={true}/>
            </View>
        </View>
    );
};
