import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity,ScrollView} from 'react-native'
import { useNavigation} from '@react-navigation/native'
export default function pokemonList(props) {

    const {navigate} = useNavigation()

    if (props.loading == true){ 
        return(
        <Text style={{color: "#21a4c7",fontSize: 18,fontWeight: '0',textAlign: 'center',padding: 20,}}>Loading..</Text>
    )}
          
    console.log(props.pokemon)
    return (
        <View style={pokedexStyle.pokedexListView}>
            <ScrollView>
              {props.pokemon.map(p => (
                <TouchableOpacity onPress ={() => { navigate('MonsterInfoScreen', {name:p[0],url:p[1]});}}>
                    <View style={pokedexStyle.pokeListBlockStyle} key={p[0]}>
                        <Text style={pokedexStyle.pokeListTextStyle}>     {p[0]}</Text>
                    </View>
                </TouchableOpacity>
            ))}  
            </ScrollView>
        </View>
    )
}

const pokedexStyle = StyleSheet.create({
    pokeListTextStyle:{
        fontFamily: 'Minecraftia-Regular',
        color: "#44a4c7",
        fontSize: 15,
        fontWeight: '100',
        padding: 10,
    },
    pokeListBlockStyle:{
        height : 60,
        borderColor:'#111b2e',
        borderBottomWidth:2,
        alignItems: 'center',
        flexDirection: "row",
    },
    pokedexListView:{
        flex:1,
        backgroundColor: '#050b14',
        height : 400,
        display: 'flex',
        justifyContent: 'flex-start',
        textAlign: 'left',
      },
})
