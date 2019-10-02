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
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/dist/Entypo';
const Dashboard = createStackNavigator({
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

const Setting = createDrawerNavigator({
  Home: {
    screen: Home
  },
  List: {
    screen: List
  },
});

const TabNavigation = createMaterialTopTabNavigator({
  Home: Dashboard,
  Setting: Setting
});

const tabBotomNavigation = createMaterialBottomTabNavigator({
  Home: {
    screen:Dashboard,
    navigationOptions:{
    activeColor: '#1976d2',
    tabBarIcon:({focused})=> <Icon name="home" size={20} color={focused ? '#1976d2' : '#757575'}/>
    }
  },
  Favorite:{
    screen: Dashboard,
    navigationOptions:{
      activeColor: '#1976d2',
      tabBarIcon:({focused})=> <Icon name="star" size={20} color={focused ? '#1976d2' : '#757575'}/>
      }
  },
  Notofikasi:{
    screen: Setting,
    navigationOptions:{
      activeColor: '#1976d2',
      tabBarIcon:({focused})=> <Icon name="bell" size={20} color={focused ? '#1976d2' : '#757575'}/>
      }
  },
  Pengaturan:{
    screen: Setting,
    navigationOptions:{
      activeColor: '#1976d2',
      tabBarIcon:({focused})=> <Icon name="tools" size={20} color={focused ? '#1976d2' : '#757575'}/>
      }
  } 
},
  {
    initialRouteName: 'Home',
    activeColor: '#1976d2',
    inactiveColor: '#757575',
    barStyle: { backgroundColor: '#ffffff' },
  });


// const Drawer = createDrawerNavigator({
//   Home: Home,
//   List: List
// });

// export default createAppContainer(Drawer);
export default createAppContainer(tabBotomNavigation);