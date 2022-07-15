import React from "react";
import styles from "../styles/styles";

import {
    ScrollView,
    View,
    Text,
    Image,
  } from 'react-native';

const About = () =>{

    return(
        <ScrollView>
            <View style={ styles.container }>
                <Text style={{ color: "black", fontSize: 24 }}>
                    About Us
                </Text>
            </View>   
        </ScrollView>
    )
}

export default About;
