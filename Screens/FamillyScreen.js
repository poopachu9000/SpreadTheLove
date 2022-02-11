import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import Mother from './Mother';

export default class FamillyScreen extends Component{
render(){
  return(
    <View>
      <Header
      centerComponent = {{
        text: 'Family Tree'
      }}
      />
      <View>

      <Image source = {require('../assets/tree.jpeg')} style = {Styles.treeImage}/>
      </View>



 <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Sister')}} style = {{backgroundColor:"red", width:70, height:20,position:"absolute", left:10,top:350}}>      
      <Text style = {Styles.buttonText}> Sister</Text>
      </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Brother')}} style = {{backgroundColor:"red", width:70, height:20,position:"absolute", left:300,top:350}}>      
      <Text style = {Styles.buttonText}>Brother</Text>
      </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Mother')}} style = {{backgroundColor:"red", width:70, height:20,position:"absolute", left:70,top:290}}>      
      <Text style = {Styles.buttonText}>Mother</Text>
      </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Father')}} style = {{backgroundColor:"red", width:70, height:20,position:"absolute", left:240,top:290}}>      
      <Text style = {Styles.buttonText}> Father</Text>
      </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Grandmother')}} style = {{backgroundColor:"red", width:95, height:20,position:"absolute", left:100,top:240}}>      
      <Text style = {Styles.buttonTextSmall}>Grandmother</Text>
      </TouchableOpacity>
  <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('Grandfather')}} style = {{backgroundColor:"red", width:90, height:20,position:"absolute", left:200,top:240}}>      
      <Text style = {Styles.buttonTextSmall}>Grandfather</Text>
      </TouchableOpacity>

<Text style = {{marginLeft:10, fontSize:30}}>
  Click on a family members name to view information about them, and see their custom card. 
      </Text>
<TouchableOpacity onPress ={()=>{this.props.navigation.navigate('Home')}} style = {{position:'absolute', top:765}} >
  <Image source = {require('../assets/backButton.png')} style = {{backgroundColor: 'green', width:80, height:80}}/>
</TouchableOpacity>
    </View>
  )
}
}

const Styles = StyleSheet.create({
treeImage: {
width:390,
height: 400,
resizeMode:'cover',
marginTop:30,

},

buttonText:{
  fontSize:20,
  marginLeft:3,
  marginTop:-2
},
buttonTextSmall:{
  fontSize:15,
  marginLeft:3,
  marginTop:-2
}
})