import React from "react";
import styles from "../styles/styles";

import {
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    Button,
    Pressable,
    Alert,
    TouchableOpacity
  } from 'react-native';

const Register = ({navigation}) =>{

    const register = () =>{
        navigation.navigate("Customer");
    }

    const login = () =>{
        navigation.navigate("Login")
    }

    return(
        <ScrollView>   
            <View style={styles.container}>
                <Text style={{color: "black", fontSize: 24}}>
                    Register
                </Text> 
                <Text style={{color: "black", textAlign: "center", marginTop: 10}}>
                    Register to get access to loans at your finger tip.
                </Text>
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 18, marginBottom: 10}}>Names</Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                    placeholder="First and other names"
                    placeholderTextColor="#ccc"
                />
                 <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                color: 'gray'
                             }}
                    placeholder="Surname"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 18, marginBottom: 10}}>Email</Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                    placeholder="Email"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 18, marginBottom: 10}}>Password</Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                    placeholder="Password"
                    placeholderTextColor="#ccc"
                />
                 <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                color: 'gray'
                             }}
                    placeholder="Confirm password"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 20, marginBottom: 10}}>Gender</Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                    placeholder="Select Gender"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 20, marginBottom: 10}}>Country</Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                    placeholder="Select Country"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 20, marginBottom: 10}}>Contact Number</Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                    placeholder="08055555555"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 20, marginBottom: 10}}>Occupation</Text>
                <TextInput style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                    placeholder="Business person"
                    placeholderTextColor="#ccc"
                />
            </View>

            <View style={styles.containerLeft}>
                <Text style={{color: "black", fontSize: 20, marginBottom: 10}}>Address</Text>
                <TextInput style={{ height: 120, backgroundColor: 'white', fontSize: 14, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 5, color: 'gray'
                             }}
                />
            </View>

            <View style={styles.center}>
                <Pressable style={{ backgroundColor: "#96E765", width: 180, height: 50,
                                    alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 5, marginTop: 100, marginBottom: 20}}
                                    onPress={register}>
                    <Text style={{color: "black", fontSize: 18}}>Register</Text>
                </Pressable>
            </View>

            <View style={styles.container}>
                <Text style={{color: "black"}}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={login}>
                    <Text style={{color: "#96E765"}}>Login</Text>
                </TouchableOpacity>
            </View>   

        </ScrollView>
    )
}

export default Register;
