import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import {globalStyles} from '../styles/global';




// destructuring to get the route param from title being passed down from home.
// have to use route ion reactv.5 to grab the data from home.js
export default function Review({navigation, route}) {
   
    // const { title, rating, body } = route.params;
  
    return(
        <View style={globalStyles.container}>
            <Text>{route.params.title}</Text>
            <Text>{route.params.body}</Text>
            <Text>{route.params.rating}</Text>
        </View>
    )
}



