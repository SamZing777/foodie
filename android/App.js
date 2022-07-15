/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

/// import TabNavigation from './routes/tab';
import ScreenStack from './routes/stacks';


const App = () =>{

  return (
    <NavigationContainer>
      <ScreenStack />
    </NavigationContainer>
  )
}

export default App;
