import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeNavigator} from "./homeStack"
import {AboutNavigator} from "./aboutStack"

const RootDrawerNavigator =()=>{

}

// we are imoprting the both the HomeNavigator from homestack and the AboutNavigator from aboutStack.js
// we are pulling both of these compometsm into the draweer component from react-native
// then wrap them both in the navigation cxontainer. you will be able to see the in therir components we dont wrap with compnet
// navigation.
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
      {/* shows home screen by default */}
    <Screen name="Home"
     component={HomeNavigator}
     />
    <Screen name="About"
     component={AboutNavigator}
     />
  
  </Navigator>
);

export const DrawerNavigator = () => (
    // >used in v5 kto wrap all the componets in the drawer container
  <NavigationContainer>
    <DrawNavigator />
  </NavigationContainer>
);