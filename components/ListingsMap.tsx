import React from "react";
import { Marker, PROVIDER_DEFAULT } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { StyleSheet, Text, View } from "react-native";
import { ListingGeo } from "@/interfaces/listingGeo";
import { useRouter } from "expo-router";

interface Props {
  listings: any;
}

const INITIAL_REGION = {
  latitude: 5.5571096, // Latitude for Accra, Dome, Ghana
  longitude: -0.2012376, // Longitude for Accra, Dome, Ghana
  latitudeDelta: 0.0922, // Adjust the delta values as needed
  longitudeDelta: 0.0421, // Adjust the delta values as needed
};

const ListingsMap = ({ listings }: Props) => {
  const router = useRouter();

  const onMarkerSelected = (item: ListingGeo) => {
    router.push(`/listing/${item.properties.id}`);
  };

  const renderCluster = (cluster: any) => {
    const { id, geometry, onPress, properties } = cluster;
    const points = properties.point_count;

    return (
      <Marker
        key={`cluster-${id}`}
        coordinate={{
          longitude: geometry.coordinates[0],
          latitude: geometry.coordinates[1],
        }}
        onPress={onPress}
      >
        <View className=" bg-white px-1 w-10 h-10 rounded-full shadow-md elevation-md shadow-black justify-center">
          <Text className=" text-black text-center font-semibold">
            {points}
          </Text>
        </View>
      </Marker>
    );
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_DEFAULT}
        showsMyLocationButton
        initialRegion={INITIAL_REGION}
        showsBuildings
        showsTraffic
        showsCompass
        showsUserLocation
        animationEnabled={false}
        clusterColor="#fff"
        clusterTextColor="black"
        renderCluster={renderCluster}
      >
        {listings.features.map((item: ListingGeo) => (
          <Marker
            key={item.properties.id}
            coordinate={{
              latitude: +item.properties.latitude,
              longitude: +item.properties.longitude,
            }}
            onPress={() => onMarkerSelected(item)}
          >
            <View className=" bg-white p-2 rounded-lg shadow-md elevation-md shadow-black justify-center">
              <Text className="font-Montserrat-semibold text-sm">
                $ {item.properties.price}
              </Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default ListingsMap;
