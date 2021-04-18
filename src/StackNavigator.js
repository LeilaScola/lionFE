import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import HelpScreen from './screens/Help';
import EducationTypeScreen from './screens/EducationType';
import SubjectTypeScreen from './screens/SubjectType';
import TopicTypeScreen from './screens/TopicType';

// const AboutStack = createStackNavigator();
// function AboutStackScreen() {
//   return (
//     <AboutStack.Navigator>
//       <AboutStack.Screen name="About" component={AboutScreen} />
//       <AboutStack.Screen name="Home" component={HomeScreen} />
//       <AboutStack.Screen name="Help" component={HelpScreen} />
//     </AboutStack.Navigator>
//   );
// }

// const HelpStack = createStackNavigator();
// function HelpStackScreen() {
//   return (
//     <HelpStack.Navigator>
//       <HelpStack.Screen name="About" component={AboutScreen} />
//       <HelpStack.Screen name="Home" component={HomeScreen} />
//       <HelpStack.Screen name="Help" component={HelpScreen} />
//     </HelpStack.Navigator>
//   );
// }

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (  
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="About" component={AboutScreen} />
      <HomeStack.Screen name="Education" component={EducationTypeScreen} />
      <HomeStack.Screen name="Subjects" component={SubjectTypeScreen} />
      <HomeStack.Screen name="Topics" component={TopicTypeScreen} />
      <HomeStack.Screen name="Help" component={HelpScreen} />
    </HomeStack.Navigator>
  );
}

export { HomeStackScreen };