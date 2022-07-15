import React from "react";
import styles from '../styles/styles';

import {
    ScrollView,
    View,
    Text,
    TextInput,
    Pressable,
    Alert
  } from 'react-native';

const Contact = () =>{

    const submitMessage = () =>{
        Alert.alert("This button will process the top up");
    }

    return(
        <ScrollView>
            <View style={ styles.container }>
                <Text style={{ color: "black", fontSize: 24 }}>
                    Get in touch
                </Text>
                <Text style={{ color: "black" }}>
                    We are here for you, how can we help?
                </Text>
            </View> 

            <View style={ styles.containerLeft }>
                <Text style={{ color: "black", fontSize: 24, marginBottom: 20 }}>
                        Drop us a line
                </Text>
                <Text style={{ color: "black", marginBottom: 10 }}>
                    Subject
                </Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 20, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 20, color: 'gray'
                             }}
                    placeholder="Enter subject"
                    placeholderTextColor="#ccc"
                />

                <Text style={{ color: "black", marginBottom: 10 }}>
                    Message
                </Text>
                <TextInput style={{ height: 120, backgroundColor: 'white', fontSize: 20, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 80, color: 'gray'
                             }}
                    placeholder="Enter your message here...."
                    placeholderTextColor="#ccc"
                />

                <View style={styles.button}>
                    <Pressable style={{ backgroundColor: "#96E765", width: 100, height: 50,
                                        alignItems: 'center', justifyContent: 'center',
                                        borderRadius: 5, marginBottom: 10}}
                                        onPress={submitMessage}>
                        <Text style={{color: "black", fontSize: 18}}>Submit</Text>
                    </Pressable>
                </View>
                
            </View>
        </ScrollView>
    )
}

export default Contact;
