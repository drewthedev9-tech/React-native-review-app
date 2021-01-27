import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {globalStyles} from '../styles/global';
import Card from "../shared/card";



// destructuring to get the route param from title being passed down from home.
// have to use route ion reactv.5 to grab the data from home.js
export default function Review({navigation, route}) {
   
    // const { title, rating, body } = route.params;
  
    return(
        <View style={globalStyles.container}>
          <Card>
            <Text>{route.params.title}</Text>
            <Text>{route.params.body}</Text>
            <Text>{route.params.rating}</Text>
          </Card>
        </View>
    )
}



