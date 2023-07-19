import React, { useState, useEffect } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

const RegistrationScreen = ({ setScreen }) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardOpen(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSubmit = () => {
    console.log("Login:", login);
    console.log("Email:", email);
    console.log("Password:", password);
    setSubmitted(true);
  };

  if (submitted) {
    setTimeout(() => {
      setScreen("PostsScreen");
    }, 2000);
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "Roboto-Medium",
            fontWeight: 500,
            fontSize: 30,
            lineHeight: 35,
            textAlign: "center",
            color: "#212121",
            marginTop: 100,
          }}>
          Дякуємо за реєстрацію!
        </Text>
      </View>
    );
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}>
      <View style={styles.container}>
        <Image
          source={require("../images/bg.png")}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.form}>
          {!isKeyboardOpen && (
            <View style={styles.avatar}>
              <TouchableOpacity style={styles.btnAddAvatar}>
                <Image
                  source={require("../images/cross.png")}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
          <Text style={styles.title}>Реєстрація</Text>
          <View style={styles.inputsList}>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              value={login}
              onChangeText={setLogin}
            />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <TouchableOpacity style={styles.btnRegister} onPress={handleSubmit}>
            <Text style={styles.textRegister}>Зареєструватися</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setScreen("LoginScreen")}>
            <Text style={styles.textLogin}>Вже є акаунт? Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: "auto",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
    paddingBottom: 45,
  },

  avatar: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
  },

  btnAddAvatar: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    width: 25,
    height: 25,
    backgroundColor: "transparent",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FF6C00",
  },

  btnAvatarText: {
    color: "#FF6C00",
    fontSize: 18,
    fontFamily: "Roboto-Black",
    lineHeight: 18,
  },

  title: {
    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
    marginBottom: 32,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderStyle: "solid",
    backgroundColor: "#F6F6F6",
    padding: 15,
    maxHeight: 50,
    marginBottom: 16,

    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },

  inputsList: {
    marginBottom: 43,
  },

  btnRegister: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    width: "100%",
    height: 51,
    marginBottom: 16,
  },

  textRegister: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
    lineHeight: 19,
  },

  textLogin: {
    color: "#1B4371",
    textAlign: "center",
  },
});

export default RegistrationScreen;
