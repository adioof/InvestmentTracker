import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {TextBox} from '../../../components/TextBox';
import {COLORS} from '../../../engine/Theme';
// @ts-ignore
import Google from '../../../assets/vectors/google.svg';
import {ASSET_TYPE} from '../../../engine/types';
import {useDispatch} from 'react-redux';
import {setAssetType, setPage} from '../AddTransaction.actions';
import {TRANSACTION_PAGE} from '../AddTransaction.state';

export const SelectAssetPage = () => {

    const assets = Object.values(ASSET_TYPE);
    const dispatch = useDispatch();

    const renderItem = ({ item } : any) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => {
                dispatch(setAssetType(item));
                dispatch(setPage(TRANSACTION_PAGE.SEARCH_PAGE));
            }}>
                <Google width={30} height={30}/>
                <TextBox style={{
                    fontSize: 20,
                    color: COLORS.PRIMARY,
                }}>
                    {item}
                </TextBox>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex:1, justifyContent: 'center', marginTop: 20}}>
            <View style={{ paddingHorizontal: 10 }}>
                <TextBox style={{ fontSize: 28 }}>
                    Select the asset you wish to add
                </TextBox>
            </View>
            <FlatList
                data={assets}
                renderItem={renderItem}
                keyExtractor={(asset, index) => `${index}`}
                numColumns={2}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#b1d293',
        borderRadius: 8,
        marginTop: 10,
        marginHorizontal: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
    },
});
