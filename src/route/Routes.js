import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, creat } from 'react-navigation-stack'
import News from '../component/News'
import Portofolio from "../component/Portofolio";
import Home from "../component/home";
import List from "../component/List";
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer } from 'react-navigation';
import Budaya from "../component/Budaya";
import testGesture from '../component/testGesture';
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
  },
  Home: {
    screen: Home
  },
  List: {
    screen: List
  },
});


// const Drawer = createDrawerNavigator({
//   Home: Home,
//   List: List
// });

// export default createAppContainer(Drawer);
export default createAppContainer(Project);