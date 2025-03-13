import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import listingsData from "@/assets/data/airbnb-listings.json";
import Animated from "react-native-reanimated";
import { Listing } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";

const { width } = Dimensions.get("window");

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing: Listing = (listingsData as any[]).find(
    (item) => item.id === id
  );
  return (
    <View className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Image
          source={{ uri: listing.xl_picture_url }}
          className="h-[300px]"
          width={width}
          resizeMode="cover"
        />
        <View className="bg-white p-5">
          <Text className="font-Montserrat-regular text-3xl">
            {listing.name}
          </Text>
          <Text className="font-Montserrat-semibold pt-3 text-md">
            {listing.room_type} in {listing.smart_location}
          </Text>
          <Text className="text-base my-1 text-gray-500">
            {listing.review_scores_rating} guests • {listing.bedrooms} bedrooms
            • {listing.beds} bed • {listing.bathrooms} bathrooms{" "}
          </Text>

          <View className="flex flex-row items-center gap-2">
            <Ionicons name="star" size={16} />
            <Text className="text-base font-Montserrat-semibold ">
              {listing.review_scores_rating / 20} • {listing.number_of_reviews}
            </Text>
          </View>

          <View className="my-4 h-[1px] bg-gray-400" />
          <View className="flex-row flex items-center gap-3">
            <Image
              source={{ uri: listing.host_picture_url }}
              className="h-14 w-14 flex flex-row rounded-full border border-red-500"
            />
            <View>
              <Text className="text-base font-medium ">
                Hosted by {listing.host_name}
              </Text>
              <Text>Host since {listing.host_since}</Text>
            </View>
          </View>

          <View className="my-4 h-[1px] bg-gray-400" />

          <Text className="text-base mt-2 font-medium ">
            {listing.description}
          </Text>
        </View>
      </ScrollView>
      {/* footer */}
      <View className="absolute bottom-0 left-0 right-0 bg-white p-5 border-t border-gray-200">
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity className="h-full justify-center flex-row items-center gap-1">
            <Text className="font-Montserrat-semibold text-lg">
              ${listing.price}
            </Text>
            <Text>night</Text>
          </TouchableOpacity>
          <TouchableOpacity style={defaultStyles.btn} className="px-5">
            <Text style={defaultStyles.btnText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Page;
