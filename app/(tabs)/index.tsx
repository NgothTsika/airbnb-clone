import { View, Text } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listings from "@/components/Listings";

const Index = () => {
  const [category, setCategory] = useState("Tiny homes");
  const onDataChanged = (category: string) => {
    console.log("Changed:", category);
    setCategory(category);
  };
  return (
    <View className=" flex-1 mt-[200px] ">
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listings listings={[]} category={category} />
    </View>
  );
};

export default Index;
