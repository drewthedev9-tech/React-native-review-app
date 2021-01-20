import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator initialRouteName="Home"
  screenOptions={{
    headerStyle: {
      backgroundColor: "#eee",
      height: 60,
    },
    headerTintColor: "#444",
  }}
  >
    <Screen name="Home"
     component={Home}
     />
    <Screen name="Details" 
    component={ReviewDetails} 
    />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);