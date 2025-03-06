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

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <View className=" p-4">
          <Image
            source={{ uri: item.medium_url }}
            className=" w-[100%] h-[300px] "
          />
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
