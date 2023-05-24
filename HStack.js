import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home';
import Disease from './Disease';
import DiseaseInfo from './DiseaseInfo';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

const HStack = () => {
   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: false
         }}>
         <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Disease" component={Disease} />
         <Stack.Screen name="DiseaseInfo" component={DiseaseInfo} />
      </Stack.Navigator>
   )
}

export default HStack

const styles = StyleSheet.create({})