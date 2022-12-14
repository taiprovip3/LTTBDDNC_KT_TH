import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Center, HStack, Image, NativeBaseProvider } from 'native-base';
import { AntDesign, Entypo } from '@expo/vector-icons';
import cream1 from '../assets/icream1.png';

export default function Screen02({ route, navigation }) {

    const { item } = route.params;
    const listItem = require("../listItem");
    console.log(item);
    const [quantity, setQUantity] = useState(0);
    const handleMoveToScreen03 = () => {
        if(quantity <= 0 ){
            alert('Vui long quantity > 0')
            return;
        }
        const newItem = {...item, quantity: quantity};
        // navigation.navigate("Screen03", {newItem: newItem});
        console.log('n = ', newItem);
        listItem.push(newItem);
        navigation.navigate("Screen03", {newItem: newItem, listItem: listItem});
    }


  return (
    <NativeBaseProvider>


      <Text>Screen02</Text>
      <HStack justifyContent="space-around">
        <Entypo name="arrow-with-circle-left" size={24} color="black" />
        <Text>Details</Text>
        <AntDesign name="heart" size={24} color="black" />
      </HStack>


      <Center>
        <Box>
            <Image source={cream1} size={100} alt="cream1" />
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>${item.price}</Text>
            <Text>Quantity:</Text>
            <HStack space={3}>
                <AntDesign name="minus" size={24} color="black" onPress={() => setQUantity(quantity-1)} />
                <Text>{quantity}</Text>
                <AntDesign name="plus" size={24} color="black" onPress={() => setQUantity(quantity+1)} />
            </HStack>
            <Button onPress={() => handleMoveToScreen03()}>Add to cart</Button>
        </Box>
      </Center>


    </NativeBaseProvider>
  )
}