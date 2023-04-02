import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {getFontFromWeight} from '../engine/helper';
import {TextBox} from './TextBox';

// @ts-ignore
export const TextBoxInput = (props) => {

    const weight = props && props.style && props.style.fontWeight;
    const keyboardType = props.isNumber ? 'number-pad' : 'default';
    const placeholder = props.placeholder;
    const [inputText, setInputText] = useState('');

    const isNotEmpty = () => {
        return inputText.trim().length !== 0;
    };

    const handleChangeText = (text: React.SetStateAction<string>) => {
        setInputText(text);
        props.onChangeText(text);
    };

    const styles = () => {
        // font weight bug
        if ((weight && (weight === 'bold' || weight === '700'))) {
            props.style.fontWeight = '';
        }

        return props.style;
    };


    return (
        <View>
            {isNotEmpty() &&
                <TextBox style={{ fontSize: props.style.fontSize - 2 }}>
                    {placeholder}
                </TextBox>
            }
            <TextInput
                style={[
                    {
                        fontFamily: getFontFromWeight(weight),
                        color: '#fff',
                        marginTop: -5,
                    },
                    styles(),
                ]}
                placeholder={placeholder}
                onChangeText={handleChangeText}
                keyboardType={keyboardType}
                placeholderTextColor="gray"
            />
        </View>
    );
};
