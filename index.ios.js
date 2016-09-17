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
      <Text style={styles.realm_container}>
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
        {realms.map(function(realm, i) {
          return <Realm obj={realm} key={i} />
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#ccffcc',
    paddingTop: 40,
    paddingBottom: 40,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  realm_container: {
    flexDirection: 'column',
    padding:10,
  },
});

AppRegistry.registerComponent('realm_status', () => realm_status);
