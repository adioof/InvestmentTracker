import React, {useEffect} from 'react';
import {Dimensions, View} from 'react-native';
import {ASSET_TYPE, IComponent, TRANSACTION_TYPE} from '../../engine/types';
import {useNavigation, useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {IAddTransactionState} from './AddTransaction.types';
import {Loader, LOADER_TYPE} from '../../components/Loader';
import {TRANSACTION_PAGE} from './AddTransaction.state';
import {SelectAssetPage} from './Components/SelectAssetPage';
import SearchPage from './Components/SearchPage';
import FinalTransactionPage from './Components/FinalTransactionPage';
import {setPage} from './AddTransaction.actions';

const width = Dimensions.get('screen').width;

const AddTransaction: React.FC<IComponent> = () => {

    const addTransactionState: IAddTransactionState = useSelector((state: any) => state.addTransaction);
    const page = addTransactionState.page;

    const dispatch = useDispatch();
    const navigation = useNavigation();

    useEffect(() => {
        return navigation.addListener('beforeRemove', () => {
            // reset page
            dispatch(setPage(TRANSACTION_PAGE.FINAL_TRANSACTION_PAGE));
        });
    }, [navigation]);

    return (
        <View style={{flex: 1, width: width, marginTop: 50, paddingHorizontal: 20}}>
            {page === TRANSACTION_PAGE.LOADING_PAGE && <Loader loader={LOADER_TYPE.BURGER_LOADER}/>}
            {page === TRANSACTION_PAGE.SELECT_ASSET_PAGE && <SelectAssetPage/>}
            {page === TRANSACTION_PAGE.SEARCH_PAGE && <SearchPage/>}
            {page === TRANSACTION_PAGE.FINAL_TRANSACTION_PAGE && <FinalTransactionPage/>}
        </View>
    );
};

export default AddTransaction;
