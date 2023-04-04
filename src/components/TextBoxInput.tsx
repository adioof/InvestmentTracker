import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {getFontFromWeight} from '../engine/helper';
import {TextBox} from './TextBox';
import {COLORS} from '../engine/Theme';

// @ts-ignore
export const TextBoxInput = (props) => {

    const weight = props && props.style && props.style.fontWeight;
    const keyboardType = props.isNumber ? 'number-pad' : 'default';
    const placeholder = props.placeholder;
    const value = props.value;

    const styles = () => {
        // font weight bug
        if ((weight && (weight === 'bold' || weight === '700'))) {
            props.style.fontWeight = '';
        }

        return props.style;
    };


    return (
        <View>
            <TextInput
                style={[
                    {
                        fontFamily: getFontFromWeight(weight),
                        color: '#fff',
                        marginTop: -5,
                        marginLeft: -3,
                    },
                    styles(),
                ]}
                value={value}
                placeholder={placeholder}
                onChangeText={props.onChangeText}
                keyboardType={keyboardType}
                placeholderTextColor="gray"
            />
        </View>
    );
};
