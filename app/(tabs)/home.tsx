import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "@/components/home/header";
import Slider from "@/components/home/slider";
import PetsByCategory from "@/components/home/pets-by-category";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      {/* slider */}
      <Slider />
      {/* list of pets */}
      <PetsByCategory />
      {/* add new pet */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },
});
