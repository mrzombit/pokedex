import React,{useState, useEffect} from 'react'
import { useNavigation} from '@react-navigation/native'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import PokemonList from '../components/pokemonList'
import axios from 'axios'

const Screen1_hook2 = () =>{
  const {navigate} = useNavigation()

  const [url,setUrl] = useState(0)
  const [version,setVersion] = useState(1)
  const [pokemon,setPokemon] = useState([])
  
  const [currentPageUrl,setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl,setNextPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [prevPageUrl,setPrevPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [loading,setLoading] = useState(true)


  useEffect(() =>{ //everytime that currentPageUrl changed -> rerun axios this is make a request
    let cancel
    setLoading(true)

    axios.get(currentPageUrl,{
      cancelToken: new axios.CancelToken(c => cancel=c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => [p.name,p.url])) 
    })

    return () => cancel()
  },[currentPageUrl])

  const leftClickHandle = () => {
    if (version>1){
      setVersion(version -1 )
      prevPageUrl ? setCurrentPageUrl(prevPageUrl):null
    }
  }

  const maxLeftClickHandle = () => {
    setVersion(1)
    setCurrentPageUrl('https://pokeapi.co/api/v2/pokemon')
  }

  const maxRightClickHandle = () => {
    setVersion(52)
    setCurrentPageUrl('https://pokeapi.co/api/v2/pokemon/?offset=1040&limit=20')
}
  
  const rightClickHandle = ()=>{
    if (version<52){
      setVersion(version +1 )
      {nextPageUrl&&setCurrentPageUrl(nextPageUrl)}
    }
  }

  const leftBtt ='<'
  const firstBtt ='<< '
  const rightBtt ='>'
  const lastBtt =' >>'

  return (
      <View style={pokedexStyle.indexView}>
        <View style={pokedexStyle.pokedexListView}>
          <PokemonList pokemon={pokemon} loading={loading}/>
        </View>
        <View style={pokedexStyle.changeVerView}>
        <TouchableOpacity onPress = {maxLeftClickHandle}>
          <Text style={pokedexStyle.changeMaxVerViewBtt}>{firstBtt}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {leftClickHandle}>
          <Text style={pokedexStyle.changeVerViewBtt}>{leftBtt}</Text>
          </TouchableOpacity>
          <Text style ={pokedexStyle.changeVerViewNum}> {version} </Text>
          <TouchableOpacity onPress = {rightClickHandle}>
          <Text style={pokedexStyle.changeVerViewBtt}>{rightBtt}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {maxRightClickHandle}>
          <Text style={pokedexStyle.changeMaxVerViewBtt}>{lastBtt}</Text>
          </TouchableOpacity>
      </View>
      </View>
  )
}
 
 export default Screen1_hook2

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
      fontFamily: 'Retro Gaming',
      color: "#92dcf7",
      fontSize: 35,
      fontWeight: '600',
      padding: 15,
      textAlign: 'center'
    },
    changeVerViewBtt:{
      fontFamily: 'Retro Gaming',
      color: "#5baac7",
      fontSize: 40,
      fontWeight: '600',
      padding: 10,
      textAlign: 'center'
    },
    changeMaxVerViewBtt:{
      fontFamily: 'Retro Gaming',
      color: "#326f85",
      fontSize: 35,
      fontWeight: '600',
      padding: 0,
      textAlign: 'center'
    }
  })