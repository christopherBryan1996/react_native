/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import CreateUser from './app/components/createUser/index'
import Login from './app/components/login'

const App: () => Node = () => {
  return (
    //<CreateUser/>
    <Login/>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
