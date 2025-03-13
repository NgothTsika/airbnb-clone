import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import listingsData from "@/assets/data/airbnb-listings.json";
import Animated from "react-native-reanimated";
import { Listing } from "@/interfaces/listing";

const { width } = Dimensions.get("window");

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing: Listing = (listingsData as any[]).find(
    (item) => item.id === id
  );
  return (
    <View className=" flex-1 bg-white">
      <ScrollView>
        <Image
          source={{ uri: listing.xl_picture_url }}
          className="h-[300px]"
          width={width}
        />
      </ScrollView>
    </View>
  );
};

export default Page;
