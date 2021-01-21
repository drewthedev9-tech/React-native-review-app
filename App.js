import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/home"
import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
import { DrawerNavigator } from "./routes/drawer";


// const getFonts=()=>{
//   return Font.loadAsync({
//   'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
//   'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
//   });
// }



export default function App() {
  // const[fontsLoaded, setFontsLoaded] = useState(false);

  // // if fonts state is strue then load the component. have to do this as we are oading the font asychronously.
  // if(fontsLoaded){
    return (
    // <Home/>
    <DrawerNavigator/>
     
  );
  // } else{
  //   return(
  //     <AppLoading
  //       startAsync={getFonts}
  //       onFinish={()=>setFontsLoaded(true)}
  //       onError={() => console.log('error')}
  //   />
  //   )
  // }

 
}

