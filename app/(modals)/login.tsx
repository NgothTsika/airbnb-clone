// import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import React from "react";
// import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
// import { defaultStyles } from "@/constants/Styles";
// import { Ionicons } from "@expo/vector-icons";
// import { useOAuth } from "@clerk/clerk-expo";
// import { useRouter } from "expo-router";

// enum Strategy {
//   Google = "Oauth_google",
//   Apple = "Oauth_apple",
//   Facebook = "Oauth_facebook",
// }

// const Page = () => {
//   useWarmUpBrowser();
//   const router = useRouter();
//   const { startOAuthFlow: appleAuth } = useOAuth({ strategy: "oauth_apple" });
//   const { startOAuthFlow: googleAuth } = useOAuth({
//     strategy: "oauth_google",
//   });
//   const { startOAuthFlow: facebookAuth } = useOAuth({
//     strategy: "oauth_facebook",
//   });

//   const onSelectAuth = async (strategy: Strategy) => {
//     const selectedAuth = {
//       [Strategy.Google]: googleAuth,
//       [Strategy.Apple]: appleAuth,
//       [Strategy.Facebook]: facebookAuth,
//     }[strategy];
//     try {
//       const { createdSessionId, setActive } = await selectedAuth();

//       if (createdSessionId) {
//         setActive!({ session: createdSessionId });
//         router.back();
//       }
//     } catch (err) {
//       console.error("OAuth error", err);
//     }
//   };

//   return (
//     <View className=" flex-1 bg-white p-6">
//       <TextInput
//         placeholderTextColor={"gray"}
//         autoCapitalize="none"
//         placeholder="Email"
//         style={[defaultStyles.inputField]}
//         className="mb-7"
//       />
//       <TouchableOpacity style={defaultStyles.btn}>
//         <Text style={defaultStyles.btnText}>Continue</Text>
//       </TouchableOpacity>

//       {/* separatorView */}
//       <View className=" flex-row gap-2 items-center my-7 font-bold  text-lg">
//         <View className="  flex-1 border-separate border-b-[1px] " />
//         <Text className="">or</Text>
//         <View className="  flex-1 border-separate border-b-[1px] " />
//       </View>

//       {/* link auth */}
//       <View className="gap-5">
//         <TouchableOpacity
//           onPress={() => onSelectAuth(Strategy.Apple)}
//           className=" bg-white border border-gray-400 h-12 rounded-lg flex-row items-center justify-center px-2"
//         >
//           <Ionicons name="call" size={24} style={defaultStyles.btnIcon} />
//           <Text>Continue with Phone</Text>
//         </TouchableOpacity>
//         <TouchableOpacity className=" bg-white border border-gray-400 h-12 rounded-lg flex-row items-center justify-center px-2">
//           <Ionicons name="logo-apple" size={24} style={defaultStyles.btnIcon} />
//           <Text>Continue with Apple</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => onSelectAuth(Strategy.Google)}
//           className=" bg-white border border-gray-400 h-12 rounded-lg flex-row items-center justify-center px-2"
//         >
//           <Ionicons
//             name="logo-google"
//             size={24}
//             style={defaultStyles.btnIcon}
//           />
//           <Text>Continue with Google</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           className=" bg-white border border-gray-400 h-12 rounded-lg flex-row items-center justify-center px-2"
//           onPress={() => onSelectAuth(Strategy.Facebook)}
//         >
//           <Ionicons
//             name="logo-facebook"
//             size={24}
//             style={defaultStyles.btnIcon}
//           />
//           <Text>Continue with Facebook</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Page;

import { View, Text } from "react-native";
import React from "react";

const login = () => {
  return (
    <View>
      <Text>login</Text>
    </View>
  );
};

export default login;
