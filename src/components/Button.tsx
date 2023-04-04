import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import {COLORS} from '../engine/Theme';
import {TextBox} from './TextBox';
// @ts-ignore
import LongArrow from '../assets/vectors/longArrow.svg';
const width = Dimensions.get('screen').width;

export enum BUTTON_TYPE {
  LONG = 'LONG',
  MEDIUM = 'MEDIUM',
  SMALL = 'SMALL',
}

export const Button = ({
                           onPress,
                           label,
                           buttonType = BUTTON_TYPE.MEDIUM,
                           withArrow = false,
                           disabled = false,
                            backgroundColor = COLORS.PRIMARY,
                       }: {
    onPress: () => any;
    label: string;
    buttonType?: BUTTON_TYPE;
    withArrow?: boolean;
    disabled?: boolean;
    backgroundColor?: string;
}) => {

    const getWidth = () => {
        switch (buttonType) {
            case BUTTON_TYPE.LONG:
                return width * 0.8;
            case BUTTON_TYPE.MEDIUM:
                return width * 0.6;
            default:
                return width * 0.4;
        }
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
                disabled={disabled}
                style={{
                    width: getWidth(),
                    borderRadius: 20,
                    backgroundColor: disabled ? COLORS.SECONDARY : (backgroundColor),
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 1,
                    marginTop: 20,
                    padding: 13,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                }} onPress={onPress}>
                <TextBox style={{
                    color: COLORS.BG_PRIMARY,
                    fontSize: 16,
                    fontWeight: '600',
                }}>{label}
                </TextBox>
                {withArrow ?
                    (<View style={{ alignItems: 'center', marginTop: 1,
                        justifyContent: 'center', marginLeft: 5}}>
                        <LongArrow width={25} height={20} />
                    </View>)
                    : null
                }
            </TouchableOpacity>
        </View>
    );
};
