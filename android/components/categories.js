import React from 'react';

import {
    ScrollView,
    View
} from 'react-native';

import CategoryCard from './categoryCard';
import styles from '../styles/styles';

const Categories = () =>{
    return(
        <ScrollView contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 20
        }}
        horizontal>
            
            <CategoryCard imgUrl={require("../img/pizza.jpg")} title="Pizza" />
            <CategoryCard imgUrl={require("../img/pizza.jpg")} title="Burger" />
            <CategoryCard imgUrl={require("../img/pizza.jpg")} title="Snacks" />
            <CategoryCard imgUrl={require("../img/pizza.jpg")} title="Ofada Rice" />

        </ScrollView>
        // <View>

        // </View>
    )
}

export default Categories;
