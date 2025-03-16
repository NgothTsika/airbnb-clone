import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);

  return (
    <View className="flex-row justify-center items-center gap-3">
      <TouchableOpacity onPress={() => setActive(0)}>
        <Text
          className={`font-Montserrat-semibold text-lg  ${
            active === 0 ? "text-black underline" : "text-gray-500"
          }`}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <Text
          className={`font-Montserrat-semibold text-lg  ${
            active === 1 ? "text-black underline" : "text-gray-500"
          }`}
        >
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalHeaderText;
