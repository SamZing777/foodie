import React from "react";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "../styles/styles";

import {
    ScrollView,
    View,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert
  } from 'react-native';

const Login = ({navigation}) =>{

    const register = () =>{
        navigation.navigate("Register");
    }

    const login = () =>{
        navigation.navigate("Customer");
    }

    return(
        <ScrollView>         
            <View style={styles.container}>
                <Text style={{color: "black", fontSize: 24}}>
                    Login
                </Text> 
                <Text style={{color: "black", textAlign: "center", marginTop: 10}}>
                    Log into your account to access snap features.
                </Text>
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 18, marginBottom: 10}}>Email</Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                    placeholder="email"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 18, marginBottom: 10}}>Password</Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                    placeholder="password"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.center}>
                <Pressable style={{ backgroundColor: "#96E765", width: 180, height: 50,
                                    alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 5, marginTop: 100, marginBottom: 20}}
                                    onPress={login}>
                    <Text style={{color: "black", fontSize: 18}}>Login</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Text style={{color: "black"}}>
                    Not gotten an account yet?
                </Text>
                <TouchableOpacity onPress={register}>
                    <Text style={{color: "#96E765"}}>Register</Text>
                </TouchableOpacity>
            </View> 
        </ScrollView>
    )
}

export default Login;
