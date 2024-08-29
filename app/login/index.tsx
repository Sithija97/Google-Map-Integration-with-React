import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/login.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Ready to make a new friend?</Text>
        <Text style={styles.subtitle}>
          Let's adopt the pet which you like and make their life happy again
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    height: "100%",
  },
  image: {
    width: "100%",
    height: 500,
  },
  content: {
    padding: 20,
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 30,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "outfit",
    fontSize: 18,
    textAlign: "center",
    color: Colors.GRAY,
  },
  button: {
    padding: 14,
    marginTop: 100,
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    borderRadius: 14,
  },
  buttonText: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    textAlign: "center",
  },
});
