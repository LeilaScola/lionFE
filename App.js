import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AboutStackScreen, HomeStackScreen } from './src/StackNavigator';
import HelpScreen from './src/screens/Help';
import HomeScreen from './src/screens/Home';
import AboutScreen from './src/screens/About';
import BottomTabNavigator from './src/TabNavigator';

// const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
};

export default App;
