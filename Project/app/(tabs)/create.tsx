import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FilePicker from "@/components/shared/FilePicker";

const Create = () => {
  return (
    <SafeAreaView className="bg-primary min-h-full py-8 px-4">
      <ScrollView>
        <Text className="text-white text-2xl font-bold">Upload Post</Text>

        <FilePicker
          label="Pick An Image For Thumbnail"
          onFileChange={(file) => {
            console.log(file);
          }}
          type={"image"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});
