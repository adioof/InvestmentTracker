import React, {useEffect, useState} from 'react';
import { TouchableWithoutFeedback, View} from 'react-native';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {TextBox} from '../../../components/TextBox';
import {Button, BUTTON_TYPE} from '../../../components/Button';
import {BackButton} from '../../../components/BackButton';
import {addTransaction, setPage} from '../AddTransaction.actions';
import {useDispatch} from 'react-redux';
import {TRANSACTION_PAGE} from '../AddTransaction.state';
import {TextBoxInput} from '../../../components/TextBoxInput';
import {AlertType, TRANSACTION_TYPE} from '../../../engine/types';
import BuySellButtons from '../../../components/BuySellButtons';
import {COLORS} from '../../../engine/Theme';
import {getDayDateFromDateObject, getTimeFromDateObject} from '../../../engine/helper';
import {showToast} from '../../../Services/ToastAlert';

const FinalTransactionPage = () => {

    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [time, setTime] = useState(new Date());
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [transactionType, setTransactionType] = useState(TRANSACTION_TYPE.BUY);

    const [amount, setAmount] = useState(NaN);
    const [transactionPrice, setTransactionPrice] = useState(NaN);

    const handleDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        const {
            type,
        } = event;

        if (type === 'set') {
            selectedDate = selectedDate || date;
            setDate(selectedDate);
        }
        setDatePickerVisible(false);
    };

    const isBuy = () => {
        return transactionType === TRANSACTION_TYPE.BUY;
    };

    const handleTimeChange = (event: DateTimePickerEvent, currentTime?: Date) => {
        const {
            type,
        } = event;

        if (type === 'set') {
            currentTime = currentTime || time;
            setTime(currentTime);
        }
        setTimePickerVisible(false);
    };

    useEffect(() => {
        // const fetchPrice = async () => {
        //     const price = await getStockPriceAtDate('AAPL', getFinalDateTimeResultObject(time, date));
        //     console.log(price); // Do something with the price
        // };
        //
        // fetchPrice();
    }, [date, time]);

    const handleAddTransaction = () => {
        if (!transactionPrice) {
            showToast('Please add price', AlertType.WARNING);
            return;
        }
        if (!amount) {
            showToast('Please add amount', AlertType.WARNING);
            return;
        }
        console.log(`Bought ${transactionPrice} shares on ${date.toLocaleDateString()} at ${time.toLocaleTimeString()} for ${transactionPrice} per share`);
        dispatch(addTransaction(amount, transactionPrice, transactionType));
    };

    return (
        <View style={{flex:1, alignItems: 'center'}}>
            <View style={{ width: '100%' }}>
                <BackButton onClick={() => {dispatch(setPage(TRANSACTION_PAGE.SEARCH_PAGE));}}/>
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <BuySellButtons getTransactionType={(transactionType : TRANSACTION_TYPE)=> {
                        setTransactionType(transactionType);
                    }} />
                </View>

                <TouchableWithoutFeedback onPress={() => {
                    setDatePickerVisible(true);
                }}>
                    <View style={{ paddingVertical: 10 }}>
                        <TextBox size={16} style={{ color: COLORS.LIGHT_GREY }}>Date</TextBox>
                        <TextBox size={19}>{getDayDateFromDateObject(date)}</TextBox>
                        {isDatePickerVisible &&
                            <DateTimePicker value={date} mode="date" display="default"
                                            maximumDate={new Date()}
                                            onChange={handleDateChange}
                            />
                        }
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => {
                    setTimePickerVisible(true);
                }}>
                    <View style={{ paddingVertical: 10, marginBottom: 10 }}>
                        <TextBox size={16} style={{  color: COLORS.LIGHT_GREY }}>Time</TextBox>
                        <TextBox size={19}>{getTimeFromDateObject(time)}</TextBox>
                        {isTimePickerVisible &&
                            <DateTimePicker value={time} mode="time" maximumDate={new Date()}
                                            display="default" onChange={handleTimeChange} />
                        }
                    </View>
                </TouchableWithoutFeedback>
                <TextBoxInput
                    size={19}
                    placeholder={`${isBuy() ? 'Buy' : 'Sell' } price`}
                    onChangeText={(text : number) => {
                        setTransactionPrice(Number(text));
                    }}
                    isNumber={true}
                />
                <TextBoxInput
                    size={19}
                    placeholder={'Amount'}
                    onChangeText={(text : number) => {
                        setAmount(Number(text));
                    }}
                    isNumber={true}
                />
            </View>
            <View style={{ position: 'absolute', bottom: 30, alignItems: 'center' }}>
                <Button
                    backgroundColor={isBuy() ? COLORS.LIGHT_GREEN : COLORS.LIGHT_RED}
                    label={'Add transaction'}
                    buttonType={BUTTON_TYPE.LONG}
                    onPress={handleAddTransaction} />
            </View>

        </View>
    );
};

export default FinalTransactionPage;
