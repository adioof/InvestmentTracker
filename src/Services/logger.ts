import chalk from 'chalk';

export enum errorType {
  warning = 'Warning',
  userBreaking = 'User Breaking',
  fatal = 'Fatal',
  untagged = 'Untagged',
}


export const SuccessLogger = (text: string, data?: any): void => {
  data
    ? console.log(chalk.white.bgGreen.bold(text), data)
    : console.log(chalk.white.bgGreen.bold(text));
};

export const ErrorLogger = (error: Error, errorType = 'unTagged',
                            isFatal = false): void => {
  if (error) {
    /* if (!__DEV__) {
      if (Tracker.Crashlytics) {
        Tracker.Crashlytics().recordError(error);
      }
      Tracker.trackWithProperties('Saadhna App Error', {
        isFatal,
        errorType: isFatal ? 'Fatal' : errorType,
        errorMessage: error.message ? error.message : '',
      });
      if (Tracker.Sentry) {
        Tracker.Sentry.captureException(error);
      }
    }*/
    console.log(errorType);
    console.log(isFatal);
    if (error.message) {
      console.log(chalk.white.bgRed.bold(error.message), error);
    } else {
      console.log('No Message Error: ', error);
    }
  }
};

export const MessageLogger = (text: string, data?: any): void => {
  data
    ? console.log(chalk.black.bgYellow.bold(text), data)
    : console.log(chalk.black.bgYellow.bold(text));
};
