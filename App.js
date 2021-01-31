import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AboutStackScreen, HomeStackScreen } from './src/StackNavigator'
import HelpScreen from './src/screens/Help';

const Tab = createBottomTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="About" component={AboutStackScreen} />
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Help" component={HelpScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

export default App;