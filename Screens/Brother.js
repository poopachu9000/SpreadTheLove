import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements';
export default class Brother extends Component{
render(){
  return(
    <View>
     <Header 
     centerComponent = {{
       text: 'Spread the Love',
       
     }}
    />       
    <Image source = {require('../assets/brother.jpeg')} style = {{position:'absolute', top:180, left:100}}/>

    <Text style = {{fontSize: 20,position:"absolute", top:480, marginLeft:50}}> 
    Brothers day is on May 24th {'\n'}
    Celebrated in the US since 2005{'\n'}
     Siblings Day is on April 10th in the US/Canada{'\n'}
     Brothers and Sisters Day is on May 31st in Europe{'\n'}
  </Text>


  <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('BrotherCard')}} style = {{position:'absolute', top:700, left:100,  backgroundColor: 'yellow', width:200, height:50}}>
  <Text style = {{fontSize:40,marginLeft:50}}> Card</Text>
</TouchableOpacity>

<TouchableOpacity onPress ={()=>{this.props.navigation.navigate('FamillyScreen')}} style = {{position:'absolute', top:765}}>
  <Image source = {require('../assets/backButton.png')} style = {{backgroundColor: 'green', width:80, height:80}}/>
</TouchableOpacity>
    </View>
  )
}
}