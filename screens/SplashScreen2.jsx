import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const SplashScreen2 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={[tw`pt-20`]}>
        <Image
          source={require("../assets/employee.png")}
          style={[{ width: 400, height: 400 }]}
        />
      </View>
      <View>
        <Text style={[tw`text-center font-bold text-2xl pt-5`]}>
          Discover Useful Resources
        </Text>
        <View style={[tw`border-2 mx-42 mt-1 border-emerald-400`]} />
        <Text style={[tw`text-center px-14 pt-3 text-lg text-gray-500`]}>
          This is an online learning app that gives access to all comprehensive
          useful resources
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Signin")}
        style={[
          tw`bg-emerald-500 shadow-2xl shadow-emerald-500 h-[55px] mx-10 rounded-3xl flex justify-center items-center mt-14`,
        ]}
      >
        <Text style={[tw`text-white text-xl`]}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SplashScreen2;
