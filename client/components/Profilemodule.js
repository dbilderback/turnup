import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
//import { render } from "react-dom";
import info from "./infoProfile.json"

//import Form from "react-jsonschema-form";


class Profilemodule extends Component {

  checkPlatform(){
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPhone/.test(userAgent) && !window.MSStream) return "ios"
    else if (/android/i.test(userAgent)) return "android"
  }

  renderSwitch(obj, i){
    switch (obj.type){
      case 'text':
        return <Text id={obj.id} style={obj.style} key={i}>{obj.content}</Text>
       case 'integer':
        return <Text id={obj.id} style={obj.style} key={i}>{obj.content}</Text>
      // case 'picture':
      //   return <View id = {obj.id} style={obj.style} key={i}>Image source= {{uri: obj.source}}</View>
      
      default:
        return null
    }
  }

  render(){
    return (
      <View className={info.container.class} style={info.container.style}>
        {info.page.map((obj, i) => this.renderSwitch(obj, i))}
        
      </View>
    )
  }
  
}

export default Profilemodule;

