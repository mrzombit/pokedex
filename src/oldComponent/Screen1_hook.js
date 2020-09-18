import React,{Component,useState} from 'react'
import { useNavigation} from '@react-navigation/native'
import {
    Button,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

export default function Screen1_hook(){
    const [url,setUrl] = useState(0)
    const [version,setVersion] = useState(1)
    const [pokemon,setPokemon] = useState(['bulbasaur','charmander'])
    const navigation = useNavigation();
      
    leftClickHandle = () => {
        version > 1 ? setVersion( version-1 ) : setVersion(1)
    }
    
    rightClickHandle = ()=>{
        version < 5 ? setVersion(version +1 ) : setVersion(5)
    }
    
    const leftBtt ='<'
    const rightBtt ='>'

    return (
        <View style={pokedexStyle.indexView}>
        <View style={pokedexStyle.pokedexListView}>
            <Button onPress ={() => {navigation.navigate('S2');}} title="Switch Screen"></Button>
        </View>
        <View style={pokedexStyle.changeVerView}>
            <TouchableOpacity onPress = {this.leftClickHandle}>
            <Text style={pokedexStyle.changeVerViewBtt}>{leftBtt}</Text>
            </TouchableOpacity>
            <Text style ={pokedexStyle.changeVerViewNum}>   {this.state.version}   </Text>
            <TouchableOpacity onPress = {this.rightClickHandle}>
            <Text style={pokedexStyle.changeVerViewBtt}>{rightBtt}</Text>
            </TouchableOpacity>
        </View>

        </View>
    )
 }

const pokedexStyle = StyleSheet.create({
    indexView:{
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#050b14"
    },
    nameAppTextBlock:{
      backgroundColor: '#111b2e',
      height: 80,
      shadowOpacity: 1,
      shadowColor: "#FFFFFF",
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    nameAppText:{
      color: "#45c0ed",
      fontSize: 35,
      fontWeight: '900',
      padding: 20,
      textAlign: 'center'
    },
    pokedexListView:{
      flex:1,
      backgroundColor: '#050b14',
      height : 400,
      display: 'flex',
      justifyContent: 'flex-start',
      textAlign: 'left',
    },
    changeVerView:{
      backgroundColor: '#111b2e',
      height: 70,
      alignItems: 'center',
      flexDirection: "row",
      justifyContent: "center"
    },
    changeVerViewNum:{
      color: "#45c0ed",
      fontSize: 30,
      fontWeight: '600',
      padding: 20,
      textAlign: 'center'
    },
    changeVerViewBtt:{
      color: "#45c0ed",
      fontSize: 50,
      fontWeight: '600',
      padding: 20,
      textAlign: 'center'
    }
  })