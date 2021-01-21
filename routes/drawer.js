import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeNavigator} from "./homeStack"
import {AboutNavigator} from "./aboutStack"

const RootDrawerNavigator =()=>{

}

// we are imoprting the both the HomeNavigator from homestack and the AboutNavigator from aboutStack.js
const { Navigator, Screen } = createDrawerNavigator();

const DrawNavigator = () => (
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
     component={HomeNavigator}
     />
    <Screen name="About"
     component={AboutNavigator}
     />
  
  </Navigator>
);

export const DrawerNavigator = () => (
  <NavigationContainer>
    <DrawNavigator />
  </NavigationContainer>
);