import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Create = () => {
  return (
    <SafeAreaView className="bg-primary min-h-full">
      <ScrollView>
        <Text className="text-white text-2xl font-bold">Upload Post</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});
