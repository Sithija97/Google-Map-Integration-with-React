import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.contsiner}>
      <View>
        <Text style={styles.welcomeText}>Welcome,</Text>
        <Text style={styles.userName}>{user?.fullName}</Text>
      </View>
      <Image source={{ uri: user?.imageUrl }} style={styles.userProfileImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  contsiner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 18,
    fontFamily: "outfit",
  },
  userName: {
    fontSize: 25,
    fontFamily: "outfit-medium",
  },
  userProfileImg: {
    height: 40,
    width: 40,
    borderRadius: 99,
  },
});
