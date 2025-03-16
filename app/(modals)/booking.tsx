import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInDown,
} from "react-native-reanimated";
import { defaultStyles } from "@/constants/Styles";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { places } from "@/assets/data/places";
import DatePicker from "react-native-modern-datepicker";

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

const guestsGroups = [
  {
    name: "Adults",
    text: "Ages 13 or above",
    count: 0,
  },
  {
    name: "Children",
    text: "Ages 2-12",
    count: 0,
  },
  {
    name: "Infants",
    text: "Under 2",
    count: 0,
  },
  {
    name: "Pets",
    text: "Pets allowed",
    count: 0,
  },
];

const Page = () => {
  const [openCard, setOpenCard] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState(0);
  const [groups, setGroups] = useState(guestsGroups);
  const router = useRouter();
  const today = new Date().toISOString().substring(0, 10);

  const onClearAll = () => {
    setSelectedPlace(0);
    setOpenCard(0);
  };

  return (
    <BlurView intensity={70} tint="light" className="flex-1 pt-36">
      {/* Where */}
      <View className="bg-white rounded-3xl m-3 shadow-md shadow-black gap-5 p-5">
        {openCard != 0 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(0)}
            className="flex-row justify-between p-5"
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text className="font-Montserrat-semibold text-base text-gray-500">
              Where
            </Text>
            <Text className="font-Montserrat-semibold text-base text-black">
              I'm flexible
            </Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 0 && (
          <Text className="font-Montserrat-semibold text-2xl p-5">
            Where to?
          </Text>
        )}
        {openCard == 0 && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            className="px-5 pb-5"
          >
            <View className="flex-row items-center bg-white border border-gray-500 rounded-lg p-3 mb-4">
              <Ionicons name="search" size={20} color="#000" />
              <TextInput
                className="flex-1 pl-2 bg-white"
                placeholder="Search destinations"
                placeholderTextColor="grey"
              />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 25 }}
            >
              {places.map((item, index) => (
                <TouchableOpacity
                  onPress={() => setSelectedPlace(index)}
                  key={index}
                >
                  <Image
                    source={item.img}
                    className={`w-24 h-24 rounded-lg ${
                      selectedPlace == index ? "border-2 border-gray-500" : ""
                    }`}
                  />
                  <Text className="font-mon pt-2">{item.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Animated.View>
        )}
      </View>

      {/* When */}
      <View className="bg-white rounded-3xl m-3 shadow-md shadow-black gap-5 p-5">
        {openCard != 1 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(1)}
            className="flex-row justify-between p-5"
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text className="font-Montserrat-semibold text-base text-gray-500">
              When
            </Text>
            <Text className="font-Montserrat-semibold text-base text-black">
              Any week
            </Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 1 && (
          <Text className="font-Montserrat-semibold text-2xl p-5">
            When's your trip?
          </Text>
        )}
        {openCard == 1 && (
          <Animated.View className="px-5 pb-5">
            <DatePicker
              options={{
                defaultFont: "Montserrat-regular",
                headerFont: "Montserrat-semibold",
                mainColor: "red",
                borderColor: "transparent",
              }}
              current={today}
              selected={today}
              mode={"calendar"}
            />
          </Animated.View>
        )}
      </View>

      {/* Guests */}
      <View className="bg-white rounded-3xl m-3 shadow-md shadow-black gap-5 p-5">
        {openCard != 2 && (
          <AnimatedTouchableOpacity
            onPress={() => setOpenCard(2)}
            className="flex-row justify-between p-5"
            entering={FadeIn.duration(200)}
            exiting={FadeOut.duration(200)}
          >
            <Text className="font-Montserrat-semibold text-base text-gray-500">
              Who
            </Text>
            <Text className="font-Montserrat-semibold text-base text-black">
              Add guests
            </Text>
          </AnimatedTouchableOpacity>
        )}

        {openCard == 2 && (
          <Text className="font-Montserrat-semibold text-2xl p-5">
            Who's coming?
          </Text>
        )}
        {openCard == 2 && (
          <Animated.View className="px-5 pb-5">
            {groups.map((item, index) => (
              <View
                key={index}
                className={`flex-row justify-between items-center py-4 ${
                  index + 1 < guestsGroups.length
                    ? "border-b border-gray-500"
                    : ""
                }`}
              >
                <View>
                  <Text className="font-Montserrat-semibold text-base">
                    {item.name}
                  </Text>
                  <Text className="font-mon text-base text-gray-500">
                    {item.text}
                  </Text>
                </View>

                <View className="flex-row items-center gap-2">
                  <TouchableOpacity
                    onPress={() => {
                      const newGroups = [...groups];
                      newGroups[index].count =
                        newGroups[index].count > 0
                          ? newGroups[index].count - 1
                          : 0;
                      setGroups(newGroups);
                    }}
                  >
                    <Ionicons
                      name="remove-circle-outline"
                      size={26}
                      color={groups[index].count > 0 ? "gray" : "#cdcdcd"}
                    />
                  </TouchableOpacity>
                  <Text className="font-mon text-lg text-center w-5">
                    {item.count}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      const newGroups = [...groups];
                      newGroups[index].count++;
                      setGroups(newGroups);
                    }}
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={26}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </Animated.View>
        )}
      </View>

      {/* Footer */}
      <Animated.View
        entering={SlideInDown.delay(100)}
        className="absolute bottom-0 left-0 right-0 bg-white p-5 border-t border-gray-200"
      >
        <View className="flex flex-row justify-between items-center">
          <TouchableOpacity
            onPress={onClearAll}
            className="h-full justify-center flex-row items-center gap-1"
          >
            <Text className="font-Montserrat-semibold text-lg">Clear all</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={defaultStyles.btn}
            className="px-5 flex flex-row gap-2"
          >
            <Ionicons name="search-outline" size={24} color={"#fff"} />
            <Text style={defaultStyles.btnText}>Search</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </BlurView>
  );
};

export default Page;
