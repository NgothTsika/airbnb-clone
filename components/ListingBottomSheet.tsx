import { Text, TouchableOpacity, View } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import { Listing } from "@/interfaces/listing";
import BottomSheet from "@gorhom/bottom-sheet";
import Listings from "@/components/Listings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ListingsMap from "./ListingsMap";
import ListingsDataGeo from "@/assets/data/airbnb-listings.geo.json";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  listings: Listing[];
  category: string;
}

const ListingBottomSheet = ({ listings, category }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["9%", "100%"], []);

  const [refresh, setRefresh] = useState(0);
  const showMap = () => {
    bottomSheetRef.current?.collapse();
    setRefresh(refresh + 1);
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      enablePanDownToClose={false}
      snapPoints={snapPoints}
      handleIndicatorStyle={{ backgroundColor: Colors.grey }}
    >
      <View className="flex-1">
        <Listings listings={listings} category={category} refresh={refresh} />
        <View className=" absolute bottom-8 items-center w-full">
          <TouchableOpacity
            onPress={showMap}
            className=" bg-black p-3 rounded-3xl flex-row gap-3 items-center"
          >
            <Text className="text-white font-Montserrat-semibold">Map</Text>
            <Ionicons name="map" color="#ffff" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

export default ListingBottomSheet;
