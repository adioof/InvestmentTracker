import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {TRANSACTION_TYPE} from '../engine/types';
import {TextBox} from './TextBox';

const ButtonsComponent = ({ getTransactionType } : {
    getTransactionType: (transactionType : TRANSACTION_TYPE) => any
}) => {
    const [activeButton, setActiveButton] = useState(TRANSACTION_TYPE.BUY);

    const handleButtonClick = (button : TRANSACTION_TYPE) => {
        setActiveButton(button);
        getTransactionType(button);
    };

    const isBuy = () => {
        return activeButton === TRANSACTION_TYPE.BUY;
    };

    const isSell = () => {
        return activeButton === TRANSACTION_TYPE.SELL;
    };

    return (
        <View style={{ flexDirection: 'row', height: 50 }}>
            <TouchableOpacity
                style={{
                    flex: 1,
                    borderWidth: 2,
                    padding: 10,
                    borderRadius: 8,
                    marginRight: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: isBuy() ? 'green' : 'grey',
                }}
                onPress={() => handleButtonClick(TRANSACTION_TYPE.BUY)}>
                <TextBox style={{
                    fontWeight: isBuy() ? '700' : '400', fontSize: 17,
                }}>Buy</TextBox>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flex: 1,
                    borderWidth: 2,
                    padding: 10,
                    borderRadius: 8,
                    marginLeft: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: isSell() ? 'red' : 'grey',
                }}
                onPress={() => handleButtonClick(TRANSACTION_TYPE.SELL)}>
                <TextBox style={{
                    fontWeight: isSell() ? '700' : '400', fontSize: 17,
                }}>Sell</TextBox>
            </TouchableOpacity>
        </View>
    );
};


export default ButtonsComponent;
