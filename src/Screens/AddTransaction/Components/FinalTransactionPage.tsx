import React, {useEffect, useState} from 'react';
import { TouchableWithoutFeedback, View} from 'react-native';
import DateTimePicker, {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {TextBox} from '../../../components/TextBox';
import {Button, BUTTON_TYPE} from '../../../components/Button';
import {BackButton} from '../../../components/BackButton';
import {setPage} from '../AddTransaction.actions';
import {useDispatch} from 'react-redux';
import {TRANSACTION_PAGE} from '../AddTransaction.state';
import {TextBoxInput} from '../../../components/TextBoxInput';
import {TRANSACTION_TYPE} from '../../../engine/types';
import BuySellButtons from '../../../components/BuySellButtons';

const FinalTransactionPage = () => {

    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisible] = useState(false);
    const [time, setTime] = useState(new Date());
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);
    const [transactionType, setTransactionType] = useState(TRANSACTION_TYPE.BUY);

    const [amount, setAmount] = useState(0);
    const [buyPrice, setBuyPrice] = useState(0);

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
        setBuyPrice(10);
    }, [date, time]);

    const handleAddTransaction = () => {
        // handle buy button press here
        console.log(`Bought ${amount} shares on ${date.toLocaleDateString()} at ${time.toLocaleTimeString()} for ${buyPrice} per share`);
    };

    return (
        <View style={{flex:1, alignItems: 'center'}}>
            <View>
                <BackButton onClick={() => {dispatch(setPage(TRANSACTION_PAGE.SEARCH_PAGE));}}/>
                <View style={{ alignItems: 'center' }}>
                    <BuySellButtons getTransactionType={(transactionType : TRANSACTION_TYPE)=> {
                        setTransactionType(transactionType);
                    }} />
                </View>

                <TouchableWithoutFeedback onPress={() => {
                    setDatePickerVisible(true);
                }}>
                    <View style={{ padding: 10 }}>
                        <TextBox>Select Date:</TextBox>
                        <TextBox>{date.toString()}</TextBox>
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
                    <View style={{ padding: 10 }}>
                        <TextBox>Select Time:</TextBox>
                        <TextBox>{time.toString()}</TextBox>
                        {isTimePickerVisible &&
                            <DateTimePicker value={time} mode="time" maximumDate={new Date()}
                                            display="default" onChange={handleTimeChange} />
                        }
                    </View>
                </TouchableWithoutFeedback>
                <View>

                </View>
                <TextBoxInput
                    style={{ fontSize: 19 }}
                    placeholder={'Amount'}
                    onChangeText={(text : number) => {
                        setAmount(text);
                    }}
                    isNumber={true}
                />
                <TextBoxInput
                    style={{ fontSize: 19 }}
                    placeholder={`${transactionType === TRANSACTION_TYPE.BUY ? 'Buy' : 'Sell' } price`}
                    onChangeText={(text : number) => {
                        setBuyPrice(text);
                    }}
                    isNumber={true}
                />
            </View>
            <View style={{ position: 'absolute', bottom: 30, alignItems: 'center' }}>
                <Button label={'Add transaction'} buttonType={BUTTON_TYPE.LONG} onPress={handleAddTransaction} />
            </View>

        </View>
    );
};

export default FinalTransactionPage;
