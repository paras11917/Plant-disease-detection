import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Disease = ({ name, navigation }) => {
   const cherry = [
      { name: 'Cherry___healthy', image: require('./assets/image.jpg') },
      { name: 'Cherry___Powdery_mildew', image: require('./assets/image.jpg') }
   ];
   const corn = [
      { name: 'Corn___healthy', image: require('./assets/image.jpg') },
      { name: 'Corn___Cercospora_leaf_spot Gray_leaf_spot', image: require('./assets/image.jpg') },
      { name: 'Corn___Common_rust', image: require('./assets/image.jpg') },
      { name: 'Corn___Northern_Leaf_Blight', image: require('./assets/image.jpg') },

   ];
   const potato = [
      { name: 'Potato___healthy', image: require('./assets/image.jpg') },
      { name: 'Potato___Early_blight', image: require('./assets/image.jpg') },
      { name: 'Potato___Late_blight', image: require('./assets/image.jpg') }
   ];
   const tomato = [
      { name: 'Tomato___healthy', image: require('./assets/image.jpg') },
      { name: 'Tomato___Tomato_mosaic_virus', image: require('./assets/image.jpg') },
      { name: 'Tomato___Bacterial_spot', image: require('./assets/image.jpg') },
      { name: 'Tomato___Early_blight', image: require('./assets/image.jpg') },
      { name: 'Tomato___Late_blight', image: require('./assets/image.jpg') },
      { name: 'Tomato___Leaf_Mold', image: require('./assets/image.jpg') },
      { name: 'Tomato___Septoria_leaf_spot', image: require('./assets/image.jpg') },
      { name: 'Tomato___Spider_mites Two-spotted_spider_mite', image: require('./assets/image.jpg') },
      { name: 'Tomato___Target_Spot', image: require('./assets/image.jpg') },
      { name: 'Tomato___Tomato_Yellow_Leaf_Curl_Virus', image: require('./assets/image.jpg') },
   ];
   const apple = [
      { name: 'Apple___healthy', image: require('./assets/image.jpg') },
      { name: 'Apple___Apple_scab', image: require('./assets/image.jpg') },
      { name: 'Apple___Black_rot', image: require('./assets/image.jpg') },
      { name: 'Apple___Cedar_apple_rust', image: require('./assets/image.jpg') },
   ];
   const peach = [
      { name: 'Peach___healthy', image: require('./assets/image.jpg') },
      { name: 'Peach___Bacterial_spot', image: require('./assets/image.jpg') }
   ];
   const grape = [
      { name: 'Grape___healthy', image: require('./assets/image.jpg') },
      { name: 'Grape___Black_rot', image: require('./assets/image.jpg') },
      { name: 'Grape___Esca_(Black_Measles)', image: require('./assets/image.jpg') },
      { name: 'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', image: require('./assets/image.jpg') },
   ];




   if (name === "corn") {
      {
         corn.map((disease, index) => (
            <TouchableOpacity onPress={() => navigation.navigate('DiseaseInfo', { name: disease.name })} style={styles.diseaseBox} key={index}>
               <Image source={disease.image} style={styles.diseaseImage} />
               <Text style={styles.diseaseName}>{disease.name}</Text>
            </TouchableOpacity>
         ))
      }
   }


   return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
         <View style={styles.diseaseContainer}>
            <Text style={styles.diseaseTitle}>Diseases</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
               {/* {if (name === "cherry") { */}
               {cherry.map((disease, index) => (
                  <TouchableOpacity onPress={() => navigation.navigate('DiseaseInfo', { name: disease.name })} style={styles.diseaseBox} key={index}>
                     <Image source={disease.image} style={styles.diseaseImage} />
                     <Text style={styles.diseaseName}>{disease.name}</Text>
                  </TouchableOpacity>
               ))}
               {/* }} */}
            </ScrollView>
         </View>
      </View>
   )
}

export default Disease

const styles = StyleSheet.create({
   diseaseContainer: {
      marginTop: 50,
      paddingHorizontal: 20,
      backgroundColor: '#fff',
   },
   diseaseTitle: {
      fontSize: 18,
      fontWeight: 'bold',
   },
   diseaseBox: {
      height: 100,
      flexDirection: 'row',
      alignItems: "center"
      // backgroundColor: 'red'

   },
   diseaseImage: {
      marginTop: 20,
      width: 100,
      height: 100,
   },
   diseaseName: {
      fontWeight: 'bold',
      marginLeft: 20
   }
})