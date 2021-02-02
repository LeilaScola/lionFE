import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackScreen, AboutStackScreen, HelpStackScreen } from "./StackNavigator";
import HelpScreen from './screens/Help';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="About" component={AboutStackScreen}/>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Help" component={HelpScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;