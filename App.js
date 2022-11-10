import {useState, useCallback} from 'react';
import { Text, View, StyleSheet, FlatList, Image, Button, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';
import Screen03 from './components/Screen03';
// import { v4 } from 'uuid';

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen01"
        component={Screen01}
        options={{ title: 'Home', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen
        name="Screen02"
        component={Screen02}
        options={{ title: 'Screen02 - Details', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
      <Stack.Screen
        name="Screen03"
        component={Screen03}
        options={{ title: 'Screen03 - Yor cart', headerStyle:{backgroundColor: '#1f67db'}, headerTintColor: '#fff', headerTitleStyle: {fontWeight: 'bold'} }}
      />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}