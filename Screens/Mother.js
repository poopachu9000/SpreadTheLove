import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements';
export default class Mother extends Component{
render(){
  return(
    <View>
     <Header 
     centerComponent = {{
       text: 'Mother',
       
     }}
    />       
    <Image source = {require('../assets/mother.png')} style = {{position:'absolute', top:180, left:120}}/>

    <Text style = {{fontSize: 20,position:"absolute", top:480, marginLeft:50}}> 
    Mothers day is on May 8th (Second Sunday) {'\n'}
    Parents day is on July 24th (4th Sunday){'\n'}

  </Text>


  <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('MotherCard')}} style = {{position:'absolute', top:700, left:100,  backgroundColor: 'yellow', width:200, height:50}}>
  <Text style = {{fontSize:40,marginLeft:50}}> Card</Text>
</TouchableOpacity>

<TouchableOpacity onPress ={()=>{this.props.navigation.navigate('FamillyScreen')}} style = {{position:'absolute', top:765}}>
  <Image source = {require('../assets/backButton.png')} style = {{backgroundColor: 'green', width:80, height:80}}/>
</TouchableOpacity>
    </View>
  )
}
}