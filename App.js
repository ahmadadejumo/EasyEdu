import SplashScreen1 from "./screens/SplashScreen1";
import SplashScreen2 from "./screens/SplashScreen2";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./screens/Signin";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen1"
          component={SplashScreen1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SplashScreen2"
          component={SplashScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
