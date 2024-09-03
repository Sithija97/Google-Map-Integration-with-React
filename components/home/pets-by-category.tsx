import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Category from "./category";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebase";
import { IPet } from "@/types";
import PetCard from "./pet-data-item";

export default function PetsByCategory() {
  const [petsData, setPetsData] = useState<IPet[]>([]);

  useEffect(() => {
    getPetList("dogs");
  }, []);

  const getPetList = async (category: string) => {
    const q = query(collection(db, "pets"), where("category", "==", category));
    const querySnapshot = await getDocs(q);
    const data: IPet[] = querySnapshot.docs.map((doc) => doc.data() as IPet);
    setPetsData(data);
  };
  return (
    <View>
      <Category category={(value: string) => getPetList(value)} />
      <FlatList
        data={petsData}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }: { item: IPet; index: number }) => (
          <PetCard key={index} pet={item} />
        )}
      />
    </View>
  );
}
