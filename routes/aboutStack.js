
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";


const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
  <Navigator initialRouteName="Home"
  screenOptions={{
    headerStyle: {
      backgroundColor: "#eee",
      height: 60,
    },
    headerTintColor: "#444",
  }}
  >
    <Screen name="About"
     component={About}
     />
  
  </Navigator>
);

export const AboutNavigator = () => (
    // No need for component navigationContainer as we are nesting this compomnent witht another ain one and cant have it 
    // wrapped here, needs t be warpped in drawer.js
//   <NavigationContainer>
    <AboutStack />
//  </NavigationContainer>
);