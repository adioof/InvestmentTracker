import React from 'react';
import { Text } from 'react-native';
import {getFontFromWeight} from '../engine/helper';

// @ts-ignore
export const TextBox = (props) => {

  // weight 400 is default

  const weight = props && props.style && props.style.fontWeight;

  const styles = () => {
    // font weight bug
    if ((weight && (weight === 'bold' || weight === '700'))) {
      props.style.fontWeight = '';
    }

    return props.style;
  };

  return (
    <Text
      style={[
          {
              fontFamily: getFontFromWeight(weight),
              color: '#fff',
              fontSize: props.size,
          },
          styles(),
        ]
      }>
      {props.children}
    </Text>
  );
};
