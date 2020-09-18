# :zap:Pokedex:zap: ![](https://img.shields.io/badge/npm-6.14.6-green.svg) ![](https://img.shields.io/badge/ReactNative-2.0.1-blue.svg)
### Pokedex is welcome! 
  This app will allow you to see list of all pokemon,it shows 20 names for each page and status for each of pokemon
  > This is my first Application.

## :pushpin:Table of Contents
- [Features](#features)
- [Tools](#Tools)
- [Screenshots](#screenshots)


## Features
- Changing showing list of Pokemon previous page, next page, First page and Last page buttons.
- Showing each of Pokemon's name and status page with back botton.

## Tools
- ### Hooks ![](https://img.shields.io/badge/Hooks-2.6.0-orange.svg)
  React Native APIs turned into React Hooks allowing you to access asynchronous APIs directly in your functional components.
  
  > Note: You must use React Native >= 0.59.0
  #### Installation with npm
  ```sh
  npm install @react-native-community/hooks
  ```
- ### Navigation ![](https://img.shields.io/badge/Navigation-5.7.3-purple.svg) ![](https://img.shields.io/badge/NavigationStack-5.9.0-red.svg)
  Use React Native Navigation for Switching pages
  #### Install Navigation 
  ```sh
  npm install @react-navigation/native
  ```
  ```sh
  npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
  ```
  #### Install Navigation-Stack 
  ```sh
  npm install @react-navigation/stack
  ```
  #### import to project
  ```sh
  import {NavigationContainer} from '@react-navigation/native'
  import {createStackNavigator} from '@react-navigation/stack'
  import 'react-native-gesture-handler'
  ```
- ### Axios ![](https://img.shields.io/badge/Axios-0.20.0-lightgrey.svg)
  Use Axios for making HTTP requests to fetch DATA from API
  #### install Axios
  ```sh
  npm install --save axios
  ```
  #### import to project
  ```sh
  import axios from 'axios'
  ```
- ### Fonts
  Use React Native Navigation for Linking fonts in \src\assets\fonts folder to project
  #### Installation
  - create 'assets' folder and place all fonts here.
  - create 'react-native.config.js' in project folder the embed these code in .js:
    ```sh
    module.exports = {
      project: {
      android: {}
      },
      assets: ['./src/assets/fonts/'],
      };
    ```
  - Then link fonts to project
    ```sh
    npx react-native link
    ```

## Screenshots
  |<img src="https://i.ibb.co/cwJZqXV/icon.jpg" alt="icon" style="width: 400px;"/>|
  |:--:|
  | *Icon* |

- ### List
  |<img src="https://i.ibb.co/Fw9hR6j/list.jpg" width="220px"></img>|<img src="https://i.ibb.co/P6X0LRK/last-list.jpg" width="220px" ></img>|
  |:--:|:--:|
  | *List of Pokemon - First page* | *List of Pokemon - Last page* |

- ### Detail 
  |<img src="https://i.ibb.co/pZJ6FXC/status.jpg" width="220px"></img>|<img src="https://i.ibb.co/C07ppQ4/status2.jpg" width="220px" ></img>|
  |:--:|:--:|
  | *Pokemon Status Information-1* | *Pokemon Status Information-2* |
  
