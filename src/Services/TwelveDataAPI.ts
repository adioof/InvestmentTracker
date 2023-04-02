import axios from 'axios';
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
