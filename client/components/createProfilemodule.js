// import React, {Component} from 'react';
// import {View, Text, Button} from 'react-native';
// //import { render } from "react-dom";
// import info from "./infoProfile.json"

// //import Form from "react-jsonschema-form";


// class Profilemodule extends Component {

//   checkPlatform(){
//     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//     if (/iPhone/.test(userAgent) && !window.MSStream) return "ios"
//     else if (/android/i.test(userAgent)) return "android"
//   }

//   renderSwitch(obj, i){
//     switch (obj.type){
//       case 'text':
//         return <Text id={obj.id} style={obj.style} key={i}>{obj.content}</Text>
//        /// case '':
//        //  return <Button title={obj.title}  key={i}>{obj.content/>
//       default:
//         return null
//     }
//   }


//   render(){
//     return (
//       <View className={info.container.class} style={info.container.style}>
//         {info.page.map((obj, i) => this.renderSwitch(obj, i))}
//       </View>
//     )
//   }
  

// }

// export default Profilemodule;

import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'


const createProfilemodule = props => {
  return (
    <View style={styles.container}>
      
      <Text>Email:</Text>
      <TextInput style={styles.input} />
      <Text>Phone:</Text>
      <TextInput style={styles.input} />
      <Text>First:</Text>
      <TextInput style={styles.input} />
      <Text>Last:</Text>
      <TextInput style={styles.input} />
      <Text>ZipCode:</Text>
      <TextInput style={styles.input} />
      <TouchableOpacity>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}


export default createProfilemodule;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250

  }
})
