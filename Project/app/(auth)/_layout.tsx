import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack className="bg-primary" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="hamza" />

    </Stack>
  );
};

export default AuthLayout;
