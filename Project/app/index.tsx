import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "@/components/shared/CustomButton";
import { useAuth } from "@/context/AuthProvider";
let Count = 0;
export default function App() {
  // HOME_PAGE like in web '/' slash
  const { user, loading, IsLoggedIn } = useAuth();

  if (  user) {
    console.log(" aagya");
    // router.replace("/home");
    return <Redirect href={"/home"} />;
  } 
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* <Text className="font-pblack">Aorara home page</Text>
      <Link href={"/home"}>Go In</Link> */}
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-start mt-12 items-center h-full px-4 ">
          {/* <Link href={"/home"} className="text-white">Go To Profile</Link> */}

          <Image
            source={images.logo}
            className="w-[150px] h-[100px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full  h-72"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Here's The Quality You Want With{" "}
              <Text className="text-secondary-100">Arora</Text>
            </Text>
          </View>
          <CustomButton
            onPress={(e) => {
              router.push("/sign-in");
            }}
            title="Continue With Email"
            isDisabled={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
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
