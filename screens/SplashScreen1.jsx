import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
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
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({});
