import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import HelpScreen from './screens/Help';
import EducationTypeScreen from './screens/EducationType';
import SubjectTypeScreen from './screens/SubjectType';
import TopicTypeScreen from './screens/TopicType';


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
    <Stack.Screen name="Education" component={EducationTypeScreen} />
    <Stack.Screen name="Subjects" component={SubjectTypeScreen} />
    <Stack.Screen name="Topics" component={TopicTypeScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
  </Stack.Navigator>
);
}

export { AboutStackScreen, HomeStackScreen };