import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import MaskedView from '@react-native-community/masked-view';
import Animated from "react-native-reanimated";

export default class DashboardScreen extends React.Component {
  render() {
    const colorLayer = <View style={[StyleSheet.absoluteFill, {backgroundColor:"#7F23D9"}]}/>;
    const whiteLayer = <View style={[StyleSheet.absoluteFill, {backgroundColor:"#FFF"}]}/>;
    return (
      <View style={styles.container}>
        {colorLayer}
        <MaskedView
          style={{flex:1}}
          maskElement={
            <View style= {styles.centered}>
              <Animated.Image
                source={require("../assets/Airbnb.png")}
                style={[{width:1000}]}
                resizeMode="contain"/>
            </View>
          }>
            {whiteLayer}
            <Animated.View style={styles.centered}>
              <Text>
                hello
              </Text>
            </Animated.View>
        </MaskedView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  centered:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  }
});
