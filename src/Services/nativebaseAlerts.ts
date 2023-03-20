export interface CustomStyle {
  [key: string]: string | number | CustomStyle;
}
export enum AlertType {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
}
export enum AlertPosition {
  TOP = 'top',
  BOTTOM = 'bottom',
}

export interface AlertData {
  duration: number;
  type?: AlertType;
  message: string;
  position: AlertPosition;
  style?: CustomStyle;
  textStyle?: CustomStyle;
}

export const showAlert = (alertProps: AlertData): void => {
   /* Toast.show({
        text: alertProps.message,
        duration: alertProps.duration,
        type: alertProps.type,
        position: alertProps.position,
        style: alertProps.style,
        textStyle: alertProps.textStyle,
    });*/
};
