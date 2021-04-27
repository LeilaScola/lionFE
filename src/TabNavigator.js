import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen } from "./StackNavigator";
import HelpScreen from './screens/Help';
import AboutScreen from './screens/About';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="About" component={AboutScreen}/>
        <Tab.Screen name="Help" component={HelpScreen}/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;