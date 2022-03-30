import { StyleSheet, View } from "react-native";
import SplashScreen1 from "./screens/SplashScreen1";
import SplashScreen2 from "./screens/SplashScreen2";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SplashScreen1 /> */}
      <SplashScreen2 />
    </View>
  );
}

const styles = StyleSheet.create({});
