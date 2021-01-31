import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import HelpScreen from './screens/Help';
import SubjectScreen from './screens/Subjects';

const Stack = createStackNavigator();

const AboutStackScreen = () => {  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const HomeStackScreen = () => {  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="Subjects" component={SubjectScreen} />
    </Stack.Navigator>
  );
}

export { AboutStackScreen, HomeStackScreen };