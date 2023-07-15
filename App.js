import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const [screen, setScreen] = useState("RegistrationScreen");
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {screen === "RegistrationScreen" ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingView}>
            <RegistrationScreen setScreen={setScreen} />
          </KeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingView}>
            <LoginScreen setScreen={setScreen} />
          </KeyboardAvoidingView>
        )}

        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

// import { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { StatusBar } from "expo-status-bar";
// import { useFonts } from "expo-font";
// import RegistrationScreen from "./screens/RegistrationScreen";
// import LoginScreen from "./screens/LoginScreen";

// export default function App() {
//   useFonts({
//     "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   });

//   const [screen, setScreen] = useState("RegistrationScreen");

//   return (
//     <SafeAreaProvider>
//       <View style={styles.container}>
//         {screen === "RegistrationScreen" ? (
//           <RegistrationScreen setScreen={setScreen} />
//         ) : (
//           <LoginScreen setScreen={setScreen} />
//         )}
//         <StatusBar style="auto" />
//       </View>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
/////////////////////////////*********///////////////////////////////////////////**** */ */
// import { useFonts } from "expo-font";
// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import RegistrationScreen from "./screens/RegistrationScreen";
// import LoginScreen from "./screens/LoginScreen";
// import { ImageBackground } from "react-native";

// const Stack = createStackNavigator();

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//   });

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <ImageBackground style={{flex:1, resizeMode:"cover"}}
//       source={require("./images/PhotoBG.png")}
//       >
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Registration" component={RegistrationScreen} />
//         <Stack.Screen name="LoginScreen" component={LoginScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </ImageBackground>
//   );
// }
