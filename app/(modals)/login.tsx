import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  useWarmUpBrowser();
  return (
    <View className=" flex-1 bg-white p-6">
      <TextInput
        placeholderTextColor={"gray"}
        autoCapitalize="none"
        placeholder="Email"
        style={[defaultStyles.inputField]}
        className="mb-7"
      />
      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      {/* separatorView */}
      <View className=" flex-row gap-2 items-center my-7 font-bold  text-lg">
        <View className="  flex-1 border-separate border-b-[1px] " />
        <Text className="">or</Text>
        <View className="  flex-1 border-separate border-b-[1px] " />
      </View>

      {/* link auth */}
      <View className="gap-5">
        <TouchableOpacity className=" bg-white border border-gray-400 h-12 rounded-lg flex-row items-center justify-center px-2">
          <Ionicons name="call" size={24} style={defaultStyles.btnIcon} />
          <Text>Continue with Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" bg-white border border-gray-400 h-12 rounded-lg flex-row items-center justify-center px-2">
          <Ionicons name="logo-apple" size={24} style={defaultStyles.btnIcon} />
          <Text>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" bg-white border border-gray-400 h-12 rounded-lg flex-row items-center justify-center px-2">
          <Ionicons
            name="logo-google"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" bg-white border border-gray-400 h-12 rounded-lg flex-row items-center justify-center px-2">
          <Ionicons
            name="logo-facebook"
            size={24}
            style={defaultStyles.btnIcon}
          />
          <Text>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 26,
//   },

//   seperatorView: {
//     flexDirection: "row",
//     gap: 10,
//     alignItems: "center",
//     marginVertical: 30,
//   },
//   seperator: {
//     fontFamily: "mon-sb",
//     color: Colors.grey,
//     fontSize: 16,
//   },

//   btnOutlineText: {
//     color: "#000",
//     fontSize: 16,
//     fontFamily: "mon-sb",
//   },
// });
