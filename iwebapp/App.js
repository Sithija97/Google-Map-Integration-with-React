import React from "react"
import { createSwitchNavigator, createAppContainer } from "react-navigation"

//components

import DashboardScreen from "./components/Dashboard";

export default class App extends React.Component {
  render(){
    return(
      <DashboardScreen/>
    );
  }
}
