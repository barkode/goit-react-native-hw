import React from "react";
import {
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
    <View style={styles.container}>
      <ImageBackground source={imageBG} style={styles.imageBG}>
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
