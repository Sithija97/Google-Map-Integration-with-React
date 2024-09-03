import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { ISlider } from "@/types";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config/firebase";
import Colors from "@/constants/Colors";

type IProps = {
  category: (value: string) => void;
};

export default function Category({ category }: IProps) {
  const [categoryData, setCategoryData] = useState<ISlider[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("dogs");

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const snapshot = await getDocs(collection(db, "category"));
    const data: ISlider[] = snapshot.docs.map((doc) => doc.data() as ISlider);
    setCategoryData(data);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Category</Text>

      <FlatList
        data={categoryData}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }: { item: ISlider; index: number }) => (
          <TouchableOpacity
            key={index}
            style={styles.imageWrapper}
            onPress={() => {
              setSelectedCategory(item.name);
              category(item.name);
            }}
          >
            <View
              style={[
                styles.imageContainer,
                selectedCategory === item.name && styles.selectedImageContainer,
              ]}
            >
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <Text style={styles.categoryName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  categoryTitle: {
    fontFamily: "outfit-medium",
    fontSize: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  categoryName: {
    fontFamily: "outfit-semi-bold",
    textAlign: "center",
  },
  imageContainer: {
    margin: 5,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.LIGHT_PRIMARY,
  },
  selectedImageContainer: {
    backgroundColor: Colors.DARK_PRIMARY,
    borderColor: Colors.DARK_PRIMARY,
  },
  imageWrapper: {
    flex: 1,
  },
});
