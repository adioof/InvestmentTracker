import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {COLORS} from '../engine/Theme';
// @ts-ignore
import Add from '../assets/vectors/add.svg';

const CircleAddButton = ({onPress} : {
    onPress: () => any;
}) => {
        return (
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Add width={25} height={25} />
            </TouchableOpacity>
        );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 50,
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        right: 30,
    },
});

export default CircleAddButton;
