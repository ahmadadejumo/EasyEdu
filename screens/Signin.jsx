import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import tw from "twrnc";

const Signin = () => {
  return (
    <KeyboardAvoidingView style={[tw`flex-1 items-center pt-20`]}>
      <Text style={[tw`text-2xl font-medium`]}>Sign In</Text>
      <Image
        source={require("../assets/signin.png")}
        style={[{ width: 250, height: 250 }]}
      />
      <View>
        <Text style={[tw`text-lg font-medium`]}>Email/Phone Number</Text>
        <TextInput
          placeholder="Enter email or phone number"
          style={[
            tw`w-[300px] h-[50px] border border-gray-400 rounded-xl px-4 mt-3 text-base`,
          ]}
        />
        <Text style={[tw`text-lg font-medium pt-5`]}>Password</Text>
        <TextInput
          placeholder="Enter password"
          style={[
            tw`w-[300px] h-[50px] border border-gray-400 rounded-xl px-4 mt-3 text-base`,
          ]}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signin;
