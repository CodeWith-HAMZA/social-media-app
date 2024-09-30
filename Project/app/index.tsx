import { Link, Redirect, router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/shared/CustomButton";
import { useAuth } from "@/context/AuthProvider";
import Onboarding from "@/components/Onboarding";
let Count = 0;
export default function App() {
  // HOME_PAGE like in web '/' slash
  const { user, loading, IsLoggedIn } = useAuth();

  if (user) {
    console.log(" aagya");
    // router.replace("/home");
    return <Redirect href={"/home"} />;
  }
  return (
    <SafeAreaView className="h-full">
      <StatusBar backgroundColor={"#0066FF"} />
      {/* <Text className="font-pblack">Aorara home page</Text>
      <Link href={"/home"}>Go In</Link> */}
      <Onboarding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
