import { View, Text } from 'react-native'
import React from 'react'

export default function Screen03(route, navigation) {

    const { item, quantity } = route.params;
    console.log(item);


  return (
    <View>
      <Text>Screen03</Text>
    </View>
  )
}