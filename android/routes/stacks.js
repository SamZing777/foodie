import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Index from '../screens/index';
import About from '../screens/about';
import { StackActions } from '@react-navigation/native';
import { TailwindProvider } from "tailwindcss-react-native";


const Stack = createNativeStackNavigator();

const ScreenStack = () =>{
    return(
        <TailwindProvider>
            <Stack.Navigator 
                initialRouteName="Index"
                screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
                }}>
                <Stack.Screen name="Index" component={Index} />
                <Stack.Screen name="About" component={About} />
            </Stack.Navigator>
        </TailwindProvider>
    )
}

export default ScreenStack;
