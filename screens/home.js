import React, {useState} from 'react'
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';




function Home(props) {
    // where you will pull from strapi or cms for getting Blogs and such.
    // Data should be like this to be used. Key value pair.
    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
      ]);

    // const pressHandler =()=>{
    //     // Navigates to the page that is listed in the appNavigator name listed.
    //     props.navigation.navigate('Details')
    // }

    {/* <Button
                title='go to review dets'
                onPress={pressHandler}
            /> */}

    return(
       
        <View style={globalStyles.container}>
           <FlatList
                data={reviews}
                // grabbing the reviews data above puts it into a new array called item, similar to map function.
                renderItem={({item})=>(
                    // passing the above item to detilas component to be able to acces the item array(reviews array above).
                    // navigate to detils componets and paa the item data.
                    // navigate function takes you to the details(review details component).
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Details',item)}>
                        <Text styles={globalStyles.titleText}>{item.title}</Text>
                    </TouchableOpacity>
                    
                )}
            />
        </View>
    );
}

export default Home;


