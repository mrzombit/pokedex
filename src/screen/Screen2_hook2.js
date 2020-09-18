import React,{useState, useEffect} from 'react'
import { StyleSheet,View,Text,Image } from 'react-native'
import axios from 'axios'

export default function Screen2_hook2(props) {
    const [dataPokemonUrl,setDataPokemonUrl] = useState(props.route.params.url)
    const [dataPokemon,setDataPokemon] = useState({})
    const [statPokemon,setStatPokemon] = useState([])
    const [loading,setLoading] = useState(true)
  
    useEffect(() =>{ //everytime that currentPageUrl changed -> rerun axios this is make a request
      let cancel
      setLoading(true)
  
      axios.get(dataPokemonUrl,{
        cancelToken: new axios.CancelToken(c => cancel=c)
      }).then((res) => {
        setLoading(false)
        setDataPokemon({
            name: res.data.name,
            imgSource: res.data.sprites.front_default,
        })
        setStatPokemon(res.data.stats.map(p => [p.stat.name,p.base_stat]))
        console.log(`asad ${statPokemon}`)
      })
      return () => cancel()
    },[dataPokemonUrl])
    
    const image_url ={ uri: dataPokemon.imgSource};
    const tab_text = "    "
    
    if(loading==true)
        return (
            <View style={pokemonDataStyle.dataViewStyle}>
                <View style={{alignItems: 'center',justifyContent:'center'}}>
                <Text style={pokemonDataStyle.dataTextStyle} >{tab_text}   Loading..</Text>
                </View>
            </View>
        )

    return (
        <View style={pokemonDataStyle.dataViewStyle}>
            <View style={pokemonDataStyle.imageViewStyle}>
                <Image source={image_url} style={pokemonDataStyle.imagePokemonStyle} resizeMode="contain"/>
            </View>
            <Text style={pokemonDataStyle.nameTextStyle }>  Name:  {dataPokemon.name}</Text>
            <View style={pokemonDataStyle.dataTextViewStyle} >
                <Text style={pokemonDataStyle.statTextStyle}>  STATS</Text>
                {statPokemon.map(p => (
                    <Text style={pokemonDataStyle.dataTextStyle} key={p[0]} >{tab_text}{p[0]} : {p[1]}</Text>
                ))} 
            </View>
        </View>
    )

}


const pokemonDataStyle = StyleSheet.create({
    dataViewStyle:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#e6f2fc",
    },
    imageViewStyle:{
        height: 200,
        flexDirection: "row",
        justifyContent: "center",
        padding: 20,
        paddingTop: 25
    },
    imagePokemonStyle:{
        width: 170,
        height: 170,
        backgroundColor:"white",
        borderWidth: 5,
        borderColor: '#44a4c7',
    },
    nameTextStyle:{
        fontFamily: 'Retro Gaming',
        color: "#142c42",
        fontSize: 25,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 2,
    },
    dataTextViewStyle:{
        flexDirection: "column",
        backgroundColor: '#d1dfeb',
        margin: 20,
        paddingBottom: 17
    },
    dataTextStyle:{
        fontFamily: 'Retro Gaming',
        color: "#174773",
        fontSize: 15,
        fontWeight: "600",
        paddingTop: 10,
        paddingBottom: 3,
    },
    statTextStyle:{
        fontFamily: 'Retro Gaming',
        color: "#142c42",
        fontSize: 21,
        fontWeight: "600",
        backgroundColor: '#9fb0bf',
        paddingTop: 15,
        paddingBottom: 10,

    },

})

/*
        fontFamily: 'Minecraftia-Regular',
        color: "#44a4c7",
        fontSize: 15,
        fontWeight: '100',
        padding: 10, 
*/