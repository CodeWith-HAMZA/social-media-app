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
  const CustomSecondaryButton = ({
    containerStyles,
    isDisabled,
    onPress,
    textStyles,
    icon,
    title,
  }: CustomButtonProps) => {
    return (
      <TouchableOpacity
        className={`border flex flex-row py-2 justify-center items-center mt-4 w-full rounded-lg ${
          isDisabled ? "opacity-50" : ""
        } ${containerStyles}`}
        onPress={onPress}
        disabled={isDisabled}
        activeOpacity={0.8}
      >
        <View className="flex-row items-center">
          <Text className={`text-[#848484] text-lg py-1 ${textStyles}`}>{title}</Text>
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
  
  export default CustomSecondaryButton;
  
  const styles = StyleSheet.create({});
  