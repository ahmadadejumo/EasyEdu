import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";

const SplashScreen1 = () => {
  return (
    <SafeAreaView>
      <View style={[tw`pt-30`]}>
        <Image
          source={require("../assets/boy.png")}
          style={[{ width: 400, height: 400 }]}
        />
      </View>
      <View>
        <Text style={[tw`text-center font-bold text-2xl pt-5`]}>
          Find Your Favourite Lesson
        </Text>
        <View style={[tw`border-2 mx-42 mt-1 border-emerald-400`]} />
        <Text style={[tw`text-center px-14 pt-3 text-lg text-gray-500`]}>
          Anyone can join the millions of members in our community to learn
        </Text>
      </View>
      <TouchableOpacity
        style={[
          tw`bg-emerald-500 h-[55px] mx-10 rounded-3xl flex justify-center items-center mt-16`,
        ]}
      >
        <Text style={[tw`text-white text-xl`]}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({});
