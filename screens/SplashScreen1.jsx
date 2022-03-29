import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

const SplashScreen1 = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("../assets/boy.png")}
          style={{ width: 400, height: 400 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen1;

const styles = StyleSheet.create({});
