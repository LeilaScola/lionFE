import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

import HomeStackScreen from './StackNavigator';
import AboutStackScreen from './StackNavigator';
import HelpScreen from './StackNavigator';


<Tab.Navigator>
    <Tab.Screen name="About" component={AboutStackScreen} />
    <Tab.Screen name="Home" component={HomeStackScreen} />
    <Tab.Screen name="Help" component={HelpScreen} />
</Tab.Navigator>