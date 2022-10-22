import React, {useEffect} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './src/Screens/Main/Main';
import { Provider } from 'react-redux';
import { getStore } from './src/engine/store';
import SplashScreen from 'react-native-splash-screen';

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
  });

  return (
      <Provider store={getStore()}>
        <NavigationContainer theme={darkTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Main}  options={{ headerShown:false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
};

export default App;
