import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from "axios"
// import storage from '@react-native-firebase/storage';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC76Om2gSTAL4vInLxKAbss7_QrnNcZ1uU",
  authDomain: "userprofile-e8f12.firebaseapp.com",
  projectId: "userprofile-e8f12",
  storageBucket: "userprofile-e8f12.appspot.com",
  messagingSenderId: "910683641114",
  appId: "1:910683641114:web:e2788e290e26a6441208a3"
};


const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const storage = getStorage(app)
const Predict = (name) => {
  const newName = name.route.params.name
  const category = [apple, cherry, corn, grape, peach, potato, tomato]
  const apple = ['Apple___Apple_scab', 'Apple___Black_rot', 'Apple___Cedar_apple_rust', 'Apple___healthy']
  const cherry = ['Cherry___Powdery_mildew', 'Cherry___healthy']
  const corn = ['Corn___Cercospora_leaf_spot Gray_leaf_spot', 'Corn___Common_rust', 'Corn___Northern_Leaf_Blight',
    'Corn___healthy']
  const grape = ['Grape___Black_rot', 'Grape___Esca_(Black_Measles)',
    'Grape___Leaf_blight_(Isariopsis_Leaf_Spot)', 'Grape___healthy']
  const peach = ['Peach___Bacterial_spot', 'Peach___healthy']
  // const cherry = ['Pepper_bell___Bacterial_spot', 'Pepper_bell___healthy',]
  const potato = ['Potato___Early_blight', 'Potato___Late_blight', 'Potato___healthy']
  // 'Raspberry___healthy',
  //   'Soybean___healthy', 'Squash___Powdery_mildew', 'Strawberry___Leaf_scorch', 'Strawberry___healthy',
  const tomato = ['Tomato___Bacterial_spot', 'Tomato___Early_blight', 'Tomato___Late_blight', 'Tomato___Leaf_Mold',
    'Tomato___Septoria_leaf_spot', 'Tomato___Spider_mites Two-spotted_spider_mite', 'Tomato___Target_Spot',
    'Tomato___Tomato_Yellow_Leaf_Curl_Virus', 'Tomato___Tomato_mosaic_virus', 'Tomato___healthy']

  // const predict = () => {

  //   // const storageRef = ref(storage, `images/profile/image.jpg`)
  //   const reference = ref(storage, 'images/' + new Date().getTime() + '.jpg');
  //   console.log(reference)
  //   const task = reference.putFile(image.uri);
  //   console.log(task)

  //   task.on("state_changed", (snapshot) => {
  //     // setLoadingImg(true)
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
  //     console.log("Profile photo upload is " + progress + "% done")
  //   }, (error) => {
  //     console.log(error.message)
  //   }, () => {
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       console.log("File available at", downloadURL)
  //       // setData({ ...data, imageURL: downloadURL })
  //       axios.post("https://fb73-2402-8100-2724-d678-685e-d9a-2ae6-2a47.ngrok-free.app/predict", { downloadURL }).then(response => {
  //         console.log(response.data)
  //       }).catch(err => {
  //         console.log(err)
  //       })
  //     })
  //     // setLoadingImg(false)
  //     // setImagePreview(null)
  //   })
  // }

  const [image, setImage] = useState(null);
  const [txt, setTxt] = useState('')
  const formData = new FormData()

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,

    });
    if (!result.canceled) {
      // formData.append('image', {
      //   uri: result.assets[0].uri,
      //   name: 'image.jpg',
      //   type: 'image/jpeg',
      // });
      setImage(result.assets[0]);
    }
  };

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,

    });

    if (!result.canceled) {
      //console.log(result)

      formData.append('image', {
        uri: result.assets[0].uri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      setImage(result.assets[0]);
    }

  };

  const predictFun = () => {
    axios.post(" https://8cbf-27-97-70-87.ngrok-free.app/predict", { image: `data:image/png;base64,${image.base64}`, name: newName }).then(response => {
      console.log(response.data[0])
      const maxIndex = response.data[0].indexOf(Math.max(...response.data[0]));
      console.log(maxIndex, [maxIndex])
      let disc = []
      if (newName === "apple") disc = apple
      else if (newName === "cherry") disc = cherry
      else if (newName === "corn") disc = corn
      else if (newName === "potato") disc = potato
      else if (newName === "tomato") disc = tomato
      else if (newName === "peach") disc = peach
      else if (newName === "grape") disc = grape
      setTxt(disc[maxIndex])

    }).catch(err => {
      console.log(err)
    })
  }



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
        <TouchableOpacity onPress={predictFun}>
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
    backgroundColor: '#fff',
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

export default Predict