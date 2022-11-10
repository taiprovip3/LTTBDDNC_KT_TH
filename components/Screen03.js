import { View, Text } from 'react-native'
import React from 'react'
import { Box, Button, Center, FlatList, HStack, Icon, Input, NativeBaseProvider, VStack, Image } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import cream1 from '../assets/icream1.png';

export default function Screen03({route, navigation}) {

    const { newItem, listItem} = route.params;
    console.log(newItem);
    const data=require("../data");
    const renderItem = ({ item }) => (
        <OneItem item={item} />
    );
    function OneItem ({ item }) {
        return (
            <Center>
                <Box>
                    <HStack>
                        <Box><Image source={cream1} alt="cream1" size={100}/></Box>
                        <Box>
                            <Text>{newItem.name}</Text>
                            <Text>{newItem.price}</Text>
                        </Box>
                    </HStack>
                </Box>
            </Center>
        )
    }

  return (
    <NativeBaseProvider>
      <Text>Screen03</Text>

      <HStack justifyContent="space-between">
        <Entypo name="arrow-bold-left" size={24} color="black" />
        <VStack>
            <Text>Your cart</Text>
            <Text>(3 items)</Text>
        </VStack>
      </HStack>

      <FlatList 
        data={listItem}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

      <Input 
        placeholder='Promote Code...'
        InputRightElement={
            <Button>Add</Button>
        }
        />

        <HStack justifyContent="space-between">
            <Text>Discount:</Text>
            <Text>$0.0</Text>
        </HStack>
        <HStack justifyContent="space-between">
            <Text>Total price shipping:</Text>
            <Text>$16.00</Text>
        </HStack>
    </NativeBaseProvider>
  )
}