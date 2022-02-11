import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import {Header} from 'react-native-elements';
export default class GrandmotherCard extends Component{
render(){
  return(
    <View>
     <Header 
     centerComponent = {{
       text: 'Grandmother',
       
     }}
    />       
  <Image source = {require('../assets/grandmotherCardImage.png')} style = {{width:300,height:400,position:'absolute', top:100,left:50}}/>
  
    <Image source = {require('../assets/My_App_Diagram-removebg-preview.png') } style = {{position:'absolute', top:476,left:0,width:380,height:190}} />
  <Text style = {{position:'absolute', top:660,left:2,width:380,height:190}}>To send this card to a loved one please follow these steps. 1:Take a screenshot by pressing the volume and power button simultaneously.                                                           2: Tap on the screenshot that should appear in the bottom left of your screen.                                                            3:Once within the screenshot screen drag the edges of the </Text>
  <Text style = {{position:'absolute', top:760,left:80,width:380,height:190}}> photo to crop it, so only the card will be sent. 
</Text>
 <Text style = {{position:'absolute', top:775,left:80,width:380,height:190}}> 4: Press the share button in the top right to 
</Text>
<Text style = {{position:'absolute', top:790,left:80,width:380,height:190}}> see the sharing options.
</Text>

<TouchableOpacity onPress ={()=>{this.props.navigation.navigate('FamillyScreen')}} style = {{position:'absolute', top:765}}>
  <Image source = {require('../assets/backButton.png')} style = {{backgroundColor: 'green', width:80, height:80}}/>
</TouchableOpacity>
    </View>
  )
}
}