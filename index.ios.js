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
  ListView,
  Image
} from 'react-native';

const realms = require('./realms.json').realms;

class Realm extends Component {
  display_status(){
    return (this.props.obj.status) ? "Up" : "Down"
  }

  render() {
    return (
      <Text style={styles.realm_container}>
        {this.props.obj.name} - {this.display_status()}
      </Text>
    )
  }
}

class realm_status extends Component {
  render() {
    return (
        <Image style={{ height: 40, width: 40 }} source={require('./star.png')} />
        <Image style= {{ flex: 1, flexDirection: "column", resizeMode: 'cover' }} source={require('./assets/img/background.jpg')} >
          <Text style={styles.welcome}>
            Welcome to Realm Status
          </Text>
          {realms.map(function(realm, i) {
            return <Realm obj={realm} key={i} />
          })}
        </Image>
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
    // backgroundColor: '#ccffcc',
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
