
import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler'

import S1 from './src/screen/Screen1_hook2'
import S2 from './src/screen/Screen2_hook2'


const Stack = createStackNavigator()
const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='IndexScreen' component = {S1} options={styles.indexHeader}/>
        <Stack.Screen name='MonsterInfoScreen' component = {S2}  options={styles.showPokemonHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App

const styles = {
  indexHeader: {
    title: 'Pokédex',
    headerStyle: {
      backgroundColor: '#111b2e',
      height: 70,
    },
    headerTitleStyle: {
      fontFamily: 'Retro Gaming',
      color: '#45c0ed',
      fontSize: 30,
      fontWeight: '400',
      textAlign: 'center'
    }, 
  },
  showPokemonHeader: {
    title: 'Pokemon Info.',
    headerTintColor: '#5baac7',
    headerStyle: {
      backgroundColor: '#111b2e',
      height: 50,
    },
    headerTitleStyle: {
      fontFamily: 'Retro Gaming',
      color: '#45c0ed',
      fontSize: 20,
      fontWeight: '100',
      textAlign: 'left'
    }, 
  },
}