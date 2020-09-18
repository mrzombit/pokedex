import React, { useState, Children } from 'react'
import {StyleSheet,Text,TouchableOpacity} from 'react-native';

export default class versionChangerBottomTab {

    constructor(props){
        super(props)
        this.state ={
          version: 1,
        }
        this.rightClickHandle = this.rightClickHandle.bind(this)
        this.leftClickHandle = this.leftClickHandle.bind(this)
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
        <View style={pokedexStyle.changeVerView}>
            <TouchableOpacity onPress = {this.leftClickHandle}>
            <Text style={pokedexStyle.changeVerViewBtt}>{leftBtt}</Text>
            </TouchableOpacity>
            <Text style ={pokedexStyle.changeVerViewNum}>   {this.state.version}   </Text>
            <TouchableOpacity onPress = {this.rightClickHandle}>
            <Text style={pokedexStyle.changeVerViewBtt}>{rightBtt}</Text>
            </TouchableOpacity>
        </View>
    )}
}


const pokedexStyle = StyleSheet.create({
    changeVerView:{
      backgroundColor: '#111b2e',
      height: 70,
      alignItems: 'center',
      flexDirection: "row",
      justifyContent: "center"
    },
    changeVerViewNum:{
      color: "#5baac7",
      fontSize: 30,
      fontWeight: '600',
      padding: 20,
      textAlign: 'center'
    },
    changeVerViewBtt:{
      color: "#5baac7",
      fontSize: 50,
      fontWeight: '600',
      padding: 20,
      textAlign: 'center'
    }
  })