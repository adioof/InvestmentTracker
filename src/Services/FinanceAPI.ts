import axios from 'axios';
import {ALPHA_VANTAGE_API} from '../engine/constants';
import {ASSET_STOCK} from '../engine/types';
const TWELVE_DATA_API_KEY = '35b069703ea643e495290ec1810ef663';
const FRED_API_KEY = '9650ddb31bf45396c71415613430a8f9';
const ALPHA_VANTAGE_API_KEY = '4VETRZ4PED8QKHAC';

const API_MAIN = 'https://api.twelvedata.com/price';
const TIMESTAMP = '2022-01-01T12:00:00'; // Combine date and time in the ISO 8601 format
const START_DATE = '2022-01-03';
const END_DATE = '2022-01-03';
const INTERVAL = '1day';
const FUNCTION = 'TIME_SERIES_DAILY';
const STOCK_SYMBOL = 'AAPL';

export const getStockPriceAtDate = async (stock: string, date: Date) => {
    try {
        const API_URL = `https://www.alphavantage.co/query?function=${FUNCTION}&symbol=${STOCK_SYMBOL}&apikey=${ALPHA_VANTAGE_API_KEY}`;
        axios.get(API_URL)
            .then(response => {
                const data = response.data;
                console.log(data);
                if (data && data['Time Series (Daily)']) {
                    const stockDataForSpecificDate = data['Time Series (Daily)']['2022-01-03'];
                    if (stockDataForSpecificDate) {
                        console.log(stockDataForSpecificDate);
                    } else {
                        console.log('No data found for the specific date');
                    }
                } else {
                    console.log('Error fetching stock data');
                }
            })
            .catch(error => {
                console.error('Error fetching stock data:', error);
            });
    } catch (error) {
        console.error(error);
    }
};

export const searchStock = async (text : string) : Promise<ASSET_STOCK[]> => {
    const stocks : ASSET_STOCK[] = [];
    try {
        if (text.length > 0) {
            const response = await axios.get(`${ALPHA_VANTAGE_API}?function=SYMBOL_SEARCH&keywords=${text}&apikey=${ALPHA_VANTAGE_API_KEY}`);
            const data = response.data;
            for (const item of data.bestMatches) {
                const stock : ASSET_STOCK = {
                    symbol : item['1. symbol'],
                    name: item['2. name'],
                    region: item['4. region'],
                    timezone: item['7. timezone'],
                    currency: item['8. currency'],
                };
                stocks.push(stock);
            }

            return stocks;
        }
    } catch (e) {
        console.error(e);
    }
    return stocks;
};
