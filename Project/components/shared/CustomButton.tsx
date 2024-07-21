import {
  ActivityIndicator,
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { isLoaded } from "expo-font";
import { icons } from "@/constants";

interface CustomButtonProps {
  icon?: string;
  isDisabled: boolean;
  onPress: (e: GestureResponderEvent) => void;
  textStyles?: string;
  containerStyles?: string;
  title: string;
}
const CustomButton = ({
  containerStyles,
  isDisabled,
  onPress,
  textStyles,
  icon,
  title,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-100 flex   flex-row py-2 justify-center items-center mt-12 w-full rounded-lg ${
        isDisabled ? "opacity-50" : ""
      } ${containerStyles}`}
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
    >
      <View className="flex-row  items-center">
        <Text className={`font-bold text-lg ${textStyles}`}>{title}</Text>
        {icon ? (
          <Image
            source={icon as ImageSourcePropType}
            className="w-[18px] h-[18px] ml-2"
          />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
