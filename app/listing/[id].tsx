import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import listingsData from "@/assets/data/airbnb-listings.json";
import Animated from "react-native-reanimated";
import { Listing } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";

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
          resizeMode="cover"
        />
        <View className=" bg-white p-5">
          <Text className=" font-Montserrat-regular text-3xl">
            {listing.name}
          </Text>
          <Text className=" font-Montserrat-semibold pt-3 text-md">
            {listing.room_type} in {listing.smart_location}
          </Text>
          <Text className="text-base my-1 text-gray-500">
            {listing.review_scores_rating} guests • {listing.bedrooms} bedrooms
            • {listing.beds} bed • {listing.bathrooms} bathrooms{" "}
          </Text>

          <View className=" flex flex-row items-center gap-2">
            <Ionicons name="star" size={16} />
            <Text className="text-base font-Montserrat-semibold ">
              {listing.review_scores_rating / 20} • {listing.number_of_reviews}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Page;
