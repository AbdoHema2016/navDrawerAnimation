/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Drawer from './src/navigation/Drawer';
function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}

export default App;
