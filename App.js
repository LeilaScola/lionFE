import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
};

export default App;
