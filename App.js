import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//components
import LoadingScreen from './components/Loading';
import LoginScreen from './components/Login';
import RegisterScreen from './components/Register';
import HomeScreen from './components/Home'; 

//firebase configuration

import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDINhGrbjWU02rJ9fjeezs1ju-iDDsOrW0",
  authDomain: "iweb-social-app.firebaseapp.com",
  databaseURL: "https://iweb-social-app.firebaseio.com",
  projectId: "iweb-social-app",
  storageBucket: "iweb-social-app.appspot.com",
  messagingSenderId: "918550318320",
  appId: "1:918550318320:web:57e44df7a2494b30b1c635"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//navigation
const AppStack = createStackNavigator({
  Home:HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth:AuthStack
    },
    {
      initialRouteName :"Loading"
    }
  )
)