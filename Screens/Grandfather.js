import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements';
export default class Grandfather extends Component{
render(){
  return(
    <View>
     <Header 
     centerComponent = {{
       text: 'Spread the Love',
       
     }}
    />       
    <Image source = {require('../assets/grandfather.png')} style = {{position:'absolute', top:180, left:80, height:300, width:200}}/>

    <Text style = {{fontSize: 20,position:"absolute", top:480, marginLeft:50}}> 
    Grandparents day is on September 11th (First Sunday After Labor Day){'\n'}
    World Day for Grandparents and the Elderly is the Fourth Sunday of July{'\n'}
  </Text>


  <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('GrandfatherCard')}} style = {{position:'absolute', top:700, left:100,  backgroundColor: 'yellow', width:200, height:50}}>
  <Text style = {{fontSize:40,marginLeft:50}}> Card</Text>
</TouchableOpacity>

<TouchableOpacity onPress ={()=>{this.props.navigation.navigate('FamillyScreen')}} style = {{position:'absolute', top:765}}>
  <Image source = {require('../assets/backButton.png')} style = {{backgroundColor: 'green', width:80, height:80}}/>
</TouchableOpacity>
    </View>
  )
}
}