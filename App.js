import React, {useEffect} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Screens/Main/Main';
import { getStore } from './src/engine/store';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/Screens/Login/Login';
import {StatusBar} from 'react-native';
import Splash from './src/Screens/Splash';
import {SCREENS} from './src/engine/types';
import AddTransaction from './src/Screens/AddTransaction/AddTransaction';
import { Provider as StoreProvider } from 'react-redux';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/components/toastConfig';

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#000',
    text: '#fff',
  },
};

const Stack = createNativeStackNavigator();


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
      <StoreProvider store={getStore()}>
          <StatusBar
              backgroundColor="transparent"
              translucent={true}
              barStyle="light-content"
          />
          <NavigationContainer theme={darkTheme}>
              <Stack.Navigator  initialRouteName={SCREENS.SPLASHSCREEN}>
                  <Stack.Screen name={SCREENS.SPLASHSCREEN} component={Splash}  options={{ headerShown:false }}/>
                  <Stack.Screen name={SCREENS.LOGIN} component={Login}  options={{ headerShown:false }}/>
                  <Stack.Screen name={SCREENS.HOME} component={Main}  options={{ headerShown:false }}/>
                  <Stack.Screen name={SCREENS.ADD_TRANSACTION} component={AddTransaction}  options={{ headerShown:false }}/>
              </Stack.Navigator>
          </NavigationContainer>
          <Toast
              ref={(ref) => Toast.setRef(ref)}
              config={toastConfig}
          />
      </StoreProvider>
  );
};

export default App;
