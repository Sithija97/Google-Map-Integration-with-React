import React from "react"
import { createSwitchNavigator, createAppContainer } from "react-navigation"

//firebase initialization
import firebase from "firebase";
import firebaseConfig from "./config";
firebase.initializeApp(firebaseConfig);

//components
import LoadingScreen from "./components/Loading";
import LoginScreen from "./components/Login";
import DashboardScreen from "./components/Dashboard";

export default class App extends React.Component {
  render(){
    return(
      <AppConatiner/>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Load:LoadingScreen,
  Login:LoginScreen,
  Dashboard:DashboardScreen

});

const AppConatiner = createAppContainer(AppSwitchNavigator);