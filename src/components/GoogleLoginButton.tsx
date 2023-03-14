import React from 'react';
import { TouchableOpacity, View } from 'react-native';
// @ts-ignore
import Google from '../assets/vectors/google.svg';
import { COLORS } from '../engine/Theme';
import { TextBox } from './TextBox';

export const GoogleLoginButton = ({ onClick } :
                                      {onClick: () => any
                                      }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                style={{
                    borderRadius: 12,
                    padding: 13,
                    width: '94%',
                    backgroundColor: COLORS.PRIMARY,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                onPress={() => {
                    onClick();
                }}
            >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                     <Google width={25} height={25} />
                    <TextBox
                        style={{
                            color: COLORS.BG_PRIMARY,
                            lineHeight: 21,
                            fontWeight: '500',
                            marginLeft: 8,
                        }}
                    >
                        Login With Google
                    </TextBox>
                </View>
            </TouchableOpacity>
        </View>
    );
};
