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
import CreateUser from './app/views/createUser/index'


const App: () => Node = () => {
  return (
    <CreateUser/>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
