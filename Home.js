import { Dimensions, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Disease from './Disease';

const { width } = Dimensions.get('window')

const categories = [
  { name: 'Cherry', image: require('./assets/cherry.jpg') },
  { name: 'Grape', image: require('./assets/grape.jpg') },
  { name: 'Apple', image: require('./assets/apple.jpg') },
  { name: 'Peach', image: require('./assets/peach.jpg') },
  { name: 'Corn', image: require('./assets/corn.jpg') },
  { name: 'Potato', image: require('./assets/potato.jpg') },
  { name: 'Tomato', image: require('./assets/tomato.jpg') }
];

// const diseases = [
//   { name: 'Aphids', image: require('./assets/image.jpg') },
//   { name: 'Fungal diseases', image: require('./assets/image.jpg') },
//   { name: 'Bacterial diseases', image: require('./assets/image.jpg') },
//   { name: 'Viral diseases', image: require('./assets/image.jpg') },
// ];

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./assets/cherry.jpg')} style={styles.logo} />
        <Text style={styles.brandName}>PlantAi</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={require('./assets/cherry.jpg')} style={styles.plantImage} />
        </View>
        <View style={styles.diseaseContainer}>
          <Text style={styles.diseaseTitle}>Categories</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            {categories.map((disease, index) => (
              <TouchableOpacity onPress={() => navigation.navigate('Disease', { name: disease.name })} style={styles.diseaseBox} key={index}>
                <Image source={disease.image} style={styles.diseaseImage} />
                <Text style={styles.diseaseName}>{disease.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  brandName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  plantImage: {
    width: width - 40,
    height: 200,
    borderRadius: 12
  },
  categoryContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 20
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryBox: {

  },
  categoryImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 12,
    marginTop: 15
  },
  categoryName: {
    fontWeight: 'bold',
  },
  diseaseContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  diseaseTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  diseaseBox: {
    height: 100,
    flexDirection: 'row',
    alignItems: "center",
    marginVertical: 10
    // backgroundColor: 'red'

  },
  diseaseImage: {
    marginTop: 20,
    width: 100,
    height: 100,
    borderRadius: 12
  },
  diseaseName: {
    fontWeight: 'bold',
    marginLeft: 20,
    fontSize: 20
  }
})

export default Home
