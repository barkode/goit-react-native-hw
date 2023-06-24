import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";

const RegistrationScreen = () => {
  return;
  <View>
    <Button style={styles.regSignMesBtn}>
      <Text>Зареєструватися</Text>
    </Button>
  </View>;
};

const styles = StyleSheet.create({
  regSignMesBtn: {
    backgroundColor: "#FF6C00",
    paddingTop: 16,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    gap: 12,
  },
  // btnText: { width: 120, fontFamily: Roboto, fontWeight: 400, fontSize: 16 },
});

export default RegistrationScreen;
