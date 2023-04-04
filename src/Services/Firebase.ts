import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import {IUserCredential} from '../Screens/Login/Login.Types';
import {ITransaction, IUser} from './Firebase.Types';
import {ErrorLogger, errorType} from './logger';
import {TRANSACTIONS_COLLECTION, USERS_COLLECTION} from '../engine/constants';

let userID = auth().currentUser?.uid || '';

export const initGoogleAuth = (): void => {
    const key = '573725274677-tuifhonvjckd4qbm5nh0av0q1biupaol.apps.googleusercontent.com';
    console.log('INITIALIZING GOOGLE AUTH', key);
    GoogleSignin.configure({
        webClientId: key,
    });
};

const getMessagingToken = async () => {
    await messaging().requestPermission();
    return await messaging().getToken();
};

export const loginWithGoogle = async (): Promise<IUser> => {
    try {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential

        const userCredential: IUserCredential = (await auth().signInWithCredential(
            googleCredential
        )) as any;
        userID = userCredential.user._user.uid;

        const firebaseUser = await firestore()
            .collection(USERS_COLLECTION)
            .doc(userID)
            .get();

        const token = await getMessagingToken();

        if (firebaseUser.exists) {
            const user = firebaseUser.data() as IUser;
            user.token = token;

            // whenever an existing user logs in, update the following values
            await firestore()
                .collection(USERS_COLLECTION)
                .doc(userID)
                .update({
                    token: token,
                    updatedAt: firestore.FieldValue.serverTimestamp() as any,
                });

            return user;
        } else {
            const newFirebaseUser: IUser = {
                userID: userID,
                username: '',
                name: userCredential.user._user.displayName || '',
                firstName: userCredential.additionalUserInfo?.profile?.given_name || '',
                lastName: userCredential.additionalUserInfo?.profile?.family_name || '',
                description: userCredential.user._user.name || '',
                email: userCredential.user._user.email,
                phone: userCredential.user._user.phoneNumber,
                photo: userCredential.user._user.photoURL,
                token: token,
                createdAt: firestore.FieldValue.serverTimestamp(),
                updatedAt: firestore.FieldValue.serverTimestamp(),
            };
            await firestore()
                .collection(USERS_COLLECTION)
                .doc(userID)
                .set(newFirebaseUser);

            return newFirebaseUser;
        }
    } catch (e : any) {
        ErrorLogger(e, errorType.userBreaking);
        throw e;
    }
};

export const getUserDetails = async (): Promise<IUser> => {
    const user: any = await firestore()
        .collection(USERS_COLLECTION)
        .doc(userID)
        .get();

    return user.data() as IUser || {};
};

export const addTransactionFirebase = async (transaction: ITransaction): Promise<string> => {
    console.log(transaction);
    const transactionRef: any = await firestore()
        .collection(TRANSACTIONS_COLLECTION)
        .add(transaction);

    const transactionId = transactionRef.id;
    console.log(`New transaction created with ID: ${transactionId}`);

    return transactionId;
};
