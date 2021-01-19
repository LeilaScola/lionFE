import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from "./assets/styles";

import HomeScreen from './src/screens/Home';
import AboutScreen from './src/screens/About';
import HelpScreen from './src/screens/Help';

import TabNavigator from './src/navigation/TabNavigator'

const App = () => (
    <TabNavigator />
)

export default App;
