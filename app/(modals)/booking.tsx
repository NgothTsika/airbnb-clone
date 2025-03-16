import { View, Text } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";

const Page = () => {
  return (
    <BlurView intensity={70} tint="light" className=" flex-1 pt-36">
      <Text>Booking</Text>
    </BlurView>
  );
};

export default Page;
