import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styles from "./assets/styles";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AboutStackScreen, HomeStackScreen } from './src/StackNavigator'
import HelpScreen from './src/screens/Help';

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>

      </NavigationContainer>
  );
}

export default App;