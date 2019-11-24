import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import * as firebase from 'firebase';

export default class HomeScreen extends React.Component {
  state = {
    email: '',
    displayName: '',
  };

  componentDidMount() {
    const {email, displayName} = firebase.auth().currentUser;
    this.setState({email, displayName});
  }

  signOutUser = () => {
    firebase.auth().signOut();
  };
  render() {
    return (
      <View style={styles.Container}>
        <Text>Hi {this.state.email}!</Text>

        <TouchableOpacity style={{marginTop:32}} onPress ={this.signOutUser}>
            <Text>Logout</Text>
        </TouchableOpacity>
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
