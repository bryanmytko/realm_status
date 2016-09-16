/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

const realms = require('./realms.json').realms;

class Realm extends Component {
  render() {
    return (
      <Text style={{width: 500, height: 50 }}>
      {this.props.obj.name}
      </Text>
    )
  }
}

class realm_status extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Realm Status
        </Text>
        <Text style={{
          flex: 3,
          backgroundColor: "skyblue",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {realms.map(function(object, i){
            return <Realm obj={object} key={i} />;
          })}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('realm_status', () => realm_status);
