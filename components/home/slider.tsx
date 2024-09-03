import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import { ISlider } from "@/types";

export default function Slider() {
  const [sliderData, setSliderData] = useState<ISlider[]>([]);

  useEffect(() => {
    getSliders();
  }, []);

  const getSliders = async () => {
    console.log("first :", sliderData);
    const snapshot = await getDocs(collection(db, "sliders"));
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const data: ISlider[] = snapshot.docs.map((doc) => doc.data() as ISlider);
      setSliderData(data);
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={sliderData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }: { item: ISlider; index: number }) => (
          <View key={index}>
            <Image source={{ uri: item.imageUrl }} style={styles.sliderImage} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  sliderImage: {
    width: Dimensions.get("screen").width * 0.9,
    height: 170,
    borderRadius: 15,
    marginRight: 15,
  },
});
