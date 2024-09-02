import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "@/components/home/header";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      {/* slider */}
      {/* category */}
      {/* list of pets */}
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
