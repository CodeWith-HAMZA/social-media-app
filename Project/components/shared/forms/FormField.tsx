import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
interface FieldProps {
  title: string;
  value: string;
  placeholder: string;
  otherStyles: string;
  handleTextChange: (
    field: string
  ) => (e: string | React.ChangeEvent<any>) => void;
}
export default function FormField({
  handleTextChange,
  otherStyles,
  placeholder,
  title,
  value,
}: FieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <View className=" justify-center gap-y-2">
        <Text className="text-white">{title}</Text>
        <View className="border flex-row px-3 justify-between border-white focus:border-[#FF9001] rounded-lg">
          <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={handleTextChange}
            placeholderTextColor={"#7b7b8b"}
            secureTextEntry={title === "Password" && !showPassword}
            className={`h-16 text-xl text-white ${
              title == "Password" ? "w-56" : "w-full"
            }`}
          ></TextInput>
          {title === "Password" && (
            <TouchableOpacity
              className="self-center"
              onPress={() => setShowPassword((_) => !_)}
              title="Show"
            >
              <Text className="text-white font-bold text-xs">
                {showPassword ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
