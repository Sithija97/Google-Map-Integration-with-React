import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.greeting}>{'Hello again.\nWelcome back.'}</Text>

        <View style={styles.errorMessage}>
          <Text>Error</Text>
        </View>

        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput style={styles.input} autoCapitalize="none"></TextInput>
          </View>

          <View style={{marginTop: 32}}>
            <Text style={styles.inputTitle}>Password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"></TextInput>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.butoonText}>Signin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ alignSelf:"center", marginTop:32}}>
            <Text style = {{color:"#414959", fontSize:13}}>
                New to SocialApp? <Text style={{fontWeight:"500", color:"#5352ed"}}>Sign Up</Text> 
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 8,
  },
  greeting: {
    marginTop: 32,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  errorMessage:{
      height:72,
      alignItems:"center",
      justifyContent:"center",
      marginHorizontal:30
  },
  form:{
      marginBottom:48,
      marginHorizontal:30
  },
  inputTitle:{
      color:"#8A8F9E",
      fontSize:10,
      textTransform: "uppercase"
  },
  input:{
      borderBottomColor:"#8A8F9E",
      borderBottomWidth: StyleSheet.hairlinewidth,
      height:40,
      fontSize:15,
      color:"#161F3D"
  },
  button:{
      marginHorizontal:30,
      backgroundColor:"#5352ed",
      borderRadius:4,
      height:45,
      alignItems:"center",
      justifyContent:"center",
  },
  butoonText:{
      color:"#f1f2f6",
      fontWeight:'800'
  }
});
