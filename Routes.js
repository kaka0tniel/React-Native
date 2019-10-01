import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import News from "./src/News"
import Portofolio from "./src/Portofolio";
import Budaya from "./src/Budaya";
const Project= createStackNavigator({
  News: {
   screen: News
  },
  Portofolio: {
   screen: Portofolio
  },
  Budaya: {
    screen: Budaya
  }
});
export default createAppContainer(Project);