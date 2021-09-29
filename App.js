import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, WebView, Linking } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from './screen/HomeScreen';
import SecondScreen from './screen/SecondScreen';



// StackNavigator 객체 생성
const stackNav = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Second: { screen: SecondScreen },
  }
);


// 네비게이터 객체를 가지고 있는 AppContainer객체 생성 : 컴포넌트 객체
const Container = createAppContainer(stackNav);

export default class App extends Component {
  render() {
    return <Container theme="light"></Container>
  }
}




