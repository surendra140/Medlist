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
  const [date, setDate] = useState(null);
  const [patientName, setPatientName] = useState(null);
  const [HosptName, setHosptName] = useState(null);

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
      date:date,
      patientName:patientName,
      HosptName: HosptName,
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
<> 
    <View style={{flexDirection: 'row',marginLeft:5}}>
            <Image style={styles.img} source={require('../images/left-arrow.png')}  />
           <Text style={{fontWeight: 'bold', color: "black", fontSize: 18, justifyContent: 'flex-start', padding: 20}}>
            Upload Records
          </Text>
        </View>
    <View style={{
    }}>

    <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold', padding:15}}>Select File</Text>
   
    <View style={styles.container}>
     
     <TextInput placeholder='Title' style={styles.InputText} value={title} onChangeText={setTitle}></TextInput>
     <TextInput placeholder='Date' style={styles.InputText} value={date} onChangeText={setDate}></TextInput>
     <TextInput placeholder='Patient Name' style={styles.InputText} value={patientName} onChangeText={setPatientName}></TextInput>
     <TextInput placeholder='Hospital Name' style={styles.InputText} value={HosptName} onChangeText={setHosptName}></TextInput>
    
     </View>

     <Text style={{color: '#000', fontSize: 16, marginLeft:15, fontWeight:'500' }}>Preview</Text>
     
 
   <View style={styles.btnContainer}>
   <Image source={{uri :image}} style={styles.imgBox}/>

    <TouchableOpacity style={styles.btn} onPress={choosePhotoFromLibrary}>
           <Text style={styles.btnText}>Choose File</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.btn}onPress={submitRecords} >
           <Text style={styles.btnText}>Upload File</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ViewData')} >
           <Text style={styles.btnText}>View Data</Text>
       </TouchableOpacity>
       </View>
   </View>
   </>
  )
}

export default MedicalRecords;
const styles = StyleSheet.create({
  container: {
    width:'100%',
   paddingLeft:20,
   paddingRight:20,
   paddingBottom:20,
  },
  img:{
    width: 20, height: 20, 
    marginTop: 22
    
  },
  InputText:{
    width: '100%',
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
}, 
btn:{
       marginTop:10,
       borderColor: "black",
       borderWidth:0.5,
       width:"90%",
       height:50,
       justifyContent:'center',
       borderRadius:8
},
btnText:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#000',
  textAlign:'center'
},
imgBox: {
  marginTop:10,
  marginBottom:10,
  width: "90%", 
  height: 200,
  borderWidth:1,
  borderColor:'blue',
},
btnContainer:{
  justifyContent:"center",
  alignItems:'center'
},
text1:{

}

 
});