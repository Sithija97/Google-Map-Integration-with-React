import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";


export default class LoginScreen extends React.Component {
     signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            behavior :'web',
            androidClientId: '759211989822-3g7di5frv76k21gncfsaqqc397tr1agg.apps.googleusercontent.com',
            // iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button
        title="Sign in With Google"
        onPress={()=>this.signInWithGoogleAsync()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
