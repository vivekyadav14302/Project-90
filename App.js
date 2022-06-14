import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TwoScreen from './screens/TwoScreen';
import ThreeScreen from './screens/ThreeScreen';
import OneScreen from './screens/OneScreen';


const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator 
    initialRouteName = 'OneScreen'
    screenOptions = {{headerShown: false}}
    >
      <Stack.Screen name = 'Two Screen' component = {TwoScreen} />
      <Stack.Screen name = 'Three Screen' component = {ThreeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App