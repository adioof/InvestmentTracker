import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../engine/Theme';

export const BackButton = ({ onClick } : {onClick: () => any }) => {
    return (
        <TouchableOpacity
            style={{
                padding: 5,
            }}
            onPress={() => {
                onClick();
            }}
        >
            <View>
                <Ionicons name={'add'} style={{ fontSize: 28, color: COLORS.PRIMARY}}/>
            </View>
        </TouchableOpacity>
    );
};
