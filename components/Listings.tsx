import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  FadeInLeft,
  FadeInRight,
  FadeOutLeft,
} from "react-native-reanimated";
import { Listing } from "@/interfaces/listing";

interface Props {
  listings: any[];
  category: string;
}

const Listings = ({ listings: items, category }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<FlatList>(null);

  useEffect(() => {
    console.log("Reload Listings:", items.length);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View className=" p-4 gap-2 my-4">
          <Image
            source={{ uri: item.medium_url }}
            className=" w-[100%] h-[300px] rounded-xl "
          />
          <TouchableOpacity className=" absolute right-8 top-8">
            <Ionicons name="heart-outline" size={24} color={"#000"} />
          </TouchableOpacity>

          <View className=" flex-row justify-between">
            <Text className=" font-Montserrat-semibold">{item.name}</Text>
            <View className=" flex-row gap-2">
              <Ionicons name="star" size={16} />
              <Text className="font-Montserrat-semibold ">
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>

          <Text className="">{item.room_type}</Text>

          <View className=" flex-row gap-1 ">
            <Text className=" font-Montserrat-regular">$ {item.price}</Text>
            <Text className=" font-Montserrat-regular">night</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <FlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : items}
      />
    </View>
  );
};

export default Listings;
