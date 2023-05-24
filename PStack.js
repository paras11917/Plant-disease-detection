import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Select from './Select';
import Predict from './Predict';

const Stack = createNativeStackNavigator()

const PStack = () => {

   return (
      // <NavigationContainer>
      <Stack.Navigator
         screenOptions={{
            headerShown: false
         }}>
         <Stack.Screen name="Select" component={Select} />
         <Stack.Screen name="Predict" component={Predict} />
      </Stack.Navigator>
      // </NavigationContainer>
   )
}


export default PStack

const styles = StyleSheet.create({})