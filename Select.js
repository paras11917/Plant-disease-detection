import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import Predict from './Predict';



const categories = [
   { name: 'cherry', image: require('./assets/cherry.jpg') },
   { name: 'grape', image: require('./assets/grape.jpg') },
   { name: 'apple', image: require('./assets/apple.jpg') },
   { name: 'peach', image: require('./assets/peach.jpg') },
   { name: 'corn', image: require('./assets/corn.jpg') },
   { name: 'potato', image: require('./assets/potato.jpg') },
   { name: 'tomato', image: require('./assets/tomato.jpg') }
];

const Select = ({ navigation }) => {

   return (
      <View style={styles.categoryContainer}>
         <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            paddingVertical: 15
         }}>Select to Predict</Text>
         <View style={{ flexDirection: "row" }}>

            <ScrollView vertical showsVerticalScrollIndicator={false}>
               {categories.map((category, index) => (
                  <TouchableOpacity onPress={() => navigation.navigate('Predict', { name: category.name })} style={styles.categoryBox} key={index}>
                     <Image source={category.image} style={styles.categoryImage} />
                  </TouchableOpacity>
               ))}
            </ScrollView>
         </View>
      </View>
   )
}

export default Select

const styles = StyleSheet.create({
   categoryContainer: {
      paddingTop: 40,
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 10,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
   },
   categoryBox: {
      width: 300,
      height: 200,
      aspectRatio: 1,
      marginVertical: 8,
      margin: 20,
      borderRadius: 12
   },
   categoryImage: {
      flex: 1,
      width: 300,
      height: 200,
      borderRadius: 12
   },
   categoryName: {
      fontWeight: 'bold',
   },
})