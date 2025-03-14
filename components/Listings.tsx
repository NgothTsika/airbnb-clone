import {
  View,
  Text,
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
import {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
} from "@gorhom/bottom-sheet";

interface Props {
  listings: any[];
  category: string;
  refresh: number;
}

const Listings = ({ listings: items, category, refresh }: Props) => {
  const [loading, setLoading] = useState(false);
  const listRef = useRef<BottomSheetFlatListMethods>(null);

  useEffect(() => {
    if (refresh) {
      listRef.current?.scrollToOffset({ offset: 0, animated: true });
    }
  }, [refresh]);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);

  const renderRow: ListRenderItem<Listing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          className=" p-4 gap-2 my-4"
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <Animated.Image
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
        </Animated.View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <View style={defaultStyles.container}>
      <BottomSheetFlatList
        renderItem={renderRow}
        ref={listRef}
        data={loading ? [] : items}
        ListHeaderComponent={
          <Text className="text-center font-Montserrat-semibold mt-1">
            {items.length} homes
          </Text>
        }
      />
    </View>
  );
};

export default Listings;
