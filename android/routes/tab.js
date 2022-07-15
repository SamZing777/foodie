import React from 'react';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; 

import Index from '../screens/index';
// import Apply from '../screens/apply';
import Customer from '../screens/customer';
import Settings from '../screens/settings';


const TabNavigation = () => {

  const Tab = createMaterialBottomTabNavigator();

  return(
      <Tab.Navigator>
        <Tab.Screen name="Index" component={Index} options={{ tabBarIcon: (tabInfo) => (
          <Icon
            name="home"
            color={tabInfo.tintColor}
          />
        ), }} />
        

        <Tab.Screen name="Customer" component={Customer} options={{ tabBarIcon: (tabInfo) => (
          <Icon
            name="person"
            color={tabInfo.tintColor}
          />
        ), }} />

        <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: (tabInfo) => (
          <Icon
            name="settings"
            color={tabInfo.tintColor}
          />
        ), }} />

      </Tab.Navigator>     
  )
}

export default TabNavigation;
