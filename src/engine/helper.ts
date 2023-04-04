export const getTime = (data : any) => {
    try {
        return data.toDate().toString();
    } catch (e) {
        return '';
    }
};

export const getTimeFromDateObject = (date : Date) => {
    try {
        return `${date.getHours()} : ${date.getMinutes()}`;
    } catch (e) {
        return '';
    }
};

export const getDayDateFromDateObject = (date : Date) => {
    try {
        return `${getDayFromDate(date)}, ${date.getDate()} ${getMonthFromDate(date)} ${date.getFullYear()}`;
    } catch (e) {
        return '';
    }
};

const getDayFromDate = (date : Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
};

const getMonthFromDate = (date : Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[date.getMonth()];
};

export const getFinalDateTimeResultObject = (time: Date, date: Date) => {
   return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
    );
};

export const getFontFromWeight = (weight : string) => {
    if (weight) {
        switch (weight) {
            case '100':
                return 'Poppins-Thin';
            case '200':
                return 'Poppins-ExtraLight';
            case '300':
                return 'Poppins-Light';
            case '400':
                return 'Poppins-Regular';
            case '500':
                return 'Poppins-Medium';
            case '600':
                return 'Poppins-SemiBold';
            case '700':
                return 'Poppins-Bold';
            case 'bold':
                return 'Poppins-Bold';
            case '800':
                return 'Poppins-ExtraBold';
            case '900':
                return 'Poppins-Black';
            default:
                return 'Poppins-Regular';
        }
    }

    return 'Poppins-Regular';
};
