import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/TabNavigator';
import styles from '../assets/styles/index.js';


const App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
};

export default App;
