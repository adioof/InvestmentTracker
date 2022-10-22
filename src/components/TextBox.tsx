import React from 'react';
import { Text } from 'react-native';

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

  const font = () => {
    if (weight) {
      switch (weight) {
        case '100':
          return 'Poppins-Thin';
        case '200':
          return 'Poppins-ExtraLight';
        case '300':
          return 'Poppins-Light';
        case '400':
          return 'Poppins-Regular';
        case '500':
          return 'Poppins-Medium';
        case '600':
          return 'Poppins-SemiBold';
        case '700':
          return 'Poppins-Bold';
        case 'bold':
          return 'Poppins-Bold';
        case '800':
          return 'Poppins-ExtraBold';
        case '900':
          return 'Poppins-Black';
        default:
          return 'Poppins-Regular';
      }
    }

    return 'Poppins-Regular';
  };


  return (
    <Text
      style={[
          {
            fontFamily: font(),
            color: '#fff',
          },
          styles(),
        ]
      }>
      {props.children}
    </Text>
  );
};
