import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';

export default class LoadingScreen extends React.Component {
    componentDidMount(){
        firebase.auth().onAuthStateChanged( user => {
            this.props.navigation.navigate(user? "App": "Auth");
        })
    }
  render() {
    return (
      <View style={styles.Container}>
        <Text>Loading..</Text>
        <ActivityIndicator size = "large"></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
