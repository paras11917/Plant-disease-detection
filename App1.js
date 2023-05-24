import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as tf from '@tensorflow/tfjs'
import { decodeJpeg } from '@tensorflow/tfjs-react-native';
export default function App() {


  const disc = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy',
    'Background_without_leaves', 'Blueberry___healthy', 'Cherry___Powdery_mildew', 'Cherry___healthy',
    'Corn___Cercospora_leaf_spot Gray_leaf_spot', 'Corn___Common_rust', 'Corn___Northern_Leaf_Blight',
    'Corn___healthy', 'Grape___Black_rot', 'Grape___Esca_(Black_Measles)',
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy', 'Orange___Haunglongbing_(Citrus_greening)',
    'Peach___Bacterial_spot', 'Peach___healthy', 'Pepper_bell___Bacterial_spot', 'Pepper_bell___healthy',
    'Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy', 'Raspberry___healthy',
    'Soybean___healthy', 'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy',
    'Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']


  const [image, setImage] = useState(null);
  const [txt,setTxt] = useState('')

  const pickImage = async () => {
     ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
     }, (response) => {
       console.log(response.data)
       
       if (!response.didCancel) {
         setImage(response);
        }
      });
  };

  const predict = async () => {
    const response = await fetch(image.uri);
    const buffer = await response.arrayBuffer();
    const imgData = await decodeJpeg(new Uint8Array(buffer));
    if (imgData) {
      console.log(imgData)
      const tensor = tf.browser.fromPixels(imgData);
    const resizedTensor = tf.image.resizeBilinear(tensor, [256, 256]);
    const expandedTensor = resizedTensor.expandDims();
    
    const model = await tf.loadLayersModel('./catdog_tfjs_model/model.json');
    const prediction = model.predict(expandedTensor)}
    if (prediction) {
      prediction.print();
      console.log(prediction)
      data = prediction.dataSync()
      console.log(data)
      for (let i = 0; i < 38; i++) {
        if (data[i] === 1) {
          setTxt(disc[i])
          break
        }
      }
      

    }
  }

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result);
    }
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <Text style={styles.button}>Pick an image from gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={takePicture}>
        <Text style={styles.button}>Take a picture with camera</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image.uri }} style={styles.image} />}
      {image &&
        <TouchableOpacity onPress={predict}>
        <Text style={styles.button}>Predict</Text>
        </TouchableOpacity>
      }
      <Text>{txt}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginTop: 20,
  },
});