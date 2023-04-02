import {ALPHA_VANTAGE_API} from '../engine/constants';

export const searchStock = async (input : string) => {
    try {
        const res = await fetch(`${ALPHA_VANTAGE_API}?function=SYMBOL_SEARCH&keywords=${input}&apikey=4VETRZ4PED8QKHAC`);
        console.log(res.json());
        return res.json();
    } catch (e) {
        return null;
    }
};
