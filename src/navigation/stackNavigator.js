import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'

export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Martha'
      }
    }
  })
)