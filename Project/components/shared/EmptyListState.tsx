import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import CustomButton from "./CustomButton";
import { useRouter } from "expo-router";

interface Props {
  title: string;
  subtitle: string;
  busy: boolean;
}

const EmptyListState = ({ subtitle, title, busy }: Props) => {
  const router = useRouter();
  if (busy) {
    return null;
  }
  return (
    <View className=" justify-center items-center px-4">
      {/* <Text className="text-white">EmptyListState</Text> */}
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-white text-2xl">{title}</Text>
      <Text className="text-gray-300 ">{subtitle}</Text>
      {/* <Image source={icons.createIcon}/> */}
      <CustomButton
        onPress={() => {
          router.push("profile");
        }}
        isDisabled={false}
        icon={icons.createIcon}
        title="Create"
      />
    </View>
  );
};

export default EmptyListState;

const styles = StyleSheet.create({});
