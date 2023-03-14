import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import {IUserCredential} from '../Screens/Login/Login.Types';
import {IFirebaseUser} from './Firebase.Types';
import {AlertPosition, AlertType, showNativeBaseAlert} from './nativebaseAlerts';
import {ErrorLogger, errorType} from './logger';

let userID = auth().currentUser?.uid || '';

export const initGoogleAuth = (): void => {
    const key = '573725274677-tuifhonvjckd4qbm5nh0av0q1biupaol.apps.googleusercontent.com';
    console.log('INITIALIZING GOOGLE AUTH', key);
    GoogleSignin.configure({
        webClientId: key,
    });
};

export const loginWithGoogle = async (): Promise<IUserCredential> => {
    try {
        console.log('logging in - here');
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        console.log(idToken);
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        // Sign-in the user with the credential

        console.log(googleCredential);
        const userCredential: IUserCredential = (await auth().signInWithCredential(
            googleCredential
        )) as any;
        userID = userCredential.user._user.uid;

        const firebaseUser = await firestore()
            .collection('users')
            .doc(userID)
            .get();

        if (firebaseUser.exists) {
            const user: any = await firestore()
                .collection('users')
                .doc(userID)
                .get();
            return {
                ...user.data(),
                id: user.id,
                isNewUser: false,
            };
        } else {
            await messaging().requestPermission();
            const token = await messaging().getToken();
            const newFirebaseUser: IFirebaseUser = {
                name: userCredential.user._user.displayName || '',
                firstName: userCredential.additionalUserInfo?.profile?.given_name || '',
                lastName: userCredential.additionalUserInfo?.profile?.family_name || '',
                description: userCredential.user._user.name || '',
                email: userCredential.user._user.email,
                phone: userCredential.user._user.phoneNumber,
                photo: userCredential.user._user.photoURL,
                token: token,
                createdAt: firestore.FieldValue.serverTimestamp() as any,
            };
            await firestore()
                .collection('users')
                .doc(userCredential.user._user.uid)
                .set(newFirebaseUser);
            const user: any = await firestore()
                .collection('users')
                .doc(userCredential.user._user.uid)
                .get();
            return {
                ...user.data(),
                id: user.id,
                isNewUser: true,
            };
        }
    } catch (e : any) {
        ErrorLogger(e, errorType.userBreaking);
        showNativeBaseAlert({
            type: AlertType.WARNING,
            message: 'Please select an option',
            duration: 2000,
            position: AlertPosition.BOTTOM,
        });
        throw e;
    }
};

export const getUserDetails = async (): Promise<any> => {
    const userDetails = auth().currentUser;
    let userProfile = {
        isNewUser: false,
    } as any;
    if (userDetails?.displayName) {
        userProfile = {
            ...userProfile,
            userName: userDetails.displayName,
        };
    }
    if (userDetails?.email) {
        userProfile = {
            ...userProfile,
            email: userDetails.email,
        };
    }
    if (userDetails?.uid) {
        userProfile = {
            ...userProfile,
            userId: userDetails.uid,
        };
    }
    if (userDetails?.photoURL) {
        userProfile = {
            ...userProfile,
            picture: userDetails.photoURL,
        };
    }
    if (userDetails?.phoneNumber) {
        userProfile = {
            ...userProfile,
            phoneNumber: userDetails.phoneNumber,
        };
    }

    const user: any = await firestore()
        .collection('users')
        .doc(userID)
        .get();
    if (user.exists) {
        userProfile = {
            ...userProfile,
            isOnboarded: (user.data && user.data() && user.data().isOnboarded || false),
            firstName: (user.data && user.data() && user.data().firstName || 'User'),
        };
    }
    return userProfile;
};
