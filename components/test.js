// import { View } from 'react-native'
// import React, {useEffect, useState} from 'react'
// import { Avatar, Box, FlatList, Heading, HStack, NativeBaseProvider, Spacer, Text, VStack } from 'native-base';

// export default function App() {

//   const [dataList, setDataList] = useState([]);
//   const data = require("./data");

//   useEffect(() => {
//     fetch('https://633e4389c235b0e57521700c.mockapi.io/api/todoapp')
//     .then((res) => res.json())
//     .then((rs) => {
//       setDataList(rs);
//       console.log('DATA FETCH: ', rs);
//     })
//     .catch(err => {
//       console.log(err);
//     });
//   }, []);


//   return (
//     <NativeBaseProvider>
      
//       <Box>
//         <Heading fontSize="xl" p="4" pb="3">
//           Inbox
//         </Heading>
//         <FlatList data={data} renderItem={({
//         item
//       }) => <Box borderBottomWidth="1" _dark={{
//         borderColor: "muted.50"
//       }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
//               <HStack space={[2, 3]} justifyContent="space-between">
//                 <Avatar size="48px" source={{
//             uri: item.avatarUrl
//           }} />
//                 <VStack>
//                   <Text _dark={{
//               color: "warmGray.50"
//             }} color="coolGray.800" bold>
//                     {item.fullName}
//                   </Text>
//                   <Text color="coolGray.600" _dark={{
//               color: "warmGray.200"
//             }}>
//                     {item.recentText}
//                   </Text>
//                 </VStack>
//                 <Spacer />
//                 <Text fontSize="xs" _dark={{
//             color: "warmGray.50"
//           }} color="coolGray.800" alignSelf="flex-start">
//                   {item.timeStamp}
//                 </Text>
//               </HStack>
//             </Box>} keyExtractor={item => item.id} />
//       </Box>
//     </NativeBaseProvider>
//   )
// }