import { View, Text, StyleSheet,Image ,TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react';
import { useState } from 'react'
import ImagePicker from 'react-native-image-crop-picker';


import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const MedicalRecords = ({navigation}) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [title, setTitle] = useState(null);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 1200,
      height: 780,
      cropping: true,
    }).then((image) => {
      console.log(image);
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const submitRecords = async () => {
    const imageUrl = await uploadImage();
    console.log('Image Url: ', imageUrl);

    firestore()
    .collection('MedicalHistory')
    .add({
      title : title,
      postImg : imageUrl,
      postTime: firestore.Timestamp.fromDate(new Date()),
      
    })
    .then(() => {
      console.log('History Added!');
      Alert.alert('Records successfully added')
      setPost(null);
    })
    .catch((error) => {
      console.log('Something Wrong');
    })
  }

  const uploadImage = async() => {
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add TimeStamp to file
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(`MedHistory/${filename}`);
    const task = storageRef.putFile(uploadUri);

    //set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);

      setTransferred(
       Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100
      )
    });
    

    try {
        await task;

        const url = await storageRef.getDownloadURL();

        setUploading(false);
        Alert.alert(
          'Image uploaded!',
        );
        return url;

    } catch(e) {
      console.log(e);
      return null;
    }
    setImage(null);
  }

  return (
    <View style={styles.container}>
     
    <TextInput placeholder='Title'/>

    <Image source={{uri :image}} style={{width: "100%", height: 150}}/>

    <TextInput placeholder='Title' style={styles.InputText} value={title} onChangeText={setTitle}/>
    <TextInput placeholder='Date' style={styles.InputText} />

    <TouchableOpacity style={{justifyContent: 'center', alignItems:'center', marginTop:250, backgroundColor: '#eee', height: 50}} onPress={choosePhotoFromLibrary}>
           <Text style={{fontSize: 20,
               fontWeight: 'bold',
               color: '#000'}}>Choose File</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{justifyContent: 'center', alignItems:'center', marginTop: 20, backgroundColor: '#eee', height: 50}} onPress={submitRecords} >
           <Text style={{fontSize: 20,
               fontWeight: 'bold',
               color: '#000'}}>Upload File</Text>
       </TouchableOpacity>

       <TouchableOpacity style={{justifyContent: 'center', alignItems:'center', marginTop: 20, backgroundColor: '#eee', height: 50}} onPress={() => navigation.navigate('ViewData')} >
           <Text style={{fontSize: 20,
               fontWeight: 'bold',
               color: '#000'}}>View Data</Text>
       </TouchableOpacity>
   </View>
  )
}

export default MedicalRecords;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});