import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import News from "./src/News"
import Portofolio from "./src/Portofolio";
import Budaya from "./src/Budaya";
import testGesture from './src/testGesture';
const Project= createStackNavigator({
  News: {
   screen: News
  },
  Portofolio: {
   screen: Portofolio
  },
  Budaya: {
    screen: Budaya
  },
  testGesture: {
    screen: testGesture
  }
});
export default createAppContainer(Project);