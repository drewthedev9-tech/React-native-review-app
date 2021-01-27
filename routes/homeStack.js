import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({navigation}) => (
  <Navigator initialRouteName="Home"
  screenOptions={{
    headerStyle: {
      backgroundColor: "#eee",
      height: 60,
    },
    headerTintColor: "#444",
  }}
  >
    {/* home screen by default is shown */}
    <Screen 
    name="Home"
    component={Home}
    // using a function to import the header component which is shared across the aboutStack.js and homeStack.js
    options={ () => ({ 
      headerTitle: () => <Header  title='HOME' />,
    })}
     />
    <Screen name="Details" 
    component={ReviewDetails} 
    />
  </Navigator>
);

export const HomeNavigator = () => (
  // <NavigationContainer>
    <HomeStack />
  // </NavigationContainer>
);