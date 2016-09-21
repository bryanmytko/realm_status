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
  ScrollView,
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
        <Image style={styles.container} source={require('./assets/img/background.jpg')} >
          <Text style={styles.welcome}>
            Realm Status
          </Text>
          <ScrollView ref='scrollView' keyboardDismissMode='interactive' style={styles.scrollView} contentContainerStyle={styles.contentContainerStyle}>
          {realms.map(function(realm, i) {
            return <Realm obj={realm} key={i} />
          })}
          </ScrollView>
        </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
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
  scrollView: {
    flex: 1,
  }
});

AppRegistry.registerComponent('realm_status', () => realm_status);
