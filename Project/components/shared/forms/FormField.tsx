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
  titleStyles: string;
  secure: boolean;
  handleTextChange: (
    field: string
  ) => (e: string | React.ChangeEvent<any>) => void;
}
export default function FormField({
  handleTextChange,
  otherStyles,
  placeholder,
  title,
  titleStyles,
  value,
  secure,
}: FieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <View className={otherStyles}>
        {title && <Text className={`mb-3 mt-5 ${titleStyles}`}>{title}</Text>}
        <View className="border w-full flex-row px-3 justify-between border-[#848484]  rounded-lg">
          <TextInput
            value={value}
            placeholder={placeholder}
            onChangeText={handleTextChange}
            placeholderTextColor={"#7b7b8b"}
            secureTextEntry={title === "Password" || secure}
            className="h-11 w-full"
            // className={`h-12 text-md  ${
            //   title == "Password" ? "w-full" : "w-full"
            // }`}
          ></TextInput>
           {/* {title === "Password" && (
            <TouchableOpacity
              className="self-center"
              onPress={() => setShowPassword((_) => !_)}
              title="Show"
            >
              <Text className=" font-bold text-xs">
                {showPassword ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          )} */}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
