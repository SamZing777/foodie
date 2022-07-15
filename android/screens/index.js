import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon
} from 'react-native-heroicons/outline';

import {
    ScrollView,
    StatusBar,
    View,
    Text,
    Image,
    TextInput,
} from 'react-native';

import Categories from '../components/categories';
import Featured from '../components/featured';
import styles from '../styles/styles';


const IndexView = () =>{

    const navigation = useNavigation();

    useLayoutEffect(() =>{
        navigation.setOptions({
            headerShown: false,
        });
    })

    return(
    <ScrollView style={{backgroundColor: "rgb(240, 240, 240)"}}>
        <StatusBar backgroundColor={"aliceblue"}/>
        <View style={styles.logoRow}>
            <Image source={ require("../img/logo.png") }
            style={{width: 50, height: 50}} />

            <View style={styles.logoColumn}>
                <Text style={styles.text}>Deliver Now!</Text>
                <Text style={styles.boldText}>Current Location
                    <ChevronDownIcon size={20} color="gray"/>
                </Text>
            </View>

            <View>
                <UserIcon size={35} color="orange"/>
            </View>
        </View>

        <View style={styles.search}>
            <SearchIcon size={20} color="orange"
            style={{alignSelf: "center"}} />
            <TextInput style={styles.searchInput}
                placeholder='Search for food'
            />
            <AdjustmentsIcon
            style={{alignSelf: "center"}} 
            size={20} color="orange" />
        </View>

        <Categories />

                <Featured title="Featured" id="100"
                    description="Delicios delicacy everyday." 
                />
                <Featured title="Discounted" id="100"
                    description="Delicios delicacy everyday." 
                />
                <Featured title="Most ordered" id="100"
                    description="Delicios delicacy everyday." 
                />
                <Featured title="For the weather" id="100"
                    description="Delicios delicacy everyday." 
                />
        
    </ScrollView>
    )
}

export default IndexView;
