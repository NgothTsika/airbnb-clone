import { View, Text } from "react-native";
import React, { useState, useMemo } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";
import listingsData from "@/assets/data/airbnb-listings.json";
import ListingsMap from "@/components/ListingsMap";
import ListingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import ListingBottomSheet from "@/components/ListingBottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Index = () => {
  const [category, setCategory] = useState("Tiny homes");
  const items = useMemo(() => listingsData as any, []);

  const onDataChanged = (category: string) => {
    console.log("Changed:", category);
    setCategory(category);
  };
  return (
    <GestureHandlerRootView className="">
      <View className=" flex-1 mt-[8rem] ">
        <Stack.Screen
          options={{
            header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
          }}
        />
        <ListingsMap listings={ListingsDataGeo} />
        <ListingBottomSheet listings={items} category={category} />
      </View>
    </GestureHandlerRootView>
  );
};

export default Index;
