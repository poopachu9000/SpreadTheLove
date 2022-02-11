import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';
import FamillyScreen from './FamillyScreen';

export default class Home extends Component{
render(){
  return(

    <View>
    <Header 
     centerComponent = {{
       text: 'Spread the Love',
     }}
    />       
 
    <Image source = { require('../assets/heart.png')} style = {{width:200,height:200, marginLeft:100,marginTop:120}}/>
    <Text style = {{marginLeft:10, fontSize:20}}>
Spread the Love!    </Text>
       <Text style = {{marginLeft:10, fontSize:20}}>
      This app was created with the hope of spreading more love and joy throughout the world. With this app you can view different members of your family and read about their associated holidays, events and more. Afterwards, you can view a card personalised to that family member and screenshot it, allowing you to send it to them, showing your love and appreciation for them.
    </Text>
      <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('FamillyScreen')}} style = {{backgroundColor:"red", width:200, height:50, marginLeft:100, marginTop:70}}>      
      <Text style = {{fontSize:40, marginLeft:20}}>Procceed </Text>
      </TouchableOpacity>
     </View>
  )
}
}