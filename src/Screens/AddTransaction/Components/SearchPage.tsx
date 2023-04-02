import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {TextBox} from '../../../components/TextBox';
import {ALPHA_VANTAGE_API} from '../../../engine/constants';
import {useDispatch} from 'react-redux';
import {setPage} from '../AddTransaction.actions';
import {TRANSACTION_PAGE} from '../AddTransaction.state';

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchTerm.length > 0) {
            fetch(`${ALPHA_VANTAGE_API}?function=SYMBOL_SEARCH&keywords=${searchTerm}&apikey=4VETRZ4PED8QKHAC`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setSearchResults(data.bestMatches);
                })
                .catch(error => console.error(error));
        } else {
            setSearchResults([]);
        }
    }, [searchTerm]);

    const onAssetClick = (item : any) => {
        console.log(item);
        dispatch(setPage(TRANSACTION_PAGE.FINAL_TRANSACTION_PAGE));
    };

    const renderItem = ({ item } : any) => {
        return (
            <TouchableOpacity style={styles.item} onPress={() => {
                onAssetClick(item);
            }} >
                <View>
                    <TextBox>{item['1. symbol']}</TextBox>
                    <TextBox>{item['2. name']}</TextBox>
                </View>

            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                value={searchTerm}
                onChangeText={text => setSearchTerm(text)}
                placeholder="Search stocks"
            />
            <FlatList
                style={styles.searchResults}
                data={searchResults}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    searchResults: {
        marginLeft: 10,
        marginRight: 10,
    },
    item: {
        backgroundColor: '#8c2929',
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 16,
    },
});

export default SearchPage;
