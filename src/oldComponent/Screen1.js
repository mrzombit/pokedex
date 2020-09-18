import React,{Component} from 'react'
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

export default class Screen1 extends Component{
    constructor(props){
        super(props)
        this.state ={
          version: 1,
          url:'https://pokeapi.co/api/v2/pokemon/',
          pokemonList: null
        }
        this.rightClickHandle = this.rightClickHandle.bind(this)
        this.leftClickHandle = this.leftClickHandle.bind(this)
      }
      
    Show =() => {
        this.props.navigation.navigate('S2')
    }
    
      
    leftClickHandle(){
      this.state.version >1 ? 
      this.setState({ version : this.state.version -1 }) 
      : this.setState({ version : 1 })
    }
  
    rightClickHandle(){
      this.state.version < 5 ? 
      this.setState({ version : this.state.version +1 }) 
      : this.setState({ version : 5 })
    }
    
    render() {


    const leftBtt ='<'
    const rightBtt ='>'

    return (
        <View style={pokedexStyle.indexView}>
        <View style={pokedexStyle.pokedexListView}>
            <Button onPress ={this.Show } title="Switch Screen"></Button>
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
    )}
 
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