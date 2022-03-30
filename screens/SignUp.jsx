import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignUp = () => {
  const [fName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setFName("");
    setNumber("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <KeyboardAvoidingView style={[tw`flex-1 items-center pt-14`]}>
      <Text style={[tw`text-2xl font-medium`]}>Sign Up</Text>
      <View>
        <Text style={[tw`text-lg font-medium pt-7`]}>Full name</Text>
        <TextInput
          value={fName}
          onChangeText={(text) => setFName(text)}
          placeholder="Enter your fullname"
          style={[
            tw`w-[350px] h-[50px] border border-gray-400 rounded-xl px-4 mt-3 text-base`,
          ]}
        />
        <Text style={[tw`text-lg font-medium pt-3`]}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          style={[
            tw`w-[350px] h-[50px] border border-gray-400 rounded-xl px-4 mt-3 text-base`,
          ]}
        />
        <Text style={[tw`text-lg font-medium pt-3`]}>Phone Number</Text>
        <TextInput
          value={number}
          onChangeText={(text) => setNumber(text)}
          placeholder="Enter your phone number"
          style={[
            tw`w-[350px] h-[50px] border border-gray-400 rounded-xl px-4 mt-3 text-base`,
          ]}
        />
        <Text style={[tw`text-lg font-medium pt-3`]}>Password</Text>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter password"
          secureTextEntry
          style={[
            tw`w-[350px] h-[50px] border border-gray-400 rounded-xl px-4 mt-3 text-base`,
          ]}
        />
        <Text style={[tw`text-lg font-medium pt-3`]}>Confirm Password</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          placeholder="Confirm password"
          secureTextEntry
          style={[
            tw`w-[350px] h-[50px] border border-gray-400 rounded-xl px-4 mt-3 text-base`,
          ]}
        />
      </View>
      <TouchableOpacity
        onPress={handleSignUp}
        style={[
          tw`h-[55px] w-[350px] mt-5 shadow-2xl shadow-emerald-500 bg-emerald-500 flex justify-center items-center rounded-3xl`,
        ]}
      >
        <Text style={[tw`text-xl text-white`]}>Sign In</Text>
      </TouchableOpacity>
      <View style={[tw`pt-7`]}>
        <Text style={[tw`text-lg font-medium`]}>OR</Text>
      </View>
      <View style={[tw`mt-5`]}>
        <TouchableOpacity>
          <Text style={[tw`text-lg font-medium`]}>
            Already have an account?{" "}
            <Text
              onPress={() => navigation.navigate("Signin")}
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

export default SignUp;
