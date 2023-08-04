import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../screens/HomeScreen";
import { RegisterScreen } from "../screens/RegisterScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { CreatePostsScreen } from "../screens/CreatePostsScreen";
import { CommentsScreen } from "../screens/CommentsScreen";
import { MapScreen } from "../screens/MapScreen";
import { CameraScreen } from "../screens/CameraScreen";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export const useRoute = (isLogin) => {
  return isLogin ? (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}></MainStack.Screen>
      <MainStack.Screen
        options={{
          headerShown: true,
          headerTitleStyle: { color: "#212121", fontSize: 17 },
          headerTitleAlign: "center",
        }}
        name="Коментарі"
        component={CommentsScreen}></MainStack.Screen>
      <MainStack.Screen
        options={{ headerShown: true, headerTitleAlign: "center" }}
        name="Створити публікацію"
        component={CreatePostsScreen}></MainStack.Screen>
      <MainStack.Screen
        options={{ headerShown: true }}
        name="Камера"
        component={CameraScreen}></MainStack.Screen>
      <MainStack.Screen
        options={{ headerShown: true, headerTitleAlign: "center" }}
        name="Мапа"
        component={MapScreen}></MainStack.Screen>
    </MainStack.Navigator>
  ) : (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Registration"
        component={RegisterScreen}></AuthStack.Screen>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};
