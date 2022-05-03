import { View, Text, Image } from 'react-native'
import React from 'react'

const FileViewer = ({route}) => {
  return (
    <View>
      <Text>FileViewer</Text>
      <Image
         source={{
           uri:route.params.data[0]
         }}
         style={{width:"90%",height:"70%", margin:20}}
      >
     
      </Image>
    </View>
  )
}

export default FileViewer