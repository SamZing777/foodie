import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

import {
    SafeAreaView,
    TouchableOpacity,
    View,
    Image,
    Text,
    ScrollView
} from 'react-native';

import RestaurantCard from './restaurantCard';
import styles from '../styles/styles';

const Featured = ({ title, id, description }) =>{
    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.featuredItem}>
                <View style={styles.row}>
                    <Text style={styles.boldText}>{ title }</Text>
                    <ArrowRightIcon size={20} color="orange" />
                </View>
                <Text style={styles.text}>{description}</Text>
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 20
            }}
            horizontal>
                <RestaurantCard id={10} address="45. Jones Str, Texas" dishes="Anything" genre="Solo"
                lat={10.0} lon={9.5} rating={4.8} short_description="Always at the heart of you"
                title="Yoshi" imgUrl={require("../img/pizza.jpg")}
                description="Gbadun emi re ni gba ti iwo si wa laye."
                />

                <RestaurantCard id={10} address="45. Jones Str, Texas" dishes="Anything" genre="Solo"
                lat={10.0} lon={9.5} rating={4.8} short_description="Always at the heart of you"
                title="Yoshi" imgUrl={require("../img/pizza.jpg")}
                description="Gbadun emi re ni gba ti iwo si wa laye."
                />

                <RestaurantCard id={10} address="45. Jones Str, Texas" dishes="Anything" genre="Solo"
                lat={10.0} lon={9.5} rating={4.8} short_description="Always at the heart of you"
                title="Yoshi" imgUrl={require("../img/pizza.jpg")}
                description="Gbadun emi re ni gba ti iwo si wa laye."
                />

                <RestaurantCard id={10} address="45. Jones Str, Texas" dishes="Anything" genre="Solo"
                lat={10.0} lon={9.5} rating={4.8} short_description="Always at the heart of you"
                title="Yoshi" imgUrl={require("../img/pizza.jpg")}
                description="Gbadun emi re ni gba ti iwo si wa laye."
                />
            </ScrollView>
        </SafeAreaView>
        
    )
}

export default Featured;
