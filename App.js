import React, {useEffect} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Screens/Main/Main';
import {Provider} from 'react-redux';
import { getStore } from './src/engine/store';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/Screens/Login/Login';
import {StatusBar} from 'react-native';
import Splash from './src/Screens/Splash';
import {SCREENS} from './src/engine/types';

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
      <Provider store={getStore()}>
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
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
};

export default App;
