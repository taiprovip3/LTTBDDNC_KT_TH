import { View, Text } from 'react-native';
import React from 'react';
import { Box, Button, Center, HStack, Image, NativeBaseProvider, ScrollView } from 'native-base';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import cream1 from '../assets/icream1.png';
import { MaterialIcons } from '@expo/vector-icons';


export default function Screen01({ navigation }) {
  return (
    <NativeBaseProvider>
    <ScrollView>

      <HStack justifyContent="space-between">
         <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
         <Text>IcYYY</Text>
         <FontAwesome5 name="calendar-alt" size={24} color="black" />
      </HStack>

      <Center>
            <Image source={cream1} alt="cream1" size={100}/>
      </Center>

      <HStack justifyContent="space-between">
        <Button>All</Button>
        <Button>Chocolate</Button>
        <Button>Vanilla</Button>
        <Button>Strawberry</Button>
      </HStack>
      
      <HStack justifyContent="space-between">
        <Text>Popular Icream</Text>
        <Button>View all</Button>
      </HStack>

      <Box>
        <Image source={cream1} size={60} alt="lcream1" />
        <Text>Creamy ICe</Text>
        <Text>Chocolate fouder</Text>
        <Text style={{ color:'red' }}>$10.000</Text>
      </Box>

      <Center><Ionicons name="md-search-circle" size={24} color="black" /></Center>

      <HStack justifyContent="space-between">
        <MaterialIcons name="home" size={24} color="black" />
        <Ionicons name="heart-circle-sharp" size={24} color="black" />
        <MaterialCommunityIcons name="cart-arrow-right" size={24} color="black" />
        <FontAwesome name="user-circle" size={24} color="black" />
      </HStack>

    </ScrollView>
    </NativeBaseProvider>
  );
}