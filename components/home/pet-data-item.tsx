import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { IPet } from "@/types";
import Colors from "@/constants/Colors";

type IProps = {
  pet: IPet;
};

export default function PetCard({ pet }: IProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: pet.imageUrl }} style={styles.profileImage} />
      <Text style={styles.name}>{pet.name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.breed}>{pet.breed}</Text>
        <Text style={styles.breed}>{pet.age} YRS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginRight: 15,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontFamily: "outfit-medium",
  },
  breed: {
    fontFamily: "outfit ",
    color: Colors.GRAY,
  },
  years: {
    fontFamily: "outfit ",
    color: Colors.PRIMARY,
    paddingHorizontal: 12,
    borderRadius: 99,
    backgroundColor: Colors.LIGHT_PRIMARY,
  },
  profileImage: {
    width: 150,
    height: 135,
    borderRadius: 10,
  },
});
