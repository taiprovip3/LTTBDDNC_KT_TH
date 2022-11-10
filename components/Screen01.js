import { View, Text } from 'react-native';
import React from 'react';
import { Box, Button, Center, FlatList, HStack, Image, NativeBaseProvider, Pressable, ScrollView } from 'native-base';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import cream1 from '../assets/icream1.png';
import { MaterialIcons } from '@expo/vector-icons';



export default function Screen01({ navigation }) {

    const data= require("../data");
    const renderItem = ({ item }) => (
        <OneItem item={item} />
    );
    function OneItem ({ item }) {
        return (
            <Pressable onPress={() => navigation.navigate("Screen02", {item: item}) }>
            <Center>
                <Box>
                    <Image source={cream1} size={60} alt="lcream1" />
                    <Text>{item.name}</Text>
                    <Text>{item.description}</Text>
                    <Text style={{ color:'red' }}>${item.price}</Text>
                </Box>
            </Center>
            </Pressable>
        )
    }

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
      
      <HStack justifyContent="space-between" py="3">
        <Text>Popular Icream:</Text>
        <Button>View all</Button>
      </HStack>


        <FlatList data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />

        <Center>
            <Box>
                <Image source={cream1} size={60} alt="lcream1" />
                <Text>Creamy ICe</Text>
                <Text>Chocolate fouder</Text>
                <Text style={{ color:'red' }}>$10.000</Text>
            </Box>
        </Center>

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