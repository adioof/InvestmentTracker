import Toast from 'react-native-toast-message';
import {AlertDuration, AlertType} from '../engine/types';
import {COLORS} from '../engine/Theme';

const getBackgroundColor = (alertType?: AlertType) => {
    switch (alertType) {
        case AlertType.SUCCESS:
            return COLORS.LIGHT_GREEN;
        case AlertType.ERROR:
            return COLORS.LIGHT_RED;
        default:
            return COLORS.YELLOW;
    }
};

const getDuration = (alertDuration?: AlertDuration) => {
    switch (alertDuration) {
        case AlertDuration.SHORT:
            return 700;
        case AlertDuration.LONG:
            return 2000;
        default:
            return 1100;
    }
};


export const showToast = (text: string, alertType?: AlertType, alertDuration?: AlertDuration) => {
    Toast.show({
        type: 'custom',
        props: {
            backgroundColor: getBackgroundColor(alertType),
        },
        visibilityTime: getDuration(alertDuration),
        text1: text,
    });
};
