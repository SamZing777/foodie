import React, { useState, useEffect } from "react";
import styles from "../styles/styles";

import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
    Pressable
  } from 'react-native';

const Settings = (props) =>{

    const[name, setName] = useState('');
    const[cvv, setCVV] = useState(0);
    const[card, setCard] = useState(0);
    const[email, setEmail] = useState('');
    const[expiry, setExpiry] = useState('');

    const[topup, setTopUp] = useState([]);

    const fetchTopUp = () =>{
        fetch('https://snaploan.herokuapp.com/top-up', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(topup),
            })
            .then(response => response.json())
            .then(topup => {
            console.log('Success:', topup);
                setTopUp(topup);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
    }
    useEffect(() => {
        fetchTopUp();
       },[props]);

    const bankDetail = () =>{
        Alert.alert("This button takes you to bank detail page");
    }

    const notify = () =>{
        Alert.alert("This button notifies users");
    }

    const inviteOthers = () =>{
        Alert.alert("This button invite others");
    }

    const logOut = () =>{
        Alert.alert("This button logs user out");
    }

    return(
        <ScrollView>   
            <View style={styles.containerLeft}>
                <Text style={{ color: "black", fontSize: 24}}> Top up Method </Text>
                <Text style={{ color: "black", fontSize: 18, marginTop: 10}}> Update your billing details and address. </Text>   
            </View> 

            <View style={styles.containerLeft}>
                <Text style={{ color: "black", fontSize: 21, marginBottom: 60 }}> Card details </Text>
            </View>   

            <View style={styles.containerLeftInput}>
                <Text style={{ color: "black", fontSize: 18, marginTop: 10}}> Name on card </Text>   
                <TextInput onChangeText = {(e) => {
                    setName(e)}}
                     style={{ height: 40, backgroundColor: 'white', fontSize: 20, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 20, marginTop: 10, color: 'gray'
                             }}
                    placeholder="Enter name on card"
                    placeholderTextColor="#ccc"
                    value={name}
                />
            </View>    

            <View style={styles.containerLeftInput}>
                <Text style={{ color: "black", fontSize: 18, marginTop: 10}}> Card number </Text>   
                <TextInput onChangeText = {(e) => {
                        setCard(e)}}
                     style={{ height: 40, backgroundColor: 'white', fontSize: 20, 
                                borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                marginBottom: 20, marginTop: 10, color: 'gray'
                             }}
                    placeholder="1234 1234 1234 1234"
                    placeholderTextColor="#ccc"
                    keyboardType='numeric'
                    maxLength={16}
                    value={card}
                />
            </View> 

            <View>
            <View style={styles.cvv}>
                <Text style={{ color: "black", fontSize: 18 }}>CVV</Text>
                <Text style={{ color: "black", fontSize: 18 }}>Expiry</Text>
            </View>

                <View style={styles.cvv}>
                    <TextInput onChangeText = {(e) => {
                        setCVV(e)}}
                     style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                        borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                        color: 'gray', width: 120, textAlign: 'center'
                                    }}
                            placeholder="***"
                            placeholderTextColor="#ccc"
                            keyboardType='numeric'
                            maxLength={3}
                            value={cvv}
                    />
                    <TextInput onChangeText = {(e) => {
                        setExpiry(e)}}
                     style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                        borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                        color: 'gray', width: 120, textAlign: 'center'
                                    }}
                            placeholder="06/24"
                            placeholderTextColor="#ccc"
                            keyboardType='numeric'
                            maxLength={4}
                            value={expiry}
                    />
                </View>
            </View>

            <View style={styles.containerLeft}>
                <Text style={{ color: "black", fontSize: 21, marginTop: -10 }}> Email </Text>
                <Text style={{ color: "black", fontSize: 18, marginTop: 10 }}> 
                    Invoices will be sent to this email 
                </Text>
                <TextInput onChangeText = {(e) => {
                    setEmail(e)}}
                 style={{ height: 40, backgroundColor: 'white', fontSize: 14, 
                                        borderWidth: 1, borderRadius: 5, borderColor: "#ccc",
                                        color: 'gray', marginTop: 10, marginBottom: 120
                                    }}
                            placeholder="olivia_kem@gmail.com"
                            placeholderTextColor="#ccc"
                            value={email}
                />
            </View>

            <View style={styles.container}>
                <TouchableOpacity onPress={bankDetail}>
                    <View style={styles.notifications}>
                        <Text style={{color: "black", fontSize: 18, textAlign: 'center',
                                    paddingTop: 30}}>
                                Bank Detail
                         </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={notify}>
                    <View style={styles.notifications}>
                        <Text style={{color: "black", fontSize: 18, textAlign: 'center',
                                    paddingTop: 30}}>
                                Notifications
                         </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={inviteOthers}>
                    <View style={styles.notifications}>
                        <Text style={{color: "black", fontSize: 18, textAlign: 'center',
                                    paddingTop: 30}}>
                                Invite others
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>  

            <View style={styles.center}>
                <Pressable style={{ backgroundColor: "#E86C6C", width: 180, height: 50,
                                    alignItems: 'center', justifyContent: 'center',
                                    borderRadius: 5, marginTop: 100}}
                                    onPress={logOut}>
                    <Text>Logout</Text>
                </Pressable>
            </View>


        </ScrollView>
    )
}

export default Settings;
