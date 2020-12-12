import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import About from '../screens/About';
import Settings from '../screens/Settings';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Screens = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: null,
        headerLeft: () => (
          <TouchableOpacity onPress={navigation.openDrawer}>
            <Text>Menu</Text>
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
export default () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Screens" component={Screens} />
    </Drawer.Navigator>
  );
};
