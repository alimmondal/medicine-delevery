
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import CheckOutScreen from './src/screens/CheckOutScreen';




function App(){
    return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component= {HomeScreen}></Stack.Screen>
          <Stack.Screen name="List" component= {ListScreen}></Stack.Screen>
          <Stack.Screen name="Order" component= {CheckOutScreen}></Stack.Screen>
       </Stack.Navigator>
     </NavigationContainer>
    );
  
}

export default App;
















// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello, React Native app!</Text>
//       <StatusBar style="auto" />
//       <Image
//           source={{
//             uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
//           }}
//           style={{ width: 200, height: 200 }}
//         />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

