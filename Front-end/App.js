
import React, { Component } from 'react';
import {createStackNavigator} from "react-navigation";
import HomeScreen from "./Screens/Homescreen";
import ImageScreen from "./Screens/ImageScreen";

export default class App extends React.Component {

  render() {
    return (
      <AppNavigator />
    )
  }
}
const AppNavigator = createStackNavigator(
  {
  HomeScreen:{screen:HomeScreen},
  ImageScreen:{screen:ImageScreen}
}
);