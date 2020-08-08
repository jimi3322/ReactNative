/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>这是React-Native组件</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'#ccc',
  },
  hello: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    margin: 10,
  },
});
//注意这里的reactdemo哦
AppRegistry.registerComponent('AwesomeProjectXX', () => AwesomeProjectXX);