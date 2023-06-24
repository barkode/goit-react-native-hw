import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import imageBG from "./images/BG.jpg";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.container}>
          <ImageBackground source={imageBG} style={styles.imageBG}>
            <RegistrationScreen />
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -1,
  },
  imageBG: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
