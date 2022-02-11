import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements';
export default class Father extends Component{
render(){
  return(
    <View>
     <Header 
     centerComponent = {{
       text: 'Spread the Love',
       
     }}
    />       
    <Image source = {require('../assets/father.png')} style = {{position:'absolute', top:180, left:120,height:300,width:150}}/>

    <Text style = {{fontSize: 20,position:"absolute", top:480, marginLeft:50}}> 
    Fathers day is on June 19th in the US (Third Sunday) {'\n'}
    The Catholic Church celebrates Fathers Day as "Saint Josephs Day", on March 19th{'\n'}
    Parents day is on July 24th (4th Sunday){'\n'}

  </Text>


  <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('FatherCard')}} style = {{position:'absolute', top:700, left:100,  backgroundColor: 'yellow', width:200, height:50}}>
  <Text style = {{fontSize:40,marginLeft:50}}> Card</Text>
</TouchableOpacity>

<TouchableOpacity onPress ={()=>{this.props.navigation.navigate('FamillyScreen')}} style = {{position:'absolute', top:765}}>
  <Image source = {require('../assets/backButton.png')} style = {{backgroundColor: 'green', width:80, height:80}}/>
</TouchableOpacity>
    </View>
  )
}
}