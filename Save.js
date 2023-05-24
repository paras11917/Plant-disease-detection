import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

const Save = () => {
  const diseases = [
    { name: 'Aphids', image: require('./assets/image.jpg') },
    { name: 'Fungal diseases', image: require('./assets/image.jpg') },
    { name: 'Bacterial diseases', image: require('./assets/image.jpg') },
    { name: 'Viral diseases', image: require('./assets/image.jpg') },
  ];
  return (
    <View style={{ backgroundColor: '#fff',flex:1 }}>
    <View style={styles.diseaseContainer}>
      <Text style={styles.diseaseTitle}>Saved Diseases</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {diseases.map((disease, index) => (
          <View style={styles.diseaseBox} key={index}>
            <Image source={disease.image} style={styles.diseaseImage} />
            <Text style={styles.diseaseName}>{disease.name}</Text>
          </View>
        ))}
      </ScrollView>
      </View>
    </View>
  )
}

export default Save

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