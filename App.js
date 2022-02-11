import React,{Component} from 'react';
import { Text, View} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Home from './Screens/Home';
import FamillyScreen from './Screens/FamillyScreen';
import Mother from './Screens/Mother';
import Father from './Screens/Father';
import Sister from './Screens/Sister';
import Brother from './Screens/Brother';
import Grandmother from './Screens/Grandmother'
import Grandfather from './Screens/Grandfather'

import MotherCard from './Screens/MotherCard';
import FatherCard from './Screens/FatherCard';
import BrotherCard from './Screens/BrotherCard';
import SisterCard from './Screens/SisterCard';
import GrandmotherCard from './Screens/GrandmotherCard';
import GrandfatherCard from './Screens/GrandfatherCard';

export default class App extends React.Component{
  render(){
  return (
    <View >
      <AppContainer/>
    </View>
  )
  }
}

var AppNavigator = createSwitchNavigator({
Home : Home,
FamillyScreen:FamillyScreen,
Mother : Mother,
Father:Father,
Brother:Brother,
Sister:Sister,
Grandmother:Grandmother,
Grandfather:Grandfather,
MotherCard:MotherCard,
FatherCard:FatherCard,
SisterCard:SisterCard,
BrotherCard:BrotherCard,
GrandfatherCard:GrandfatherCard,
GrandmotherCard:GrandmotherCard,
});
const AppContainer = createAppContainer(
  AppNavigator
);