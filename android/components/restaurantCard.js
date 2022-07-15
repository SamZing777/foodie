import React from 'react';

import {
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';

import { 
    StarIcon,
    LocationMarkerIcon
 } from 'react-native-heroicons/outline';

import styles from '../styles/styles';

const RestaurantCard = ({ 
    id,
    address,
    dishes,
    genre,
    imgUrl,
    lat,
    lon,
    rating,
    short_description,
    title,
    description
 }) =>{
    return(
        <TouchableOpacity style={styles.restaurantContainer}>
            <Image source={(imgUrl)} style={styles.restaurantImg} />
            <Text style={styles.restaurantText}>{ title }</Text>
            <View style={styles.restaurantRow}>
                <StarIcon size={20} color="orange" />
                <Text style={[styles.text, {marginHorizontal: 15}]}>{rating}</Text>
                <Text style={styles.text}>{genre}</Text>
            </View>
            <View style={styles.restaurantRow}>
                <LocationMarkerIcon size={20} color="orange" />
                <Text style={[styles.text, {marginHorizontal: 15}]}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard;
