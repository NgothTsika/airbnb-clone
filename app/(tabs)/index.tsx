import { View, Text } from "react-native";
import React, { useState, useMemo } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";
import ListingsMap from "@/components/ListingsMap";
import ListingsDataGeo from "@/assets/data/airbnb-listings.geo.json";

const Index = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    console.log("Changed:", category);
    setCategory(category);
  };
  return (
    <View className=" flex-1 mt-32  ">
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      {/* <Listings listings={items} category={category} /> */}
      <ListingsMap listings={ListingsDataGeo} />
    </View>
  );
};

export default Index;
