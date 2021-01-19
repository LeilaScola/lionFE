import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { HomeNavigator } from './StackNavigator'
import HomeScreen from '../screens/Home';
import AboutScreen from '../screens/About';
import HelpScreen from '../screens/Help';

const TabNavigator = createBottomTabNavigator({
    About: {
      screen: About
    },
    Home: {
      screen: HomeNavigator
    },
    Help: {
      screen: Help
    }
})
  
export default createAppContainer(TabNavigator)
  