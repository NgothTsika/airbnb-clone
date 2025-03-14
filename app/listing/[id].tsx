import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Share,
  StyleSheet,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import listingsData from "@/assets/data/airbnb-listings.json";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { Listing } from "@/interfaces/listing";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const DataPage = () => {
  const { id } = useLocalSearchParams();
  const listing: Listing = (listingsData as any[]).find(
    (item) => item.id === id
  );
  const navigation = useNavigation();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const shareListing = async () => {
    try {
      await Share.share({
        title: listing.name,
        url: listing.listing_url,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,

      headerBackground: () => (
        <Animated.View
          style={[
            headerAnimatedStyle,
            { backgroundColor: "#fff", height: 100, borderBottomWidth: 1 },
          ]}
        ></Animated.View>
      ),
      headerRight: () => (
        <View className="flex-row items-center justify-center gap-2">
          <TouchableOpacity
            className="w-10 h-10 rounded-full bg-white items-center justify-center"
            onPress={shareListing}
          >
            <Ionicons name="share-outline" size={22} color={"#000"} />
          </TouchableOpacity>
          <TouchableOpacity className="w-10 h-10 rounded-full bg-white items-center justify-center">
            <Ionicons name="heart-outline" size={22} color={"#000"} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-white items-center justify-center"
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={"#000"} />
        </TouchableOpacity>
      ),
    });
  }, []);

  const scrollOffset = useScrollViewOffset(scrollRef);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollOffset.value, [0, IMG_HEIGHT / 1.5], [0, 1]),
    };
  }, []);

  return (
    <View className="flex-1 bg-white">
      <Animated.ScrollView
        ref={scrollRef}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Animated.Image
          source={{ uri: listing.xl_picture_url }}
          style={[imageAnimatedStyle, styles.image]}
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

          <Text className="text-base mt-2 font-medium tracking-wide ">
            {listing.description}
          </Text>
        </View>
      </Animated.ScrollView>
      {/* footer */}
      <Animated.View className="absolute bottom-0 left-0 right-0 bg-white p-5 border-t border-gray-200">
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
      </Animated.View>
    </View>
  );
};

export default DataPage;

const styles = StyleSheet.create({
  image: {
    height: IMG_HEIGHT,
    width: width,
  },
});
