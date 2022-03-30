import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={[tw`flex-1 items-center pt-14`]}>
      <Text style={[tw`text-2xl font-medium`]}>Sign In</Text>
      <Image
        source={require("../assets/signin.png")}
        style={[{ width: 250, height: 250 }]}
      />
      <View>
        <Text style={[tw`text-lg font-medium`]}>Email/Phone Number</Text>
        <TextInput
          value={email || number}
          onChangeText={(text) => setEmail(text) || setNumber(text)}
          placeholder="Enter email or phone number"
          style={[
            tw`w-[350px] h-[50px] border border-gray-400 rounded-xl px-4 mt-3 text-base`,
          ]}
        />
        <Text style={[tw`text-lg font-medium pt-5`]}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter password"
          style={[
            tw`w-[350px] h-[50px] border border-gray-400 rounded-xl px-4 mt-3 text-base`,
          ]}
        />
      </View>
      <Text style={[tw`pt-5 text-base font-medium text-emerald-500`]}>
        Forgot password?
      </Text>
      <TouchableOpacity
        style={[
          tw`h-[55px] w-[350px] mt-5 shadow-2xl shadow-emerald-500 bg-emerald-500 flex justify-center items-center rounded-3xl`,
        ]}
      >
        <Text style={[tw`text-xl text-white`]}>Sign In</Text>
      </TouchableOpacity>
      <View style={[tw`pt-7`]}>
        <Text style={[tw`text-lg font-medium`]}>OR</Text>
      </View>
      <View style={[tw`mt-7`]}>
        <TouchableOpacity>
          <Text style={[tw`text-lg font-medium`]}>
            Don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={[tw`text-emerald-500`]}
            >
              Sign Up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signin;
