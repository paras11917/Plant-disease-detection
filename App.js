import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import Save from './Save';
import Predict from './Predict';
import About from './About';
import Profile from './Profile';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Avatar, Switch } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, Text, SwitchComponent } from 'react-native';
import Select from './Select';
import PStack from './PStack';
import HStack from './HStack';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();




export default function App() {
   const [isDarkMode, setIsDarkMode] = useState(false);
   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

   const customDrawerContent = (props) => {
      return (
         <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
               <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                  <Avatar.Image source={require('./assets/icon.png')} size={80} />
                  <Text style={styles.title}>John Doe</Text>
               </TouchableOpacity>
            </View>
            <DrawerContentScrollView {...props}>
               <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={styles.bottomDrawerSection}>
               <View style={styles.darkModeContainer}>
                  <Text style={styles.darkModeText}>Dark Mode</Text>
                  <SwitchComponent value={isDarkMode} onValueChange={toggleDarkMode} />
               </View>
            </View>
         </View>
      );
   };
   return (
      <NavigationContainer>
         {/* 
         <Drawer.Navigator drawerContent={(props) => customDrawerContent(props)}>
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Save" component={Save} />
         </Drawer.Navigator> */}

         <Tab.Navigator
            screenOptions={({ route }) => ({
               headerShown: false,
               tabBarIcon: ({ color, size }) => {
                  let iconName;

                  if (route.name === 'Home') {
                     iconName = 'home-outline';
                  } else if (route.name === 'Save') {
                     iconName = 'bookmark-outline';
                  } else if (route.name === 'Predict') {
                     iconName = 'analytics-outline';
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
               },

               "tabBarActiveTintColor": "green",
               "tabBarInactiveTintColor": "gray",
               "tabBarStyle": [
                  {
                     "display": "flex",
                     paddingVertical: 8,

                  },
                  null
               ]

            })}
         >
            <Tab.Screen name="Home" component={HStack} />
            <Tab.Screen name="Predict" component={PStack} />
            <Tab.Screen name="Save" component={Save} />
         </Tab.Navigator>
      </NavigationContainer>
   );
};

const styles = StyleSheet.create({
   drawerContent: {
      flex: 1,
   },
   userInfoSection: {
      paddingLeft: 20,
      paddingTop: 20,
      paddingBottom: 20,
   },
   title: {
      fontSize: 16,
      marginTop: 8,
      fontWeight: 'bold',
   },
   bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1,
      backgroundColor: '#fff',
   },
   darkModeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 16,
   },
   darkModeText: {
      fontSize: 16,
   },
});