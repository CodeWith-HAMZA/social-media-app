import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import SearchInput from "../shared/SearchInput";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <View className="flex-row justify-between items-center gap-2 bg-[#0066FF]  pt-10 px-6">
        <SearchInput initialQuery={""} />
        <Ionicons name="filter" className="ml-4" size={22} color="white" />
        <Fontisto
          onPress={() => router.push("sign-in")}
          name="heart"
          size={20}
          color="white"
        />
      </View>
      <View className="bg-[#0066FF] h-[86px] w-[103%] -top-12 -right-[0%] -z-20 relative rounded-br-[200px]"></View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
